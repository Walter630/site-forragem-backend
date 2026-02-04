import { Propriedade } from "../../domain/entities/Propriedade";
import { PropriedadeRepository } from "../../infra/repositories/PropriedadeRepositories";
import { CreatePropriedadeDTO, UpdatePropriedadeDTO } from "../dto/PropriedadeDto";

export interface UserContext {
    id: string;
    role: string;
    gerenteId?: string | null;
}

export class PropriedadeServices {
    constructor(private readonly repo: PropriedadeRepository) {}

    async create(data: CreatePropriedadeDTO): Promise<Propriedade> {
        const entidade = Propriedade.create({
            ...data,
            latitude: Number(data.latitude),
            longitude: Number(data.longitude),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        console.log("entidade",entidade);
        return this.repo.create(entidade.toJSON());

    }

    async update(id: string, data: UpdatePropriedadeDTO): Promise<Propriedade> {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Propriedade não encontrada");

        const entidade = Propriedade.with({
            ...existing.toJSON(),
            ...data,
            latitude: Number(data.latitude),
            longitude: Number(data.longitude),
            updatedAt: new Date(),
        });

        return this.repo.update(id, entidade);
    }

    async delete(id: string) {
        const existing = await this.repo.findById(id);
        if (!existing) throw new Error("Propriedade não encontrada");
        await this.repo.delete(id);
    }

    async findById(id: string) {
        return this.repo.findById(id);
    }

    async findAll() {
        return this.repo.findAll();
    }

    // Listar propriedades filtradas pelo usuário logado
    async findByUser(user: UserContext): Promise<Propriedade[]> {
        // ADMIN vê tudo
        if (user.role === 'ADMIN') {
            return this.repo.findAll();
        }

        // GERENTE vê apenas suas próprias propriedades
        if (user.role === 'GERENTE') {
            return this.repo.findByAdminId(user.id);
        }

        // FUNCIONARIO vê propriedades do seu gerente
        if (user.role === 'FUNCIONARIO' && user.gerenteId) {
            return this.repo.findByAdminId(user.gerenteId);
        }

        // USER comum ou sem gerenteId - retorna vazio
        return [];
    }

    // Criar propriedade vinculada ao usuário logado
    async createWithUser(data: CreatePropriedadeDTO, user: UserContext): Promise<Propriedade> {
        let adminIdToUse = user.id;

        // Se for funcionário, vincula ao gerente dele
        if (user.role === 'FUNCIONARIO' && user.gerenteId) {
            adminIdToUse = user.gerenteId;
        }

        const entidade = Propriedade.create({
            ...data,
            adminId: adminIdToUse,
            latitude: Number(data.latitude),
            longitude: Number(data.longitude),
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return this.repo.create(entidade.toJSON());
    }

    // Verificar se o usuário tem acesso à propriedade
    async userCanAccess(propriedadeId: string, user: UserContext): Promise<boolean> {
        const propriedade = await this.repo.findById(propriedadeId);
        if (!propriedade) return false;

        // ADMIN acessa tudo
        if (user.role === 'ADMIN') return true;

        // GERENTE acessa apenas suas propriedades
        if (user.role === 'GERENTE') {
            return propriedade.adminId === user.id;
        }

        // FUNCIONARIO acessa propriedades do seu gerente
        if (user.role === 'FUNCIONARIO' && user.gerenteId) {
            return propriedade.adminId === user.gerenteId;
        }

        return false;
    }
}

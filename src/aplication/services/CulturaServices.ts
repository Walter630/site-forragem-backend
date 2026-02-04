import { Cultura } from "../../domain/entities/Cultura";
import { CulturaRepositories } from "../../infra/repositories/CulturaRepositores";
import { PropriedadeRepository } from "../../infra/repositories/PropriedadeRepositories";

export interface UserContext {
    id: string;
    role: string;
    gerenteId?: string | null;
}

export class CulturaServices {
    private culturaRepositories: CulturaRepositories;
    private propriedadeRepository?: PropriedadeRepository;

    constructor(culturaRepo: CulturaRepositories, propriedadeRepo?: PropriedadeRepository) {
        this.culturaRepositories = culturaRepo;
        this.propriedadeRepository = propriedadeRepo;
    }

    async create(cultura: Cultura): Promise<Cultura> {
        const culturaCreated: any = await this.culturaRepositories.create(cultura);
        return culturaCreated
    }

    async update(id: string, cultura: Cultura): Promise<Cultura | null> {
        const culturaUpdated: any = await this.culturaRepositories.update(id, cultura);
        return culturaUpdated
    }

    async delete(id: string): Promise<void> {
        await this.culturaRepositories.delete(id);
    }

    async findById(id: string): Promise<Cultura | null> {
        const cultura: any = await this.culturaRepositories.findById(id);
        return cultura
    }

    async findAll(): Promise<Cultura[]> {
        const culturas: any = await this.culturaRepositories.findAll();
        return culturas
    }

    // Listar culturas usadas nas propriedades do usuário
    async findByUser(user: UserContext): Promise<Cultura[]> {
        // ADMIN vê todas
        if (user.role === 'ADMIN') {
            return this.culturaRepositories.findAll();
        }

        if (!this.propriedadeRepository) {
            return [];
        }

        // Busca propriedades do usuário/gerente
        let propriedades;
        if (user.role === 'GERENTE') {
            propriedades = await this.propriedadeRepository.findByAdminId(user.id);
        } else if (user.role === 'FUNCIONARIO' && user.gerenteId) {
            propriedades = await this.propriedadeRepository.findByAdminId(user.gerenteId);
        } else {
            return [];
        }

        const propriedadeIds = propriedades.map(p => p.id!).filter(id => id);

        if (propriedadeIds.length === 0) {
            return [];
        }

        return this.culturaRepositories.findByPropriedadeIds(propriedadeIds);
    }
}
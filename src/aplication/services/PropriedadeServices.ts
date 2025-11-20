import { Propriedade } from "../../domain/entities/Propriedade";
import { PropriedadeRepositories } from "../../infra/repositories/PropriedadeRepositories";
import { CreatePropriedadeDTO, UpdatePropriedadeDTO } from "../dto/PropriedadeDto";

export class PropriedadeServices {
    constructor(private readonly propriedadeRepository: PropriedadeRepositories) {}

    async create(data: CreatePropriedadeDTO): Promise<Propriedade> {
        if (!data.nomePropriedade || !data.nomeResponsavel) {
            throw new Error('Nome da propriedade e nome do responsável são obrigatórios');
        }
        if (data.latitude < -90 || data.latitude > 90 || data.longitude < -180 || data.longitude > 180) {
            throw new Error('Latitude deve estar entre -90 e 90 e longitude entre -180 e 180');
        }
        if (data.createdAt && !(data.createdAt instanceof Date)) {
            throw new Error('createdAt deve ser uma instância de Date');
        }
        if (data.updatedAt && !(data.updatedAt instanceof Date)) {
            throw new Error('updatedAt deve ser uma instância de Date');
        }

        return this.propriedadeRepository.createPropriedades(
            Propriedade.create({
                nomePropriedade: data.nomePropriedade,
                nomeResponsavel: data.nomeResponsavel,
                latitude: data.latitude,
                longitude: data.longitude,
                adminId: data.adminId,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            })
        );
    }

    async update(id: string, data: UpdatePropriedadeDTO): Promise<Propriedade | null> {
        const existing = await this.propriedadeRepository.findById(id);
        if (!existing) {
            throw new Error("Propriedade não encontrada");
        }

        return this.propriedadeRepository.update(
            Propriedade.with({
                ...existing.toJSON(),
                nomePropriedade: data.nomePropriedade ?? existing.nomePropriedade,
                nomeResponsavel: data.nomeResponsavel ?? existing.nomeResponsavel,
                latitude: data.latitude ?? existing.latitude,
                longitude: data.longitude ?? existing.longitude,
                updatedAt: new Date(),
            })
        );
    }

    async delete(id: string): Promise<void> {
        const propriedade = await this.propriedadeRepository.findById(id);
        if (!propriedade) {
            throw new Error("Propriedade não encontrada");
        }
        await this.propriedadeRepository.delete(id);
    }

    async findById(id: string): Promise<Propriedade | null> {
        return this.propriedadeRepository.findById(id);
    }

    async findAll(): Promise<Propriedade[]> {
        return this.propriedadeRepository.findAll();
    }

    async findByAdminId(adminId: string): Promise<Propriedade[]> {
        return this.propriedadeRepository.findByAdminId(adminId);
    }

    async findByNomePropriedade(nome: string): Promise<Propriedade[]> {
        return this.propriedadeRepository.findByNomePropriedade(nome);
    }

    async findByNomeResponsavel(nome: string): Promise<Propriedade[]> {
        return this.propriedadeRepository.findByNomeResponsavel(nome);
    }
}
import { Propriedade } from "../../domain/entities/Propriedade";
import { PropriedadeRepository } from "../../infra/repositories/PropriedadeRepositories";
import { CreatePropriedadeDTO, UpdatePropriedadeDTO } from "../dto/PropriedadeDto";

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
}

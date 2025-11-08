import { Estimativas } from "../../domain/entities/Estimativas";
import { EstimativasRepositories } from "../../infra/repositories/EstimativasRepositories";
import { CreateEstimativaDTO, UpdateEstimativaDTO } from "../dto/EstimativaDto";

export class EstimativaServices {
    constructor(private readonly estimativaRepository: EstimativasRepositories) {
    }

    async create(data: CreateEstimativaDTO): Promise<Estimativas> {
        if (!data.valorTotal || !data.propriedade?.id || !data.simulacaoId) {
            throw new Error('valorTotal, propriedade.id e simulacaoId são obrigatórios.');
        }

        const estimativa = Estimativas.create({
            valorTotal: data.valorTotal,
            descricao: data.descricao ?? null,
            propriedadeId: data.propriedade.id,
            simulacaoId: data.simulacaoId,
        });

        return this.estimativaRepository.create(estimativa);
    }

    async findAll(): Promise<Estimativas[]> {
        return this.estimativaRepository.findAll();
    }

    async findById(id: string): Promise<Estimativas | null> {
        return this.estimativaRepository.findById(id);
    }

    async findByPropriedade(propriedadeId: string): Promise<Estimativas[]> {
        return this.estimativaRepository.findByPropriedade(propriedadeId);
    }

    async update(id: string, data: UpdateEstimativaDTO): Promise<Estimativas | null> {
        const estimativa = await this.estimativaRepository.findById(id);
        if (!estimativa) return null;

        return this.estimativaRepository.update(estimativa)
    }

    async buscarDadosParaGrafico(): Promise<any> {
        return this.estimativaRepository.buscarDadosParaGrafico();
    }

    async delete(id: string): Promise<void> {
        return this.estimativaRepository.delete(id);
    }
}

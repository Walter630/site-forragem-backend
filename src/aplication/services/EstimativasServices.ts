import { Estimativas } from "../../domain/entities/Estimativas";
import { EstimativasRepositories } from "../../infra/repositories/EstimativasRepositories";
import { createEstimativa, UpdateEstimativaDTO } from "../dto/EstimativaDto";

export class EstimativaServices {
    constructor(private readonly estimativaRepository: EstimativasRepositories) {}

    async create(data: createEstimativa): Promise<Estimativas> {
    if (data.valorTotal === undefined || data.valorTotal === null || !data.propriedade || !data.descricao) {
        throw new Error('Todos os campos obrigatórios devem estar preenchidos');
    }

    if (data.propriedade.latitude < -90 || data.propriedade.latitude > 90 || 
        data.propriedade.longitude < -180 || data.propriedade.longitude > 180) {
        throw new Error('Latitude deve estar entre -90 e 90 e longitude entre -180 e 180');
    }

    if (data.propriedade.altitude < 0) {
        throw new Error('Altitude deve ser um valor não negativo');
    }

    const estimativa = Estimativas.create({
        valorTotal: data.valorTotal,
        descricao: data.descricao,
        propriedadeId: data.propriedade.id,
        simulacaoId: data.simulacaoId,  // <- importante!
        createdAt: data.createdAt
    });

    return this.estimativaRepository.create(estimativa);

    }
    async findAll(): Promise<Estimativas[]> {
        return this.estimativaRepository.findAll();
    }
    async update(id: number, data: UpdateEstimativaDTO): Promise<Estimativas | null> {
        return this.estimativaRepository.update({id, ...data} as Estimativas);
    }
    async delete(id: number): Promise<void> {
        return this.estimativaRepository.delete(id);
    }
    async findById(id: number): Promise<Estimativas | null> {
        return this.estimativaRepository.findById(id);
    }
    async findByPropriedade(propriedadeId: number): Promise<Estimativas[]> {
        return this.estimativaRepository.findByPropriedade(propriedadeId);
    }
}
import { Estimativas } from "../../domain/entities/Estimativas";
import { EstimativasRepositories } from "../../infra/repositories/EstimativasRepositories";
import { createEstimativa, UpdateEstimativaDTO } from "../dto/EstimativaDto";

export class EstimativaServices {
    constructor(private readonly estimativaRepository: EstimativasRepositories) {}

    async create(data: createEstimativa): Promise<Estimativas> {
        if (!data.valorTotal || !data.propriedade || !data.descricao) {
            throw new Error('Valor total, propriedade e descrição são obrigatórios');
        }
        if (data.propriedade.latitude < -90 || data.propriedade.latitude > 90 || 
            data.propriedade.longitude < -180 || data.propriedade.longitude > 180) {
            throw new Error('Latitude deve estar entre -90 e 90 e longitude entre -180 e 180');
        }
        if (data.propriedade.altitude < 0) {
            throw new Error('Altitude deve ser um valor não negativo');
        }
        return this.estimativaRepository.create({...data,
            createdAt: data.createdAt || new Date(),
        } as Estimativas);
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
}
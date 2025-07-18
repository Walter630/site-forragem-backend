import { Propriedade } from "../../domain/entities/Propriedade";
import { PropriedadeRepositories } from "../../infra/repositories/PropriedadeRepositories";
import { CreatePropriedadeDTO, UpdatePropriedadeDTO } from "../dto/PropriedadeDto";

export class PropriedadeServices {
    constructor(private readonly propriedadeRepository: PropriedadeRepositories) {}

    async create(data: CreatePropriedadeDTO): Promise<Propriedade> {
        if (!data.nomePropriedade || !data.nomeProprietario) {
            throw new Error('Nome da propriedade e nome do proprietário são obrigatórios');
        }
        if (data.latitude < -90 || data.latitude > 90 || data.longitude < -180 || data.longitude > 180) {
            throw new Error('Latitude deve estar entre -90 e 90 e longitude entre -180 e 180');
        }
        if (data.altitude < 0) {
            throw new Error('Altitude deve ser um valor não negativo');
        }
        if (data.createdAt && !(data.createdAt instanceof Date)) {
            throw new Error('createdAt deve ser uma instância de Date');
        }
        if (data.updatedAt && !(data.updatedAt instanceof Date)) {
            throw new Error('updatedAt deve ser uma instância de Date');
        }
        if (data.simulacao && typeof data.simulacao !== 'string') {
            throw new Error('Simulação deve ser uma string');
        }
        if (data.estimativas && !Array.isArray(data.estimativas)) {
            throw new Error('Estimativas deve ser um array');
        }
        return this.propriedadeRepository.createPropriedades({...data,
            createdAt: data.createdAt || new Date(),
            updatedAt: data.updatedAt || new Date(),
        } as Propriedade);
    }

    async update(id: number, data: UpdatePropriedadeDTO): Promise<Propriedade | null> {
        return this.propriedadeRepository.update({id, ...data}as Propriedade);
    }

    async delete(id: number): Promise<void> {
        const propriedade = await this.propriedadeRepository.findById(id);
        if (!propriedade) {
            throw new Error("Propriedade não encontrada");
        }
        if (propriedade.estimativas && propriedade.estimativas.length > 0) {
            throw new Error("Não é possível excluir uma propriedade com estimativas associadas");
        }
        if (propriedade.admin) {
            throw new Error("Não é possível excluir uma propriedade associada a um administrador");
        }
        if (propriedade.adminId && propriedade.adminId > 0 && propriedade.admin) {
            throw new Error("Não é possível excluir uma propriedade associada a um administrador");   
        }
        await this.propriedadeRepository.delete(id);
    }

    async findById(id: number): Promise<Propriedade | null> {
        return this.propriedadeRepository.findById(id);
    }

    async findAll(): Promise<Propriedade[]> {
        return this.propriedadeRepository.findAll();
    }
}
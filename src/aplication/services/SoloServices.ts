import { Solo } from '../../domain/entities/Solo';
import { CreateSoloDTO, UpdateSoloDTO } from '../dto/SoloDto';
import { SoloRepositories } from './../../infra/repositories/SoloRepositories';
export class SoloServices {
    constructor(private readonly soloRepository: SoloRepositories) {}

    async create(data: CreateSoloDTO): Promise<Solo> {
        if (data.profundidade <= 0 || data.fator_rocha <= 0) {
            throw new Error('Profundidade e fator de rocha devem ser maiores que zero');
        }
        if (data.condut_hidraulica_saturada < 0 || data.densidade_aparente < 0 || data.agua_0_bar < 0 || data.agua_13_bar < 0 || data.agua_15_bar < 0) {
            throw new Error('Valores de condutividade hidráulica, densidade aparente e água devem ser não negativos');
        }
        if (data.createdAt && !(data.createdAt instanceof Date)) {
            throw new Error('createdAt deve ser uma instância de Date');
        }
        return this.soloRepository.create({
            ...data,
            createdAt: data.createdAt || new Date(),
            updatedAt: data.updatedAt || new Date(),
            } as Solo
        );
    }

    async findAll(): Promise<Solo[]> {
        return this.soloRepository.findAll();
    }

    async findById(id: number): Promise<Solo | null> {
        return this.soloRepository.findById(id);
    }

    async update(id: number, data: UpdateSoloDTO): Promise<Solo | null> {
        return this.soloRepository.update({id: id, ...data} as Solo);
    }

    async delete(id: number): Promise<void> {
        return this.soloRepository.delete(id);
    }
}

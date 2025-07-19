import { Solo } from '../../domain/entities/Solo';
import { CreateSoloDTO, UpdateSoloDTO } from '../dto/SoloDto';
import { SoloRepositories } from './../../infra/repositories/SoloRepositories';
export class SoloServices {
    constructor(private readonly soloRepository: SoloRepositories) {}

     async create(data: CreateSoloDTO): Promise<Solo> {
        const novoSolo = await this.soloRepository.create({...data} as Solo);
        console.log("Novo solo criado:", novoSolo);
        return novoSolo;
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

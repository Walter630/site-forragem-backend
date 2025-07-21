import { Solo } from '../../domain/entities/Solo';
import { CreateSoloDTO, UpdateSoloDTO } from '../dto/SoloDto';
import { SoloRepositories } from '../../infra/repositories/SoloRepositories';

export class SoloServices {
  constructor(private readonly soloRepository: SoloRepositories) {}

  async create(data: CreateSoloDTO): Promise<Solo> {
    const solo = Solo.create(data);
    const novoSolo = await this.soloRepository.create(solo);
    return novoSolo;
  }

  async findAll(): Promise<Solo[]> {
    return this.soloRepository.findAll();
  }

  async findById(id: number): Promise<Solo | null> {
    return this.soloRepository.findById(id);
  }

  async update(id: number, data: UpdateSoloDTO): Promise<Solo | null> {
    return this.soloRepository.update({ id, ...data } as Solo);
  }

  async delete(id: number): Promise<void> {
    return this.soloRepository.delete(id);
  }
}

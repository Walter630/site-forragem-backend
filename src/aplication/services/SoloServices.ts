import { Solo } from '../../domain/entities/Solo';
import { CreateSoloDTO, UpdateSoloDTO } from '../dto/SoloDto';
import { SoloRepositories } from '../../infra/repositories/SoloRepositories';

export class SoloServices {
  constructor(private readonly soloRepository: SoloRepositories) {}

  async create(data: CreateSoloDTO): Promise<Solo> {
    const solo = Solo.create(data as any);
    const novoSolo = await this.soloRepository.create(solo);
    return novoSolo;
  }

  async findAll(): Promise<Solo[]> {
    return this.soloRepository.findAll();
  }

  async findById(id: string): Promise<Solo | null> {
    return this.soloRepository.findById(id);
  }

  async update(id: string, data: UpdateSoloDTO): Promise<Solo | null> {
    // merge id into Solo and call repository
    const existing = await this.soloRepository.findById(id);
    if (!existing) return null;

    const updated = await this.soloRepository.update(Solo.with({ ...existing.toJSON(), id, ...data } as any));
    return updated;
  }

  async delete(id: string): Promise<void> {
    return this.soloRepository.delete(id);
  }
}

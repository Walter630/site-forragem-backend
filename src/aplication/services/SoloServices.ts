import { Solo } from '../../domain/entities/Solo';
import { CreateSoloDTO, UpdateSoloDTO } from '../dto/SoloDto';
import { SoloRepositories } from '../../infra/repositories/SoloRepositories';
import { PropriedadeRepository } from '../../infra/repositories/PropriedadeRepositories';

export interface UserContext {
  id: string;
  role: string;
  gerenteId?: string | null;
}

export class SoloServices {
  private propriedadeRepository?: PropriedadeRepository;

  constructor(
    private readonly soloRepository: SoloRepositories,
    propriedadeRepository?: PropriedadeRepository
  ) {
    this.propriedadeRepository = propriedadeRepository;
  }

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
    const existing = await this.soloRepository.findById(id);
    if (!existing) return null;

    const updated = await this.soloRepository.update(Solo.with({ ...existing.toJSON(), id, ...data } as any));
    return updated;
  }

  async delete(id: string): Promise<void> {
    return this.soloRepository.delete(id);
  }

  // Listar solos usados nas propriedades do usuário
  async findByUser(user: UserContext): Promise<Solo[]> {
    // ADMIN vê todos
    if (user.role === 'ADMIN') {
      return this.soloRepository.findAll();
    }

    if (!this.propriedadeRepository) {
      return [];
    }

    // Busca propriedades do usuário/gerente
    let propriedades;
    if (user.role === 'GERENTE') {
      propriedades = await this.propriedadeRepository.findByAdminId(user.id);
    } else if (user.role === 'FUNCIONARIO' && user.gerenteId) {
      propriedades = await this.propriedadeRepository.findByAdminId(user.gerenteId);
    } else {
      return [];
    }

    const propriedadeIds = propriedades.map(p => p.id!).filter(id => id);

    if (propriedadeIds.length === 0) {
      return [];
    }

    return this.soloRepository.findByPropriedadeIds(propriedadeIds);
  }
}

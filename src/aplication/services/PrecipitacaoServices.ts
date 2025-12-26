import { Precipitacao } from "../../domain/entities/Precipitacao";
import { PrecipitacaoRepositories } from "../../infra/repositories/PrecipitacaoRepositories";
import { CreatePrecipitacaoDTO } from "../dto/PrecipitacaoDTO";

export class PrecipitacaoServices {
  constructor(private readonly precipitacaoRepository: PrecipitacaoRepositories) {}

  async create(data: CreatePrecipitacaoDTO): Promise<Precipitacao> {
    const precipitacao = Precipitacao.create(data);
    const novaPreci = await this.precipitacaoRepository.createPrecipitacao(precipitacao);
    return novaPreci;
  }

  async findAll(): Promise<Precipitacao[]> {
    return this.precipitacaoRepository.findAll();
  }

  async findById(id: string): Promise<Precipitacao | null> {
    return this.precipitacaoRepository.findById(id);
  }

  async update(id: string, data: CreatePrecipitacaoDTO): Promise<Precipitacao> {
    const precipitacao = Precipitacao.with({ id, ...data });
    return this.precipitacaoRepository.updatePrecipitacao(precipitacao);
  }

  async delete(id: string): Promise<void> {
    await this.precipitacaoRepository.deletePrecipitacao(id);
  }
}

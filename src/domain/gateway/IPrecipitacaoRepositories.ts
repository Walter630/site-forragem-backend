import { Precipitacao } from "../entities/Precipitacao";

export interface IPrecipitacaoRepositories {
  findAll(): Promise<Precipitacao[]>;
  findById(id: string): Promise<Precipitacao | null>;
  findByPropriedadeId(propriedadeId: string): Promise<Precipitacao | null>;
  createPrecipitacao(data: Precipitacao): Promise<Precipitacao>;
  updatePrecipitacao(data: Precipitacao): Promise<Precipitacao>;
  deletePrecipitacao(id: string): Promise<void>;
}

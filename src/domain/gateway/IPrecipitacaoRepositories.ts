import { Precipitacao } from "../entities/Precipitacao";

export interface IPrecipitacaoRepositories {
  findAll(): Promise<Precipitacao[]>;
  findById(id: number): Promise<Precipitacao | null>;
  createPrecipitacao(data: Precipitacao): Promise<Precipitacao>;
  updatePrecipitacao(data: Precipitacao): Promise<Precipitacao>;
  deletePrecipitacao(id: number): Promise<void>;
}

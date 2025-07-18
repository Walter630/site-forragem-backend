import { Precipitacao } from "../entities/Precipitacao";

export interface IPrecipitacaoRepositories {
    createPrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao>;
    findAll(): Promise<Precipitacao[]>;
    findById(id: number): Promise<Precipitacao | null>;
    updatePrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao>;
    deletePrecipitacao(id: number): Promise<void>;
}
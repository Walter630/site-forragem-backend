import { Precipitacao } from "../entities/Precipitacao";

export interface IPrecipitacaoRepositories {
    create(precipitacao: Precipitacao): Promise<Precipitacao>;
    findAll(): Promise<Precipitacao[]>;
    findById(id: number): Promise<Precipitacao | null>;
    update(precipitacao: Precipitacao): Promise<Precipitacao>;
    delete(id: number): Promise<void>;
}
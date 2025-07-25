import { Propriedade } from "../entities/Propriedade";

export interface IPropriedadeRepositories {
    createPropriedades(propriedade: Propriedade): Promise<Propriedade>;
    findAll(): Promise<Propriedade[]>;
    findBySimulacao(simulacao: string): Promise<Propriedade[]>;
    findByNomePropriedade(nomePropriedade: string): Promise<Propriedade[]>;
    findByNomeProprietario(nomeProprietario: string): Promise<Propriedade[]>;
    findById(id: number): Promise<Propriedade | null>;
    update(propriedade: Propriedade): Promise<Propriedade>;
    delete(id: number): Promise<void>;
    getSoloEPrecipitacao(propriedadeId: number): Promise<{
    soloId: number;
    precipitacaoId: number;
  }>;
}
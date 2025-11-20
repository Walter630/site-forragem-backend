import { Propriedade } from "../entities/Propriedade";

export interface IPropriedadeRepositories {
    createPropriedades(propriedade: Propriedade): Promise<Propriedade>;
    findAll(): Promise<Propriedade[]>;
    findBySimulacao(simulacao: string): Promise<Propriedade[]>;
    findByNomePropriedade(nomePropriedade: string): Promise<Propriedade[]>;
    findByNomeResponsavel(nomeResponsavel: string): Promise<Propriedade[]>;
    findById(id: string): Promise<Propriedade | null>;
    update(propriedade: Propriedade): Promise<Propriedade>;
    delete(id: string): Promise<void>;
    getSoloEPrecipitacao(propriedadeId: string): Promise<{
    soloId: string;
    precipitacaoId: string;
  }>;
    findByAdminId(adminId: string): Promise<Propriedade[]>;
}
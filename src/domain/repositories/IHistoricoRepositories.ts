import { Precipitacao, Solo } from "../../generated/prisma/client";
import { Historico } from "../entities/Historico";
import { Propriedade } from "../entities/Propriedade";

export interface IHistoricoRepositories {
    create(historico: Historico): Promise<Historico>;
    findAll(): Promise<Historico[]>;
    findByPropriedade(propriedade: Propriedade): Promise<Historico[]>;
    findBySolo(solo: Solo): Promise<Historico[]>;
    findByPrecipitacao(precipitacao: Precipitacao): Promise<Historico[]>; 
    findById(id: number): Promise<Historico | null>;
    update(historico: Historico): Promise<Historico>;
    delete(id: number): Promise<void>;
}
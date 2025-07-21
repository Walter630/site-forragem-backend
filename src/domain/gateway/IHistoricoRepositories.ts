import { Precipitacao, Solo } from "../../generated/prisma/client";
import { Historico } from "../entities/Historico";
import { Propriedade } from "../entities/Propriedade";

export interface IHistoricoRepositories {
    create(historico: Historico): Promise<Historico>;
    findAll(): Promise<Historico[]>;
    findByPropriedadeId(propriedade: number): Promise<Historico[]>;
    findById(id: number): Promise<Historico | null>;
    update(historico: Historico): Promise<Historico>;
    delete(id: number): Promise<void>;
    listarHistorico(): Promise<Historico[]>;
}
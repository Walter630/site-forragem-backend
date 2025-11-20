import { Precipitacao, Solo } from "../../generated/prisma/client";
import { Historico } from "../entities/Historico";
import { Propriedade } from "../entities/Propriedade";

export interface IHistoricoRepositories {
    create(historico: Historico): Promise<Historico>;
    findAll(): Promise<Historico[]>;
    findByPropriedadeId(propriedade: string): Promise<Historico[]>;
    findById(id: string): Promise<Historico | null>;
    update(historico: Historico): Promise<Historico>;
    delete(id: string): Promise<void>;
    listarHistorico(): Promise<Historico[]>;
}
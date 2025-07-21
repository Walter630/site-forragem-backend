// src/domain/gateway/ISimulacaoGateway.ts
import { Simulacao } from "../entities/Simulacao";

export interface ISimulacaoGateway {
  create(data: Partial<Simulacao>): Promise<Simulacao>;
  listarHistorico(): Promise<any[]>;
}

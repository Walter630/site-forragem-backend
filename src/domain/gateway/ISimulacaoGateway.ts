import { Simulacao } from "../entities/Simulacao";

export interface ISimulacaoGateway {
  salvar(dados: any, resultado: number): Promise<Simulacao>;
    listarHistorico(): Promise<any[]>;
}
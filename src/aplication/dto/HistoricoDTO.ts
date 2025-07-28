import { Historico } from "../../domain/entities/Historico";
import { Simulacao } from "../../domain/entities/Simulacao";
import { Solo } from "../../domain/entities/Solo";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { Estimativas } from "../../domain/entities/Estimativas";
import { Propriedade } from "../../domain/entities/Propriedade";

export type HistoricoCompleto = {
  historico: Historico;
  simulacao: Simulacao;
  solo: Solo;
  precipitacao: Precipitacao;
  estimativas: Estimativas;
  propriedade: Propriedade;
  producaoPorMes: { mes: string; valor: number }[];
};

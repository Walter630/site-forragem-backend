// src/aplication/dto/SimulacaoForragemDTO.ts

export interface SimularForragemInputDTO {
  id?: string;
  propriedadeId: string;
  nomeSimulacao: string;
  ano: number;
  culturaId: string;
  soloId: string;
  // Dados de clima
  eto?: number;
  indiceAridez?: number;
  precipitacaoMmAno?: number;
  numeroChuvas?: number;
  precipitacaoMmDia?: number;
  cvDia?: number;
  precipitacaoMmMes?: number;
  cvMes?: number;
  altitude?: number;
  temperaturaMed?: number;
  umidade?: number;
  dados?: Record<string, any>;
}

export interface SimularForragemOutputDTO {
  resultado: number;              // valor em kg
  estimativa?: number;           // valor estimado em kg
  diferenca?: number;            // diferença (estimativa - resultado)
  status: string;                // ex: "Produção suficiente" ou "Necessita mais produção"
  mensagem?: string;             // ex: "Você precisa de mais 120kg para atingir a meta"
}


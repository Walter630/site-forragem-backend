// src/aplication/dto/SimulacaoForragemDTO.ts

export interface SimularForragemInputDTO {
  propriedadeId: number;
  dados: Record<string, any>; // <- Aqui está o ajuste
}

export interface SimularForragemOutputDTO {
  resultado: number;              // valor em kg
  estimativa?: number;           // valor estimado em kg
  diferenca?: number;            // diferença (estimativa - resultado)
  status: string;                // ex: "Produção suficiente" ou "Necessita mais produção"
  mensagem?: string;             // ex: "Você precisa de mais 120kg para atingir a meta"
}


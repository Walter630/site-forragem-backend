// src/aplication/dto/SimulacaoForragemDTO.ts

export interface SimularForragemInputDTO {
  propriedadeId: number;
  dados: Record<string, any>; // <- Aqui está o ajuste
}

export interface SimularForragemOutputDTO {
  resultado: number;
  estimativa?: number;
  diferenca?: number;
  status: string;
}

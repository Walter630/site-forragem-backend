

// src/application/dto/SimulacaoForragemDTO.ts
export interface SimulacaoForragemDTO {
  solo: {
    agua0Bar: number;
    agua15Bar: number;
    fatorRocha: number;
    profundidade: number;
  };
  precipitacao: {
    mmAno: number;
  };
  propriedadeId: number; // necessário para associar ao histórico
  descricao?: string;    // opcional, mas recomendado
}


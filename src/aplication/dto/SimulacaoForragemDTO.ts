// src/application/dto/SimulacaoForragemDTO.ts
export interface SimulacaoForragemDTO {
  nome: string;
  coordenadas: {
    lat: number;
    long: number;
  };
  altitude: number;
  dataSimulacao: Date;
  precipitacao: {
    mmAno: number;
    mmDia: number;
    mmMes: number;
    chuvas: number;
    cvDia: number;
    cvMes: number;
  };
  solo: {
    profundidade: number;
    fatorRocha: number;
    condutividade: number;
    densidade: number;
    agua0bar: number;
    agua1por3bar: number;
    agua15bar: number;
  };
}

export interface SimulacaoForragemDTO {
    propriedadeId: number;
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
    agua0Bar: number;
    agua13Bar: number;  // ajustado para manter padrão
    agua15Bar: number;
  };
}

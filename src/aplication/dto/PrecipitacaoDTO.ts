export interface CreatePrecipitacaoDTO {
  propriedadeId: number;
  mmAno: number;
  mmDia: number;
  mmMes: number;
  chuvas: number;
  cvDia: number;
  cvMes: number;
}
export interface UpdatePrecipitacaoDTO {
  id: number;
  propriedadeId: number;
  mmAno?: number;
  mmDia?: number;
  mmMes?: number;
  chuvas?: number;
  cvDia?: number;
  cvMes?: number;
  updatedAt?: Date;
}

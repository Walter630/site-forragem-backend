export interface CreatePrecipitacaoDTO {
  mmAno: number;
  mmDia: number;
  mmMes: number;
  chuvas: number;
  cvDia: number;
  cvMes: number;
}
export interface UpdatePrecipitacaoDTO {
  id: number;
  mmAno?: number;
  mmDia?: number;
  mmMes?: number;
  chuvas?: number;
  cvDia?: number;
  cvMes?: number;
  updatedAt?: Date;
}

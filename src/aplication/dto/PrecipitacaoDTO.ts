export interface CreatePrecipitacaoDTO {
  id?: string;
  propriedadeId: string;
  mmAno?: number;
  mmDia?: number;
  mmMes?: number;
  chuvas?: number;
  cvDia?: number;
  cvMes?: number;
}

export interface UpdatePrecipitacaoDTO {
  id?: string;
  propriedadeId?: string;
  mmAno?: number;
  mmDia?: number;
  mmMes?: number;
  chuvas?: number;
  cvDia?: number;
  cvMes?: number;
  updatedAt?: Date;
}

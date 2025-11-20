export interface CreateSoloDTO {
  id?: string;
  nomeClasse: string;
  profundidade?: number;
  fatorRocha?: number;
  condutHidraulicaSaturada?: number;
  densidadeAparente?: number;
  agua0Bar?: number;
  agua13Bar?: number;
  agua15Bar?: number;
}

export interface UpdateSoloDTO {
  nomeClasse?: string;
  profundidade?: number;
  fatorRocha?: number;
  condutHidraulicaSaturada?: number;
  densidadeAparente?: number;
  agua0Bar?: number;
  agua13Bar?: number;
  agua15Bar?: number;
}

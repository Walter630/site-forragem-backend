export interface CreateSoloDTO {
  propriedadeId: number;
  profundidade: number;
  condut_hidraulica_saturada: number;
  densidade_aparente: number;
  agua_0_bar: number;
  agua_13_bar: number;
  agua_15_bar: number;
  fator_rocha: number;
}

export interface UpdateSoloDTO {
  profundidade?: number;
  condut_hidraulica_saturada?: number;
  densidade_aparente?: number;
  agua_0_bar?: number;
  agua_13_bar?: number;
  agua_15_bar?: number;
  fator_rocha?: number;
}

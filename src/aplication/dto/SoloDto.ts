import { Propriedade } from "../../domain/entities/Propriedade";

export interface CreateEstimativaDTO {
    valorTotal: number;
    propriedade: Propriedade;
    descricao?: string;
}
export interface UpdateEstimativaDTO {
    valorTotal?: number;
    propriedade?: Propriedade;
    descricao?: string;
}

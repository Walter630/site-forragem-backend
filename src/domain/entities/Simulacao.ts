// Ajustado: Simulacao
import { SimulacaoForragemDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class Simulacao {
    constructor(
        public id: number,
        public dados: SimulacaoForragemDTO,
        public resultado: number
    ) {}

    static with(data: {
        id: number;
        propriedadeId: number;
        dadosJson: SimulacaoForragemDTO;
        resultado: number;
        dataSimulacao: Date;
    }): Simulacao {
        return new Simulacao(
            data.id,
            data.dadosJson,
            data.resultado
        );
    }
}

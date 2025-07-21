// Ajustado: Simulacao
import { SimularForragemInputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class Simulacao {
    constructor(
        public id: number,
        public propriedadeId: number,
        public dados: SimularForragemInputDTO,
        public resultado: number,
        public dataSimulacao: Date,  // adiciona aqui
    ) {}

    static with(data: {
    id: number;
    propriedadeId: number;
    dados: SimularForragemInputDTO;
    resultado: number;
    dataSimulacao: Date;
}): Simulacao {
    return new Simulacao(
        data.id,
        data.propriedadeId,
        data.dados,
        data.resultado,
        data.dataSimulacao
    );
}
}

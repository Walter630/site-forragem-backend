// src/domain/entities/Simulacao.ts
import { SimularForragemInputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

type SimulacaoProps = {
    id?: string;                 // <-- era number
    propriedadeId: string;       // <-- era number
    dadosJson: Record<string, any>;
    resultado: number;
    dataSimulacao: Date;
    culturaId?: string | null;   // <-- também vira string
};

export class Simulacao {
    private props: SimulacaoProps;

    private constructor(props: SimulacaoProps) {
        this.props = props;
    }

    public static create(props: Omit<SimulacaoProps, "id">): Simulacao {
        return new Simulacao({
            ...props,
            dataSimulacao: props.dataSimulacao || new Date(),
        });
    }

    public static with(props: SimulacaoProps): Simulacao {
        return new Simulacao(props);
    }

    get id(): string | undefined {
        return this.props.id;
    }

    get propriedadeId(): string {
        return this.props.propriedadeId;
    }

    get dadosJson(): Record<string, any> {
        return this.props.dadosJson;
    }

    get resultado(): number {
        return this.props.resultado;
    }

    get dataSimulacao(): Date {
        return this.props.dataSimulacao;
    }

    get culturaId(): string | null | undefined {
        return this.props.culturaId;
    }

    toJSON() {
        return { ...this.props };
    }
}

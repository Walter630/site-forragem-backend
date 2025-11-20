// src/domain/entities/Simulacao.ts
import { SimularForragemInputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

type SimulacaoProps = {
    id?: string;
    nomeSimulacao: string;
    ano: number;
    propriedadeId: string;
    culturaId: string;
    soloId: string;
    // Dados de clima
    eto?: number;
    indiceAridez?: number;
    precipitacaoMmAno?: number;
    numeroChuvas?: number;
    precipitacaoMmDia?: number;
    cvDia?: number;
    precipitacaoMmMes?: number;
    cvMes?: number;
    altitude?: number;
    temperaturaMed?: number;
    umidade?: number;
    resultado?: number;
    dataSimulacao: Date;
    createdAt?: Date;
    updatedAt?: Date;
};

export class Simulacao {
    private props: SimulacaoProps;

    private constructor(props: SimulacaoProps) {
        this.props = props;
    }

    public static create(props: Omit<SimulacaoProps, "id" | "dataSimulacao" | "createdAt">): Simulacao {
        return new Simulacao({
            ...props,
            dataSimulacao: props.updatedAt || new Date(),
            createdAt: new Date(),
        });
    }

    public static with(props: SimulacaoProps): Simulacao {
        return new Simulacao(props);
    }

    get id(): string | undefined {
        return this.props.id;
    }

    get nomeSimulacao(): string {
        return this.props.nomeSimulacao;
    }

    get ano(): number {
        return this.props.ano;
    }

    get propriedadeId(): string {
        return this.props.propriedadeId;
    }

    get culturaId(): string {
        return this.props.culturaId;
    }

    get soloId(): string {
        return this.props.soloId;
    }

    get eto(): number | undefined {
        return this.props.eto;
    }

    get indiceAridez(): number | undefined {
        return this.props.indiceAridez;
    }

    get precipitacaoMmAno(): number | undefined {
        return this.props.precipitacaoMmAno;
    }

    get numeroChuvas(): number | undefined {
        return this.props.numeroChuvas;
    }

    get precipitacaoMmDia(): number | undefined {
        return this.props.precipitacaoMmDia;
    }

    get cvDia(): number | undefined {
        return this.props.cvDia;
    }

    get precipitacaoMmMes(): number | undefined {
        return this.props.precipitacaoMmMes;
    }

    get cvMes(): number | undefined {
        return this.props.cvMes;
    }

    get altitude(): number | undefined {
        return this.props.altitude;
    }

    get temperaturaMed(): number | undefined {
        return this.props.temperaturaMed;
    }

    get umidade(): number | undefined {
        return this.props.umidade;
    }

    get resultado(): number | undefined {
        return this.props.resultado;
    }

    get dataSimulacao(): Date {
        return this.props.dataSimulacao;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }

    toJSON() {
        return { ...this.props };
    }
}

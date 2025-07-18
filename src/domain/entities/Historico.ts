import { Precipitacao } from "./Precipitacao";
import { Solo } from "./Solo";

type HistoricoProps = {
    id: number;
    descricao?: string;
    soloId?: number;
    solo?: Solo;
    precipitacaoId?: number;
    precipitacao?: Precipitacao;
    createdAt?: Date;
    updatedAt?: Date;   
}

export class Historico {
    private props: HistoricoProps;

    constructor(props: HistoricoProps) {
        this.props = props;
    }

    public static create(props: Omit<Historico, 'id'>): Historico {
        return new Historico({
            ...props,
            id: 0, // Default id to 0, will be set by the database
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: HistoricoProps): Historico {
        return new Historico(props);
    }   

    get id(): number | undefined {
        return this.props.id;
    }

    get descricao(): string | undefined {
        return this.props.descricao;
    }

    get soloId(): number | undefined {
        return this.props.soloId;
    }

    get solo(): Solo | undefined {
        return this.props.solo;
    }

    get precipitacaoId(): number | undefined {
        return this.props.precipitacaoId;
    }

    get precipitacao(): Precipitacao | undefined {
        return this.props.precipitacao;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }

    toJSON() {
        return {
            id: this.id,
            descricao: this.descricao,
            soloId: this.soloId,
            solo: this.solo,
            precipitacaoId: this.precipitacaoId,
            precipitacao: this.precipitacao,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
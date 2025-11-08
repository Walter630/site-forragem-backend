type HistoricoProps = {
    id?: string;                 // <-- Agora string (Mongo)
    descricao?: string;
    valorSimulacao: number;
    simulacaoId: string;         // <-- Agora string (ref Mongo)
    propriedadeId: string;       // <-- Agora string
    soloId: string;              // <-- Agora string
    precipitacaoId: string;      // <-- Agora string
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
};

export class Historico {
    private props: HistoricoProps;

    constructor(props: HistoricoProps) {
        this.props = props;
    }

    public static create(props: Omit<HistoricoProps, "id">): Historico {
        return new Historico({
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: HistoricoProps): Historico {
        return new Historico(props);
    }

    get id(): string | undefined { return this.props.id; }
    get descricao(): string | undefined { return this.props.descricao; }
    get valorSimulacao(): number { return this.props.valorSimulacao; }
    get propriedadeId(): string { return this.props.propriedadeId; }
    get simulacaoId(): string { return this.props.simulacaoId; }
    get soloId(): string { return this.props.soloId; }
    get precipitacaoId(): string { return this.props.precipitacaoId; }
    get createdAt(): Date | undefined { return this.props.createdAt; }
    get updatedAt(): Date | undefined { return this.props.updatedAt; }
    get deletedAt(): Date | null | undefined { return this.props.deletedAt; }

    toJSON() {
        return { ...this.props };
    }
}

type SoloProps = {
    id?: string;                         // <-- era number
    propriedadeId: string;               // <-- era number
    profundidade: number;
    fator_rocha: number;
    condut_hidraulica_saturada: number;
    densidade_aparente: number;
    agua_0_bar: number;
    agua_13_bar: number;
    agua_15_bar: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
};

export class Solo {
    private props: SoloProps;

    constructor(props: SoloProps) {
        this.props = props;
    }

    public static create(props: Omit<SoloProps, "id">): Solo {
        return new Solo({
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
        });
    }

    static with(props: SoloProps): Solo {
        return new Solo(props);
    }

    // Conversão do documento vindo do MongoDB
    static fromMongo(doc: any): Solo {
        return new Solo({
            id: doc._id?.toString(),                         // garante string
            propriedadeId: doc.propriedadeId?.toString(),
            profundidade: doc.profundidade,
            fator_rocha: doc.fator_rocha,
            condut_hidraulica_saturada: doc.condut_hidraulica_saturada,
            densidade_aparente: doc.densidade_aparente,
            agua_0_bar: doc.agua_0_bar,
            agua_13_bar: doc.agua_13_bar,
            agua_15_bar: doc.agua_15_bar,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            deletedAt: doc.deletedAt,
        });
    }

    get id(): string | undefined { return this.props.id; }
    get propriedadeId(): string { return this.props.propriedadeId; }
    get profundidade(): number { return this.props.profundidade; }
    get fator_rocha(): number { return this.props.fator_rocha; }
    get condut_hidraulica_saturada(): number { return this.props.condut_hidraulica_saturada; }
    get densidade_aparente(): number { return this.props.densidade_aparente; }
    get agua_0_bar(): number { return this.props.agua_0_bar; }
    get agua_13_bar(): number { return this.props.agua_13_bar; }
    get agua_15_bar(): number { return this.props.agua_15_bar; }
    get createdAt(): Date | undefined { return this.props.createdAt; }
    get updatedAt(): Date | undefined { return this.props.updatedAt; }
    get deletedAt(): Date | null | undefined { return this.props.deletedAt; }

    toJSON() {
        return { ...this.props };
    }
}

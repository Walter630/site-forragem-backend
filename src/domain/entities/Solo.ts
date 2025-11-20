type SoloProps = {
    id?: string;
    nomeClasse: string;
    profundidade?: number;
    fatorRocha?: number;
    condutHidraulicaSaturada?: number;
    densidadeAparente?: number;
    agua0Bar?: number;
    agua13Bar?: number;
    agua15Bar?: number;
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

    // Conversão do documento vindo do MongoDB/Prisma
    static fromPrisma(doc: any): Solo {
        return new Solo({
            id: doc.id?.toString(),
            nomeClasse: doc.nomeClasse,
            profundidade: doc.profundidade,
            fatorRocha: doc.fatorRocha,
            condutHidraulicaSaturada: doc.condutHidraulicaSaturada,
            densidadeAparente: doc.densidadeAparente,
            agua0Bar: doc.agua0Bar,
            agua13Bar: doc.agua13Bar,
            agua15Bar: doc.agua15Bar,
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            deletedAt: doc.deletedAt,
        });
    }

    get id(): string | undefined { return this.props.id; }
    get nomeClasse(): string { return this.props.nomeClasse; }
    get profundidade(): number | undefined { return this.props.profundidade; }
    get fatorRocha(): number | undefined { return this.props.fatorRocha; }
    get condutHidraulicaSaturada(): number | undefined { return this.props.condutHidraulicaSaturada; }
    get densidadeAparente(): number | undefined { return this.props.densidadeAparente; }
    get agua0Bar(): number | undefined { return this.props.agua0Bar; }
    get agua13Bar(): number | undefined { return this.props.agua13Bar; }
    get agua15Bar(): number | undefined { return this.props.agua15Bar; }
    get createdAt(): Date | undefined { return this.props.createdAt; }
    get updatedAt(): Date | undefined { return this.props.updatedAt; }
    get deletedAt(): Date | null | undefined { return this.props.deletedAt; }

    toJSON() {
        return { ...this.props };
    }
}

type PrecipitacaoProps = {
    id?: string;
    propriedadeId: string;
    mmAno?: number;
    chuvas?: number;
    mmDia?: number;
    cvDia?: number;
    mmMes?: number;
    cvMes?: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
};

export class Precipitacao {
    private props: PrecipitacaoProps;

    constructor(props: PrecipitacaoProps) {
        this.props = props;
    }

    public static create(props: Omit<PrecipitacaoProps, 'id'>): Precipitacao {
        return new Precipitacao({
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: PrecipitacaoProps): Precipitacao {
        return new Precipitacao(props);
    }

    static fromPrisma(prismaObj: any): Precipitacao {
        return new Precipitacao({
            id: prismaObj.id,
            propriedadeId: prismaObj.propriedadeId,
            mmAno: prismaObj.mmAno,
            chuvas: prismaObj.chuvas,
            mmDia: prismaObj.mmDia,
            cvDia: prismaObj.cvDia,
            mmMes: prismaObj.mmMes,
            cvMes: prismaObj.cvMes,
            createdAt: prismaObj.createdAt,
            updatedAt: prismaObj.updatedAt,
            deletedAt: prismaObj.deletedAt,
        });
    }

    get id(): string | undefined { return this.props.id; }
    get propriedadeId(): string { return this.props.propriedadeId; }
    get mmAno(): number | undefined { return this.props.mmAno; }
    get chuvas(): number | undefined { return this.props.chuvas; }
    get mmDia(): number | undefined { return this.props.mmDia; }
    get cvDia(): number | undefined { return this.props.cvDia; }
    get mmMes(): number | undefined { return this.props.mmMes; }
    get cvMes(): number | undefined { return this.props.cvMes; }
    get createdAt(): Date | undefined { return this.props.createdAt; }
    get updatedAt(): Date | undefined { return this.props.updatedAt; }
    get deletedAt(): Date | null | undefined { return this.props.deletedAt; }

    toJSON() {
        return { ...this.props };
    }
}

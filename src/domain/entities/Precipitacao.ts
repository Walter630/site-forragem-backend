type PrecipitacaoProps = {
    id?: number;
    mm_ano: number;
    chuvas: number;
    mm_dia: number;
    chuvas_dia: number;
    mm_mes: number;
    chuvas_mes: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Precipitacao {
    private props: PrecipitacaoProps;

    constructor(props: PrecipitacaoProps) {
        this.props = props;
    }

    public static create(props: PrecipitacaoProps): Precipitacao {
        return new Precipitacao({
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: Partial<PrecipitacaoProps>): Precipitacao {
        return new Precipitacao(props as PrecipitacaoProps);
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get mm_ano(): number {
        return this.props.mm_ano;
    }

    get chuvas(): number {
        return this.props.chuvas;
    }

    get mm_dia(): number {
        return this.props.mm_dia;
    }

    get chuvas_dia(): number {
        return this.props.chuvas_dia;
    }

    get mm_mes(): number {
        return this.props.mm_mes;
    }

    get chuvas_mes(): number {
        return this.props.chuvas_mes;
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
            mm_ano: this.mm_ano,
            chuvas: this.chuvas,
            mm_dia: this.mm_dia,
            chuvas_dia: this.chuvas_dia,
            mm_mes: this.mm_mes,
            chuvas_mes: this.chuvas_mes,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
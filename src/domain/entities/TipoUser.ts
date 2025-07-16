type TipoUserProps = {
    id?: number;
    tipo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export class TipoUser {
    private props: TipoUserProps;

    constructor(props: TipoUserProps) {
        this.props = props;
    }

    public static create(props: TipoUserProps): TipoUser {
        return new TipoUser(props);
    }

    static with(props: Partial<TipoUserProps>): TipoUser {
        return new TipoUser(props as TipoUserProps);
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get tipo(): string {
        return this.props.tipo;
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
            tipo: this.tipo,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
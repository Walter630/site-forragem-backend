type TipoUserProps = {
    id: number;
    tipo: string;
    descricao?: string;
    ativo?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export class TipoUser {
    private props: TipoUserProps;

    constructor(props: TipoUserProps) {
        this.props = props;
    }

    public static create(props: Omit<TipoUserProps, 'id'>): TipoUser {
        return new TipoUser({ ...props, id: 0 });
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

    get descricao(): string | undefined {
        return this.props.descricao;
    }

    get ativo(): boolean | undefined {
        return this.props.ativo;
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
            descricao: this.descricao,
            ativo: this.ativo,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
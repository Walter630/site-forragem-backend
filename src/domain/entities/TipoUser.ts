// Ajustado: TipoUser
type TipoUserProps = {
    id?: number;
    tipo: string;
    descricao?: string;
    ativo?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
};

export class TipoUser {
    private props: TipoUserProps;

    private constructor(props: TipoUserProps) {
        this.props = props;
    }

    public static create(props: Omit<TipoUserProps, "id">): TipoUser {
        return new TipoUser({
            ...props,
            id: 0,
            ativo: props.ativo ?? true,
            createdAt: props.createdAt ?? undefined,
            updatedAt: props.updatedAt ?? undefined,
        });
    }

    static with(props: Partial<TipoUserProps>): TipoUser {
        return new TipoUser(props as TipoUserProps);
    }

    // Conversão do Prisma → Entidade
    static fromPrisma(prismaObj: any): TipoUser {
        return new TipoUser({
            id: prismaObj.id,
            tipo: prismaObj.tipo,
            descricao: prismaObj.descricao,
            ativo: prismaObj.ativo,
            createdAt: prismaObj.createdAt,
            updatedAt: prismaObj.updatedAt,
        });
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

    get ativo(): boolean {
        return this.props.ativo ?? true;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }

    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }

    toJSON() {
        return {
            id: this.props.id,
            tipo: this.props.tipo,
            descricao: this.props.descricao,
            ativo: this.ativo,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}

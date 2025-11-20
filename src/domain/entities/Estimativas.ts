type EstimativasProps = {
    id?: string;
    valorTotal?: number;
    descricao?: string | null;
    propriedadeId: string;
    simulacaoId: string;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export class Estimativas {
    private props: EstimativasProps;

    private constructor(props: EstimativasProps) {
        this.props = props;
    }

    public static create(props: Omit<EstimativasProps, "id">): Estimativas {
        return new Estimativas({
            ...props,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    public static with(props: EstimativasProps): Estimativas {
        return new Estimativas(props);
    }

    get id(): string | undefined {
        return this.props.id;
    }

    get valorTotal(): number | undefined {
        return this.props.valorTotal;
    }

    get descricao(): string | null | undefined {
        return this.props.descricao;
    }

    get propriedadeId(): string {
        return this.props.propriedadeId;
    }

    get simulacaoId(): string {
        return this.props.simulacaoId;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }

    get updatedAt(): Date | undefined | null {
        return this.props.updatedAt;
    }

    get deletedAt(): Date | null | undefined {
        return this.props.deletedAt;
    }

    toJSON() {
        return {
            id: this.props.id,
            valorTotal: this.props.valorTotal,
            descricao: this.props.descricao ?? null,
            propriedadeId: this.props.propriedadeId,
            simulacaoId: this.props.simulacaoId,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        };
    }
}

import { Propriedade } from "./Propriedade";

type EstimativasProps = {
    id?: string;
    valorTotal: number;
    descricao?: string | null;
    propriedadeId: string | number;
    propriedade?: Propriedade;
    simulacaoId: string | number;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export class Estimativas {
    private props: EstimativasProps;

    private constructor(props: EstimativasProps) {
        this.props = props;
    }

    public static create(props: Omit<EstimativasProps, "id" >): Estimativas {
        return new Estimativas({
            ...props,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }

    public static with(props: EstimativasProps): Estimativas {
        return new Estimativas(props);
    }

    get id(): string {
        return this.props.id!;
    }

    get valorTotal(): number {
        return this.props.valorTotal;
    }

    get descricao(): string | null | undefined {
        return this.props.descricao;
    }

    get propriedadeId(): string | number {
        return this.props.propriedadeId;
    }

    get propriedade(): Propriedade | undefined {
        return this.props.propriedade;
    }

    get simulacaoId(): string | number {
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
            propriedadeId: this.props.propriedadeId ?? null,
            simulacaoId: this.props.simulacaoId ?? null,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        };
    }
}

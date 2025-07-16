import { Propriedade } from "./Propriedade";

type EstimativasProps = {
    id?: number;
    valorTotal: number;
    propriedadeId: number;
    propriedade: Propriedade;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Estimativas {
    private props: EstimativasProps;

    constructor(props: EstimativasProps) {
        this.props = props;
    }

    public static create(props: EstimativasProps): Estimativas {
        return new Estimativas({
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: Partial<EstimativasProps>): Estimativas {
        return new Estimativas(props as EstimativasProps);
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get valorTotal(): number {
        return this.props.valorTotal;
    }

    get propriedadeId(): number {
        return this.props.propriedadeId;
    }

    get propriedade(): Propriedade {
        return this.props.propriedade;
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
            valorTotal: this.valorTotal,
            propriedadeId: this.propriedadeId,  
            propriedade: this.propriedade,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}   
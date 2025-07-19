// ESTIMATIVAS
import { Propriedade } from "./Propriedade";

type EstimativasProps = {
  id?: number;
  valorTotal: number;
  descricao?: string;
  propriedadeId: number;
  propriedade?: Propriedade;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};

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
    get descricao(): string | undefined {
        return this.props.descricao;
    }
  get propriedadeId(): number {
    return this.props.propriedadeId;
  }
  get propriedade(): Propriedade | undefined {
    return this.props.propriedade;
  }
  get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
  get updatedAt(): Date | undefined {
    return this.props.updatedAt;
  }
  get deletedAt(): Date | null | undefined {
    return this.props.deletedAt;
  }

  toJSON() {
    return { ...this.props };
  }
}
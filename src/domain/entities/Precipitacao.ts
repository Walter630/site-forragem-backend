// PRECIPITACAO
import { Historico } from "./Historico";

type PrecipitacaoProps = {
  id?: number;
  mmAno: number;
  chuvas: number;
  mmDia: number;
  cvDia: number;
  mmMes: number;
  cvMes: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
  historico?: Historico;
};

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
  get mmAno(): number {
    return this.props.mmAno;
  }
  get chuvas(): number {
    return this.props.chuvas;
  }
  get mmDia(): number {
    return this.props.mmDia;
  }
  get cvDia(): number {
    return this.props.cvDia;
  }
  get mmMes(): number {
    return this.props.mmMes;
  }
  get cvMes(): number {
    return this.props.cvMes;
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
  get historico(): Historico | undefined {
    return this.props.historico;
  }

  toJSON() {
    return { ...this.props };
  }
}

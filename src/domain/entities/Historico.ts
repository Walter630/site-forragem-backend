// HISTORICO
import { Precipitacao } from "./Precipitacao";
import { Solo } from "./Solo";

type HistoricoProps = {
  id?: number;
  descricao?: string;
  solo?: Solo;
  precipitacao?: Precipitacao;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};

export class Historico {
  private props: HistoricoProps;

  constructor(props: HistoricoProps) {
    this.props = props;
  }

  public static create(props: Omit<HistoricoProps, "id">): Historico {
    return new Historico({
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    });
  }

  static with(props: HistoricoProps): Historico {
    return new Historico(props);
  }

  get id(): number | undefined {
    return this.props.id;
  }
  get descricao(): string | undefined {
    return this.props.descricao;
  }
  get solo(): Solo | undefined {
    return this.props.solo;
  }
  get precipitacao(): Precipitacao | undefined {
    return this.props.precipitacao;
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
type HistoricoProps = {
  id?: number;
  descricao?: string;          // se quiser, pode guardar uma descrição opcional
  valorSimulacao: number; 
  simulacaoId: number  // resultado da simulação
  propriedadeId: number;       // FK para Propriedade
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

  get id(): number | undefined { return this.props.id; }
  get descricao(): string | undefined { return this.props.descricao; }
  get valorSimulacao(): number { return this.props.valorSimulacao; }
  get propriedadeId(): number { return this.props.propriedadeId; }
  get simulacaoId(): number { return this.props.simulacaoId; }
  get createdAt(): Date | undefined { return this.props.createdAt; }
  get updatedAt(): Date | undefined { return this.props.updatedAt; }
  get deletedAt(): Date | null | undefined { return this.props.deletedAt; }

  toJSON() {
    return { ...this.props };
  }
}

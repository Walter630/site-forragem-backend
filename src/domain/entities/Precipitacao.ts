type PrecipitacaoProps = {
  id?: number;
  propriedadeId: number;
  mmAno: number;
  chuvas: number;
  mmDia: number;
  cvDia: number;
  mmMes: number;
  cvMes: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};

export class Precipitacao {
  private props: PrecipitacaoProps;

  constructor(props: PrecipitacaoProps) {
    this.props = props;
  }

  public static create(props: Omit<PrecipitacaoProps, 'id'>): Precipitacao {
    return new Precipitacao({
      ...props,
      createdAt: props.createdAt || new Date(),
      updatedAt: props.updatedAt || new Date(),
    });
  }

  static with(props: PrecipitacaoProps): Precipitacao {
    return new Precipitacao(props);
  }

  // *** Método para converter do resultado Prisma para a entidade ***
  static fromPrisma(prismaObj: any): Precipitacao {
    return new Precipitacao({
      id: prismaObj.id,
      propriedadeId: prismaObj.propriedadeId,
      mmAno: prismaObj.mmAno,
      chuvas: prismaObj.chuvas,
      mmDia: prismaObj.mmDia,
      cvDia: prismaObj.cvDia,
      mmMes: prismaObj.mmMes,
      cvMes: prismaObj.cvMes,
      createdAt: prismaObj.createdAt,
    });
  }

  get id(): number | undefined {
    return this.props.id;
  }
  get propriedadeId(): number {
    return this.props.propriedadeId;
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

  toJSON() {
    return { ...this.props };
  }
}

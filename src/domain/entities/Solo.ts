type SoloProps = {
    id?: number;
    propriedadeId: number;
    profundidade: number;
    fator_rocha: number;
    condut_hidraulica_saturada: number;
    densidade_aparente: number;
    agua_0_bar: number;
    agua_13_bar: number;
    agua_15_bar: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
};

export class Solo {
    private props: SoloProps;

    constructor(props: SoloProps) {
        this.props = props;
    }

    public static create(props: Omit<SoloProps, "id">): Solo {
        return new Solo({
            ...props,
            id: 0,
            createdAt: props.createdAt  ?? undefined,
            updatedAt: props.updatedAt  ?? undefined,
        });
    }

    static with(props: Partial<SoloProps>): Solo {
        return new Solo(props as SoloProps);
    }

    // *** Método para converter do resultado Prisma para a entidade ***
    static fromPrisma(prismaObj: any): Solo {
        return new Solo({
            id: prismaObj.id,
            propriedadeId: prismaObj.propriedadeId,
            profundidade: prismaObj.profundidade,
            fator_rocha: prismaObj.fatorRocha,
            condut_hidraulica_saturada: prismaObj.condutHidraulicaSaturada,
            densidade_aparente: prismaObj.densidadeAparente,
            agua_0_bar: prismaObj.agua0Bar,
            agua_13_bar: prismaObj.agua13Bar,
            agua_15_bar: prismaObj.agua15Bar,
            createdAt: prismaObj.createdAt,
            updatedAt: prismaObj.updatedAt,
            deletedAt: prismaObj.deletedAt,
        });
    }

  get id(): number | undefined {
    return this.props.id;
  }
  get propriedadeId(): number {
    return this.props.propriedadeId
  }
  get profundidade(): number {
    return this.props.profundidade;
  }
  get fator_rocha(): number {
    return this.props.fator_rocha;
  }
  get condut_hidraulica_saturada(): number {
    return this.props.condut_hidraulica_saturada;
  }
  get densidade_aparente(): number {
    return this.props.densidade_aparente;
  }
  get agua_0_bar(): number {
    return this.props.agua_0_bar;
  }
  get agua_13_bar(): number {
    return this.props.agua_13_bar;
  }
  get agua_15_bar(): number {
    return this.props.agua_15_bar;
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
        return {
            id: this.props.id,
            propriedadeId: this.props.propriedadeId,
            profundidade: this.props.profundidade,
            fator_rocha: this.props.fator_rocha,
            condut_hidraulica_saturada: this.props.condut_hidraulica_saturada,
            densidade_aparente: this.props.densidade_aparente,
            agua_0_bar: this.props.agua_0_bar,
            agua_13_bar: this.props.agua_13_bar,
            agua_15_bar: this.props.agua_15_bar,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        };
    }
}
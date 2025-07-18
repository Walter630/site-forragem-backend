type SoloProps = {
    id?: number;
    profundidade: number;
    fator_rocha: number;
    condut_hidraulica_saturada: number;
    densidade_aparente: number;
    agua_0_bar: number; //0 bar
    agua_13_bar: number; //-1/3 bar
    agua_15_bar: number; //-15 bar
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export class Solo {
    private props: SoloProps;

    constructor(props: SoloProps) {
        this.props = props;
    }

    public static create(props: Omit<SoloProps, 'id'>): Solo {
        return new Solo({
            ...props,
            id: 0, // Default id to 0, will be set by the database
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        });
    }

    static with(props: Partial<SoloProps>): Solo {
        return new Solo(props as SoloProps);
    }

    get id(): number | undefined {
        return this.props.id;
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
            id: this.id,
            profundidade: this.profundidade,
            fator_rocha: this.fator_rocha,  
            condut_hidraulica_saturada: this.condut_hidraulica_saturada,
            densidade_aparente: this.densidade_aparente,
            agua_0_bar: this.agua_0_bar,
            agua_13_bar: this.agua_13_bar,
            agua_15_bar: this.agua_15_bar,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }   
}
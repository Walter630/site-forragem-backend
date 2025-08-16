
type PropriedadeCulturaProps = {
    id?: number;
    propriedadeId: number;
    culturaId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export class PropriedadeCultura {
    private props: PropriedadeCulturaProps;
     constructor(props: PropriedadeCulturaProps) {
        this.props = props;
    }
    public static create(props: Omit<PropriedadeCulturaProps, "id">): PropriedadeCultura {
        return new PropriedadeCultura({
            ...props,
            id: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        });
    }
    static with(props: PropriedadeCulturaProps): PropriedadeCultura {
        return PropriedadeCultura.create({ ...props });
    }
    public id(): number | undefined {
        return this.props.id;
    }
    public propriedadeId(): number {
        return this.props.propriedadeId;
    }
    public culturaId(): number {
        return this.props.culturaId;
    }
    public createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    public updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    public deletedAt(): Date | null | undefined {
        return this.props.deletedAt;
    }
}
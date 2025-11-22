// src/domain/entities/Propriedade.ts

type PropriedadeProps = {
    id?: string;
    nomePropriedade: string;
    nomeResponsavel: string;
    latitude: number;
    longitude: number;
    adminId?: string | null;

    culturas?: string[];
    solos?: string[];

    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export class Propriedade {
    private props: PropriedadeProps;

    private constructor(props: PropriedadeProps) {
        this.props = props;
    }

    public static create(props: Omit<PropriedadeProps, "id">): Propriedade {
        return new Propriedade({
            ...props,
            createdAt: props.createdAt ?? new Date(),
            updatedAt: props.updatedAt ?? new Date(),
            deletedAt: props.deletedAt ?? null,
        });
    }

    public static with(props: PropriedadeProps): Propriedade {
        return new Propriedade(props);
    }

    get id() { return this.props.id; }
    get nomePropriedade() { return this.props.nomePropriedade; }
    get nomeResponsavel() { return this.props.nomeResponsavel; }
    get latitude() { return this.props.latitude; }
    get longitude() { return this.props.longitude; }
    get adminId() { return this.props.adminId; }
    get culturas() { return this.props.culturas; }
    get solos() { return this.props.solos; }

    get createdAt() { return this.props.createdAt; }
    get updatedAt() { return this.props.updatedAt; }
    get deletedAt() { return this.props.deletedAt; }

    toJSON() {
        return { ...this.props };
    }
}

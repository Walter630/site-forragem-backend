// src/domain/entities/Propriedade.ts

type PropriedadeProps = {
    id?: string; // Agora string (MongoDB)
    nomePropriedade: string;
    nomeProprietario: string;
    latitude: number;
    longitude: number;
    simulacao: string;
    adminId?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
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
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
            deletedAt: props.deletedAt || null,
        });
    }

    public static with(props: PropriedadeProps): Propriedade {
        return new Propriedade(props);
    }

    get id(): string | undefined {
        return this.props.id;
    }

    get nomePropriedade(): string {
        return this.props.nomePropriedade;
    }

    get nomeProprietario(): string {
        return this.props.nomeProprietario;
    }

    get latitude(): number {
        return this.props.latitude;
    }

    get longitude(): number {
        return this.props.longitude;
    }

    get simulacao(): string {
        return this.props.simulacao;
    }

    get adminId(): string | null | undefined {
        return this.props.adminId;
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

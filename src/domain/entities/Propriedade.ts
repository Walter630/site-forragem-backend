import { Admin, Estimativas } from "../../generated/prisma";

type PropriedadeProps = {
    id: number;
    nomePropriedade: string;
    nomeProprietario: string;
    latitude: number;
    longitude: number;
    altitude: number;
    simulacao: string;
    adminId?: number;
    admin?: Admin;
    estimativas?: Estimativas[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export class Propriedade {
    private props: PropriedadeProps;

    constructor(props: PropriedadeProps) {
        this.props = props;
    }

    public static create(props: Omit<PropriedadeProps, "id">): Propriedade {
        return new Propriedade({
            ...props,
            id: 0, // Default id to 0, will be set by the database
            // createdAt and updatedAt will be set by the database
            createdAt: props.createdAt || new Date(),
        });
    }

    static with(props: PropriedadeProps): Propriedade {
        return new Propriedade(props);
    }

    get id(): number | undefined {
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

    get altitude(): number {
        return this.props.altitude;
    }

    get simulacao(): string | undefined {
        return this.props.simulacao;
    }

    get adminId(): number | undefined {
        return this.props.adminId;
    }

    get admin(): Admin | undefined {
        return this.props.admin;
    }

    get estimativas(): Estimativas[] | undefined {
        return this.props.estimativas;
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
            nomePropriedade: this.nomePropriedade,
            nomeProprietario: this.nomeProprietario,
            latitude: this.latitude,
            longitude: this.longitude,
            altitude: this.altitude,
            simulacao: this.simulacao,
            adminId: this.adminId,
            estimativas: this.estimativas,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
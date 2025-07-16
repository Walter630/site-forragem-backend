import { Admin, Estimativas } from "../../generated/prisma";

type PropriedadeProps = {
    id?: number;
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
}

export class Propriedade {
    private props: PropriedadeProps;

    constructor(props: PropriedadeProps) {
        this.props = props;
    }

    public static create(props: PropriedadeProps): Propriedade {
        return new Propriedade(props);
    }

    static with(props: Partial<PropriedadeProps>): Propriedade {
        return new Propriedade(props as PropriedadeProps);
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

    get simulacao(): string {
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
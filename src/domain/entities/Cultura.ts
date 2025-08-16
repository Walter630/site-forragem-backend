import { PropriedadeCultura } from "./PropriedadeCultura";

type CulturaProps = {
    id?: number;
    name: string;
    eua: number;
    propriedadeCultura: PropriedadeCultura[];
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}

export class Cultura {
    private props: CulturaProps;
    constructor(props: CulturaProps) {
        this.props = props;
    }

    public static create(props: Omit<CulturaProps, "id">): Cultura {
        return new Cultura({
            ...props,
            id: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            deletedAt: null,
        });
    }

        static with(props: CulturaProps): Cultura {
            return new Cultura(props);
        }

        get id(): number | undefined {
            return this.props.id;
        }

        get name(): string {
            return this.props.name;
        }

        get eua(): number {
            return this.props.eua;
        }

        get propriedadeCultura(): PropriedadeCultura[] {
            return this.props.propriedadeCultura;
        }

        get createdAt(): Date {
            return this.props.createdAt;
        }

        get updatedAt(): Date | null {
            return this.props.updatedAt;
        }

        get deletedAt(): Date | null {
            return this.props.deletedAt;
        }

}


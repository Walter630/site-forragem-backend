import { Propriedade, TipoUser } from "../../generated/prisma";

type AdminProps = {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    ativo?: boolean;
    tipoUserId?: number;
    tipoUser?: TipoUser;
    propriedade?: Propriedade;
    createdAt?: Date;
    updatedAt?: Date;
}

export class Admin {
    private props: AdminProps;

    constructor(props: AdminProps) {
        this.props = props;
    }

    public static create(props: AdminProps): Admin {
        return new Admin(props);
    }

    static with(props: Partial<AdminProps>): Admin {
        return new Admin(props as AdminProps);
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get email(): string {
        return this.props.email;
    }

    get cpf(): string {
        return this.props.cpf;
    }

    get senha(): string {
        return this.props.senha;
    }

    get ativo(): boolean | undefined {
        return this.props.ativo;
    }

    get tipoUserId(): number | undefined {
        return this.props.tipoUserId;
    }

    get tipoUser(): TipoUser | undefined {
        return this.props.tipoUser;
    }

    get propriedade(): Propriedade | undefined {
        return this.props.propriedade;
    }

    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            cpf: this.cpf,
            senha: this.senha,
    
            ativo: this.ativo,
            tipoUserId: this.tipoUserId,
            tipoUser: this.tipoUser,
            propriedade: this.propriedade,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        }
    }
}
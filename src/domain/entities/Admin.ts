import { Propriedade } from "./Propriedade";
import { TipoUser } from "./TipoUser";

type AdminProps = {
    id?: string;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    ativado: boolean;
    tipoUserId?: string | null;
    tipoUser?: TipoUser;
    propriedade?: Propriedade;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
};

export class Admin {
    private props: AdminProps;

    private constructor(props: AdminProps) {
        this.props = props;
    }

    static create(props: Omit<AdminProps, "id" | "ativado" | "createdAt">): Admin {
        return new Admin({
            ...props,
            ativado: true,
        });
    }

    static with(props: AdminProps): Admin {
        return new Admin(props);
    }

    get id(): string {
        return this.props.id!;
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

    get ativado(): boolean {
        return this.props.ativado;
    }

    get tipoUserId(): string | null | undefined {
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
            id: this.props.id,
            nome: this.props.nome,
            email: this.props.email,
            cpf: this.props.cpf,
            senha: this.props.senha,
            ativado: this.props.ativado,
            tipoUserId: this.props.tipoUserId ?? null,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        };
    }
}

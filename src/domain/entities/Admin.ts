import { Propriedade } from "./Propriedade";

export type TipoUsuarioEnum = "ADMIN" | "FUNCIONARIO" | "USER";

type AdminProps = {
    id?: string;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    ativado: boolean;
    tipoUsuario: TipoUsuarioEnum;   // <<--- AGORA ASSIM
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

    get tipoUsuario(): TipoUsuarioEnum {
        return this.props.tipoUsuario;
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
            ativado: this.props.ativado,
            tipoUsuario: this.props.tipoUsuario,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        };
    }
}

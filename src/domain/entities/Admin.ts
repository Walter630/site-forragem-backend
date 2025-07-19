// Ajustado para refletir corretamente o modelo Prisma
import { Propriedade } from "./Propriedade";
import { TipoUser } from "./TipoUser";

type AdminProps = {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  ativado?: boolean;
  tipoUserId?: number | null;
  tipoUser?: TipoUser;
  propriedade?: Propriedade;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
};

export class Admin {
  private props: AdminProps;

  constructor(props: AdminProps) {
    this.props = props;
  }

  public static create(props: Omit<AdminProps, "id">): Admin {
    return new Admin({ ...props });
  }

  static with(props: AdminProps): Admin {
    return new Admin(props);
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
  get ativado(): boolean | undefined {
    return this.props.ativado;
  }
  get tipoUserId(): number | null | undefined {
    return this.props.tipoUserId;
  }
  get tipoUser(): TipoUser | undefined {
    return this.props.tipoUser;
  }
  get propriedade(): Propriedade | undefined {
    return this.props.propriedade;
  }

  toJSON() {
    return { ...this.props };
  }
}
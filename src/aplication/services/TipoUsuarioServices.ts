import { TipoUser } from "../../domain/entities/TipoUser";
import { ITipoUserRepositories } from "../../domain/repositories/ITipoUserRepositories";

export class TipoUsuarioServices {
    constructor(private readonly tipoUsuarioRepository: ITipoUserRepositories) {}

    async findAll(): Promise<TipoUser[]> {
        const tiposUsuarios = await this.tipoUsuarioRepository.findAll();
        if (!tiposUsuarios) {
            throw new Error("Não há tipos de usuários");
        }
        return tiposUsuarios;
    }
    async findById(id: number): Promise<TipoUser> {
        const tipoUsuario = await this.tipoUsuarioRepository.findById(id);
        if (!tipoUsuario) {
            throw new Error("Tipo de usuário não encontrado");
        }
        return tipoUsuario;
    }
    async create(tipoUsuario: TipoUser): Promise<TipoUser> {
        if (!tipoUsuario.tipo) {
            throw new Error("Tipo de usuário não informado");
        }
        return this.tipoUsuarioRepository.create(tipoUsuario);
    }
    async update(tipoUsuario: TipoUser): Promise<TipoUser> {
        if (!tipoUsuario.tipo) {
            throw new Error("Tipo de usuário não informado");
        }
        return this.tipoUsuarioRepository.update(tipoUsuario);
    }   
    async delete(id: number): Promise<void> {
        return this.tipoUsuarioRepository.delete(id);
    }   
}
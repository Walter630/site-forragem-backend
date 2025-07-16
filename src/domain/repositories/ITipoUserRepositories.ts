import { TipoUser } from "../entities/TipoUser";

export interface ITipoUserRepositories {
    create(tipoUser: TipoUser): Promise<TipoUser>;
    findAll(): Promise<TipoUser[]>;
    findById(id: number): Promise<TipoUser | null>;
    update(tipoUser: TipoUser): Promise<TipoUser>;
    delete(id: number): Promise<void>;
}
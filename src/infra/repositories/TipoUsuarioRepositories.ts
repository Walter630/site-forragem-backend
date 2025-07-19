import { PrismaClient } from "../../generated/prisma/client";
import { TipoUser } from "../../domain/entities/TipoUser";
import { ITipoUserRepositories } from "../../domain/gateway/ITipoUserRepositories";

export default class TipoUsuarioRepositoryPrisma implements ITipoUserRepositories {
    private constructor(private readonly prismaClient: PrismaClient) {}

    public static create(prismaClient: PrismaClient): TipoUsuarioRepositoryPrisma {
        return new TipoUsuarioRepositoryPrisma(prismaClient);
    }

    public async findAll(): Promise<TipoUser[]> {
        try {
            const tiposUsuarios = await this.prismaClient.tipoUser.findMany({
                where: {
                    ativado: true,
                    deletedAt: null,
                }
            });
            return tiposUsuarios.map((tipoUsuario: any) => TipoUser.with(tipoUsuario));
        } catch (error) {
            console.error("Error fetching tiposUsuario:", error);
            throw new Error("Error fetching tiposUsuario");
        }
    }

    public async findById(id: number): Promise<TipoUser | null> {
        try {
            const tipoUsuario = await this.prismaClient.tipoUser.findFirst({
                where: {
                    id,
                    ativado: true,
                    deletedAt: null,
                }
            });
            if (!tipoUsuario) {
                return null;
            }
            return TipoUser.with({
                id: tipoUsuario.id,
                tipo: tipoUsuario.tipo,
                descricao: tipoUsuario.descricao ?? undefined,
                ativo: tipoUsuario.ativado,
                createdAt: tipoUsuario.createdAt,
                updatedAt: tipoUsuario.updatedAt || undefined,
            });
        } catch (error) {
            console.error("Error fetching tipoUsuario by id:", error);
            throw new Error("Error fetching tipoUsuario by id");
        }
    }

    public async create(tipoUsuario: TipoUser): Promise<TipoUser> {
        try {
            const createdTipoUsuario = await this.prismaClient.tipoUser.create({
                data: {
                    tipo: tipoUsuario.tipo,
                    descricao: tipoUsuario.descricao,
                    ativado: tipoUsuario.ativo,
                    createdAt: new Date(),
                }
            });
            return TipoUser.with({
                id: createdTipoUsuario.id,
                tipo: createdTipoUsuario.tipo,
                descricao: createdTipoUsuario.descricao ?? undefined,
                ativo: createdTipoUsuario.ativado,
                createdAt: createdTipoUsuario.createdAt,
                updatedAt: createdTipoUsuario.updatedAt || undefined,
            });
        } catch (error) {
            console.error("Error creating tipoUsuario:", error);
            throw new Error("Error creating tipoUsuario");
        }
    }

    public async update(tipoUsuario: TipoUser): Promise<TipoUser> {
        try {
            const updatedTipoUsuario = await this.prismaClient.tipoUser.update({
                where: { id: tipoUsuario.id },
                data: {
                    tipo: tipoUsuario.tipo,
                    descricao: tipoUsuario.descricao,
                    ativado: tipoUsuario.ativo,
                }
            });
            return TipoUser.with({
                id: updatedTipoUsuario.id,
                tipo: updatedTipoUsuario.tipo,
                descricao: updatedTipoUsuario.descricao ?? undefined,
                ativo: updatedTipoUsuario.ativado,
                createdAt: updatedTipoUsuario.createdAt,
                updatedAt: updatedTipoUsuario.updatedAt || undefined,
            });
        } catch (error) {
            console.error("Error updating tipoUsuario:", error);
            throw new Error("Error updating tipoUsuario");
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            const deletedTipoUsuario = await this.prismaClient.tipoUser.update({
                where: { id },
                data: {
                    ativado: false,
                    deletedAt: new Date(),
                }
            });
            if (!deletedTipoUsuario) {
                throw new Error("Tipo de usuário não encontrado");
            }
        } catch (error) {
            console.error("Error deleting tipoUsuario:", error);
            throw new Error("Error deleting tipoUsuario");
        }
    }
}

import { Admin } from "../../../domain/entities/Admin";
import { IAdminRepositories } from "../../../domain/repositories/IAdminRepositories";
import { PrismaClient } from "../../../generated/prisma";

export class AdminRepositories implements IAdminRepositories {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async create(admin: Admin): Promise<Admin> {
        try{
        const adminCreated = await this.prisma.admin.create({
            data: {
                nome: admin.nome,
                email: admin.email,
                cpf: admin.cpf,
                ativado: admin.ativo,
                senha: admin.senha,
                tipoUser: {
                    connect: {
                        id: admin.tipoUser?.id || 0,
                    },
                },
                propriedade: {
                    connect: {
                        id: admin.propriedade?.id || 0,
                    },
                },
            },
            include: {
                tipoUser: true,
                propriedade: true,
            },
            });
            return Admin.create(adminCreated as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar admin");
        }
    }
    async login(email: string): Promise<Admin | null> {
        try{
            const admin = await this.prisma.admin.findUnique({
                where: { email },
            }); 
            return Admin.create(admin as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao fazer login");
        }
    }

    async findAll(): Promise<Admin[]> {
        try{
            const admins = await this.prisma.admin.findMany();
            return admins.map((admin) => Admin.create(admin as unknown as Admin));
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admins");
        }
    }

    async findByEmail(email: string): Promise<Admin | null> {
        const admin = await this.prisma.admin.findUnique({
            where: { email },
            include: {
                tipoUser: true,
                propriedade: true,
            },
        });
        return Admin.create(admin as unknown as Admin);
    }

    async findById(id: number): Promise<Admin | null> {
        try{
            const admin = await this.prisma.admin.findUnique({
                where: { id },
                include: {
                    tipoUser: true,
                    propriedade: true,
                },
            });
            if (!admin) {
                return null;
            }
        return Admin.create(admin as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admin");
        }
    }

    async update(admin: Admin): Promise<Admin> {
        try{
            const adminUpdated = await this.prisma.admin.update({
                where: { id: admin.id },
                data: {
                    nome: admin.nome,
                    email: admin.email,
                    cpf: admin.cpf,
                    ativado: admin.ativo,
                    senha: admin.senha,
                    tipoUser: {
                        connect: {
                            id: admin.tipoUser?.id || 0,
                        },
                    },
                    propriedade: {
                        connect: {
                            id: admin.propriedade?.id || 0,
                        },
                    },
                },
                include: {
                    tipoUser: true,
                    propriedade: true,
                },
            });
            return Admin.create(adminUpdated as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao atualizar admin");
        }
    }

    async delete(id: number): Promise<void> {
        try{
            await this.prisma.admin.delete({
                where: { id },
            });
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao deletar admin");
        }
    }
}
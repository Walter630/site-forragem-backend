import { Admin } from "../../domain/entities/Admin";
import { Propriedade } from "../../domain/entities/Propriedade";
import { TipoUser } from "../../domain/entities/TipoUser";
import { IAdminRepositories } from "../../domain/repositories/IAdminRepositories";
import { PrismaClient } from "../../generated/prisma";

export class AdminRepositories implements IAdminRepositories {
    private constructor(private readonly prisma: PrismaClient) {}

    public static create(prisma: PrismaClient): AdminRepositories {
        return new AdminRepositories(prisma);
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
                tipoUserId: admin.tipoUser?.id || null,
            },
            });
            
            return Admin.with({
                ...adminCreated,
                tipoUser: admin.tipoUser ? TipoUser.with(admin.tipoUser) : undefined,
                propriedade: admin.propriedade ? Propriedade.with(admin.propriedade) : undefined,
                updatedAt: adminCreated.updatedAt || new Date(),
            });
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar admin");
        }
    }

    async findAll(): Promise<Admin[]> {
        try{
            const admins = await this.prisma.admin.findMany();
            return admins.map((admin) => Admin.create(admin as any));
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admins");
        }
    }

    async findByEmail(email: string): Promise<Admin | null> {
        try{
        const admin = await this.prisma.admin.findUnique({
            where: { email },
            include: {
                tipoUser: true,
                propriedade: true,
            },
        });
            return Admin.create(admin as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admin");
        }
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

    async findByCPF(cpf: string): Promise<Admin | null> {
        try{
            const admin = await this.prisma.admin.findUnique({
                where: { cpf },
            });
            return Admin.create(admin as unknown as Admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admin");
        }
    }
    }
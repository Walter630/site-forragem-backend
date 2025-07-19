import { Admin } from "../../domain/entities/Admin";
import { Propriedade } from "../../domain/entities/Propriedade";
import { TipoUser } from "../../domain/entities/TipoUser";
import { IAdminRepositories } from "../../domain/gateway/IAdminRepositories";
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
                ativado: admin.ativado,
                senha: admin.senha,
                tipoUserId: admin.tipoUser?.id || null,
            },
            });
            
            return Admin.with({
                ...adminCreated,
                tipoUser: admin.tipoUser && typeof admin.tipoUser.id === "number" ? TipoUser.with({
                    id: admin.tipoUser.id,
                    tipo: admin.tipoUser.tipo,
                    descricao: admin.tipoUser.descricao,
                    ativo: admin.tipoUser.ativo,
                    createdAt: admin.tipoUser.createdAt,
                    updatedAt: admin.tipoUser.updatedAt,
                }) : undefined,
                propriedade: admin.propriedade && typeof admin.propriedade.id === "number"
                    ? Propriedade.with({
                        id: admin.propriedade.id,
                        nomePropriedade: admin.propriedade.nomePropriedade,
                        nomeProprietario: admin.propriedade.nomeProprietario,
                        latitude: admin.propriedade.latitude,
                        longitude: admin.propriedade.longitude,
                        altitude: admin.propriedade.altitude,
                        simulacao: admin.propriedade.simulacao || "",
                        estimativas: admin.propriedade.estimativas,
                    })
                    : undefined,
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
                    ativado: admin.ativado,
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
     public async loginEmail(email: string): Promise<Admin> {
        const result = await this.prisma.admin.findFirst({
            where: {
                email
            },
        });
        if(result)
            return Admin.with({
                id: result.id,
                email: result.email,
                nome: result.nome,
                cpf: result.cpf,
                senha: result.senha,
                ativado: result.ativado,
            });
        else
            throw new Error("Admin not found");
    }

    public async loginCpf(cpf: string): Promise<Admin> {
        const result = await this.prisma.admin.findFirst({
            where: {
                cpf: cpf
            },
        });
        if(result)
            return Admin.with({
                id: result.id,
                nome: result.nome,
                email: result.email,
                cpf: result.cpf,
                senha: result.senha,
                ativado: result.ativado,
            });
        else
            throw new Error("Admin not found");
    }
}
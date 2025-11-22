// src/infra/repositories/AdminRepository.ts
import { PrismaClient } from "@prisma/client";
import { Admin } from "../../domain/entities/Admin";

export class AdminRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(admin: Admin) {
        const created = await this.prisma.admin.create({
            // No create:
            data: {
                nome: admin.nome,
                email: admin.email,
                cpf: admin.cpf,
                senha: admin.senha,
                tipoUsuario: admin.tipoUsuario,
                propriedades: admin.propriedade ? { connect: { id: admin.propriedade.id } } : undefined,
                // Remover createdAt ou qualquer campo manual que Prisma preenche
            },
        })
        // Retorno:
        return Admin.with(created); // em vez de criar um objeto manualmente
    }

    async update(id: number | string, data: Partial<Admin>) {
        const updated = await this.prisma.admin.update({
            where: { id: String(id) },
            data: {
                ...data,
                propriedades: data.propriedade
                    ? { connect: { id: data.propriedade.id } }
                    : undefined,
            },
            include: { propriedades: true },
        });

        return Admin.with({
            id: updated.id,
            nome: updated.nome,
            email: updated.email,
            cpf: updated.cpf,
            senha: updated.senha,
            ativado: updated.ativado,
            tipoUsuario: updated.tipoUsuario,
        });
    }

    async delete(id: string | string) {
        await this.prisma.admin.delete({
            where: { id: String(id) },
        });
    }

    async findAll() {
        const admins = await this.prisma.admin.findMany({
            orderBy: { createdAt: "desc" }
        });

        return admins.map(Admin.with);
    }

    async findById(id: number | string) {
        const admin = await this.prisma.admin.findUnique({
            where: { id: String(id) }
        });

        return admin ? Admin.with(admin) : null;
    }

    async findByEmail(email: string) {
        const admin = await this.prisma.admin.findUnique({
            where: { email }
        });

        return admin ? Admin.with(admin) : null;
    }

    async findByCpf(cpf: string) {
        const admin = await this.prisma.admin.findUnique({
            where: { cpf }
        });

        return admin ? Admin.with(admin) : null;
    }
}

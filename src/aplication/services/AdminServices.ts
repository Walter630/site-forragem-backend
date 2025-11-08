import { AdminRepository } from "../../infra/repositories/AdminRepositories";
import { Admin } from "../../domain/entities/Admin";
import bcrypt from "bcrypt";
import { PrismaClient } from "../../generated/prisma";
import {prisma} from "../../infra/prisma/PrismaClient";

export class AdminServices {

    constructor(private repo = new AdminRepository(prisma)) {}

    async login(login: string, senha: string) {
        const admin = await this.repo.findByEmail(login);

        if (!admin) {
            throw new Error("Admin não encontrado");
        }

        const senhaValida = await bcrypt.compare(senha, admin.senha);
        if (!senhaValida) {
            throw new Error("Senha inválida");
        }

        return Admin.with(admin);
    }

    async create(data: any) {
        try {
            const senhaHash = await bcrypt.hash(data.senha, 10);
            console.log(data);
            const admin = Admin.create({
                nome: data.nome,
                email: data.email,
                cpf: data.cpf,
                senha: senhaHash,
                tipoUserId: data.tipoUserId ?? null,
            });
            console.log("admin antes de criar", admin);
            const created = await this.repo.create(admin);
            console.log("Admin criado:", created);
            return created;
        } catch (err) {
            console.error("Erro no AdminServices.create:", err);
            throw err;
        }
    }


    async update(data: any) {
        const existing = await this.repo.findById(data.id);
        if (!existing) {
            throw new Error("Admin não encontrado");
        }

        let senhaFinal = existing.senha;
        if (data.senha) {
            senhaFinal = await bcrypt.hash(data.senha, 10);
        }

        const updated = await this.repo.update(data.id, {
            ...existing,
            ...data,
            senha: senhaFinal,
        });

        return Admin.with(updated);
    }

    async delete(id: string | number) {
        await this.repo.delete(String(id));
    }

    async findAll() {
        const admins = await this.repo.findAll();
        return admins.map((a) => Admin.with(a));
    }

    async findById(id: string | number) {
        const admin = await this.repo.findById(String(id));
        if (!admin) {
            throw new Error("Admin não encontrado");
        }
        return Admin.with(admin);
    }

    async findByEmail(email: string) {
        const admin = await this.repo.findByEmail(email);
        if (!admin) {
            throw new Error("Admin não encontrado");
        }
        return Admin.with(admin);
    }
}

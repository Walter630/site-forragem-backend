import { AdminRepository } from "../../infra/repositories/AdminRepositories";
import { Admin } from "../../domain/entities/Admin";
import bcrypt from "bcrypt";
import {prisma} from "../../infra/prisma/PrismaClient";
import { CreateAdminDTO } from "../dto/CreateAdminDTO";
import { TipoUsuarioEnum } from "@prisma/client";

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

    async create(data: CreateAdminDTO) {
        try {
            // 1️⃣ Verifica duplicidade de e-mail
            const adminExistente = await prisma.admin.findUnique({
                where: { email: data.email },
            });

            if (adminExistente) {
                throw new Error("Já existe um administrador cadastrado com esse e-mail.");
            }
            const cpfLimpo = data.cpf.replace(/\D/g, "");

            // 2️⃣ Gera senha automática pelos 8 primeiros dígitos do CPF
            const senhaGerada = cpfLimpo.substring(0, 8);
            console.log("Senha gerada automaticamente:", senhaGerada);

            // 3️⃣ Criptografa
            const senhaHash = await bcrypt.hash(senhaGerada, 10);

            // 4️⃣ Cria no banco
            const adminCriado = await prisma.admin.create({
                data: {
                    nome: data.nome,
                    email: data.email,
                    cpf: data.cpf,
                    tipoUsuario: (data.tipoUsuario as TipoUsuarioEnum) ?? TipoUsuarioEnum.USER,
                    senha: senhaHash,
                },
            });

            // 5️⃣ Remove senha do retorno
            const { senha, ...adminSemSenha } = adminCriado;

            return adminSemSenha;
        } catch (error) {
            console.error("Erro no AdminServices.create:", error);
            throw error;
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

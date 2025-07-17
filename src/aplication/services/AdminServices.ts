import { Admin } from "../../domain/entities/Admin";
import { AdminRepositories } from "../../infra/repositories/AdminRepositories";
import bcrypt from "bcrypt";
import { Token } from "../../shared/utils/jwt/Token";
import { prisma } from "../../infra/prisma/PrismaClient";



const SALT_ROUNDS = 10;
export class AdminServices {
    private adminRepository: AdminRepositories;
    private token: Token;
    constructor(adminRepository: AdminRepositories) {
        this.adminRepository = adminRepository;
        this.token = new Token();
    }

    async create(admin: Admin): Promise<Admin | null> {
        try{
            
            const cpfLimpo = admin.cpf.replace(/\D/g, "");
            
            const senhaCpf = cpfLimpo.slice(0, 8);
            const senhaCriptografada = await bcrypt.hash(senhaCpf, SALT_ROUNDS);
            const adminCreated = Admin.create({
                tipoUserId: admin.tipoUserId,
                nome: admin.nome,
                email: admin.email,
                cpf: admin.cpf,
                senha: senhaCriptografada,
                ativo: admin.ativo,
                propriedadeId: admin.propriedadeId,
            });

            if (!adminCreated) {
                throw new Error("Erro ao criar admin");
            }

            const adminCreatedRepository = await this.adminRepository.create(adminCreated);
            return adminCreatedRepository;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar admin");
        }
    }

    async login(login: string, senha: string): Promise<{ admin: Admin, token: string, refreshToken: string }> {
        try {
            let admin: Admin | null = null;
           
            // Verifica se é e-mail ou CPF
            if (login.includes("@") && login.includes(".")) {
                admin = await this.adminRepository.findByEmail(login);
            } else if (login.length === 11 || login.length === 14) {
                admin = await this.adminRepository.findByCPF(login);
            } else {
                throw new Error("Formato de login inválido. Use um e-mail ou CPF válido.");
            }
    
            if (!admin) {
                throw new Error("Admin não encontrado");
            }
    
            const senhaValida = await bcrypt.compare(senha, admin.senha);
            if (!senhaValida) {
                throw new Error("Senha inválida");
            }
    
            const token = this.token.generateAccessToken({ id: admin.id!, email: admin.email, cpf: admin.cpf || undefined });
            const refreshToken = this.token.generateRefreshToken({ id: admin.id!, email: admin.email, cpf: admin.cpf || undefined });
    
            return { admin, token, refreshToken };
        } catch (error) {
            console.log(error);
            throw new Error(error instanceof Error ? error.message : "Erro ao fazer login");
        }
    }
    
    async findAll(): Promise<Admin[]> {
        try{
            return this.adminRepository.findAll();
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admins");
        }
    }

    async findByEmail(email: string): Promise<Admin | null> {
        try{
            return this.adminRepository.findByEmail(email);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admin por email");
        }
    }

    async findById(id: number): Promise<Admin | null> {
        try{
            return this.adminRepository.findById(id);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao buscar admin por id");
        }
    }

    async update(admin: Admin): Promise<Admin | null> {
        try{
            return this.adminRepository.update(admin);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao atualizar admin");
        }
    }

    async delete(id: number): Promise<void> {
        try{
            return this.adminRepository.delete(id);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao deletar admin");
        }
    }
}
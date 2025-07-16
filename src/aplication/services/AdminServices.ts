import { Admin } from "../../domain/entities/Admin";
import { AdminRepositories } from "../../infra/prisma/repositories/AdminRepositories";
import bcrypt from "bcrypt";
const SALT_ROUNDS = 10;
export class AdminServices {
    private adminRepository: AdminRepositories;

    constructor(adminRepository: AdminRepositories) {
        this.adminRepository = adminRepository;
    }

    async create(admin: Admin): Promise<Admin | null> {
        try{
        const adminExists = await this.adminRepository.findByEmail(admin.email);
        if (adminExists) {
            throw new Error("Admin já existe");
        }
        const cpfLimpo = admin.cpf.replace(/\D/g, "");
        
        const senhaCpf = cpfLimpo.slice(0, 8);
        const senhaCriptografada = await bcrypt.hash(senhaCpf, SALT_ROUNDS);
        console.log(senhaCriptografada, "senha criptografada");
        const adminCreated = Admin.create({
            id: admin.id,
            nome: admin.nome,
            email: admin.email,
            cpf: admin.cpf,
            senha: senhaCriptografada,
            tipoUser: admin.tipoUser,
            propriedade: admin.propriedade,
        });

        if (!adminCreated) {
            throw new Error("Erro ao criar admin");
        }
        return this.adminRepository.create(adminCreated);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar admin");
        }
    }

    async login(email: string, senha: string): Promise<Admin | null> {
        try{
            const admin = await this.adminRepository.findByEmail(email);
            if (!admin) {
                throw new Error("Admin não encontrado");
            }
            const senhaValida = await bcrypt.compare(senha, admin.senha);
            if (!senhaValida) {
                throw new Error("Senha inválida");
            }
            return admin;
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao fazer login");
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
import { Admin } from "../entities/Admin";

export interface IAdminRepositories {
    create(admin: Admin): Promise<Admin>;
    findAll(): Promise<Admin[]>;    
    findByEmail(email: string): Promise<Admin | null>;
    findById(id: string): Promise<Admin | null>;
    update(admin: Admin): Promise<Admin>;
    delete(id: string): Promise<void>;
    findByCPF(cpf: string): Promise<Admin | null>;
}
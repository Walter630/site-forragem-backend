import { Admin } from "../entities/Admin";

export interface IAdminRepositories {
    create(admin: Admin): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findByEmail(email: string): Promise<Admin | null>;
    findById(id: number): Promise<Admin | null>;
    update(admin: Admin): Promise<Admin>;
    delete(id: number): Promise<void>;
    login(email: string): Promise<Admin | null>;
}
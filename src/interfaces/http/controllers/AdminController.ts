import { Request, Response } from "express";
import { AdminServices } from "../../../aplication/services/AdminServices";
import { Admin } from "../../../domain/entities/Admin";
import { validarCPF } from "../../../configs/utils/CpfValidators"; // ajuste o caminho conforme seu projeto

export class AdminController {
    constructor(private readonly adminService: AdminServices) {}

    async login(req: Request, res: Response) {
        try{
            const { login, senha } = req.body;
            const admin = await this.adminService.login(login, senha);
            res.status(200).json({ message: "Login realizado com sucesso", admin: admin });
        } catch (error) {
            res.status(500).json({ message: "Erro ao fazer login", error: error });
        }
    }

    async create(req: Request, res: Response) {
        try{
            const adminData = req.body as Admin;
             // Validação do CPF na criação
            if (!validarCPF(adminData.cpf)) {
                res.status(400).json({ message: "CPF inválido" });
                return
            }
            const admin = await this.adminService.create(req.body as Admin);
            res.status(201).json(admin);
        } catch (error) {
            console.log(error, "error");
            res.status(402).json({ message: "Erro ao criar admin", error: error });
        }
    }
    
    async update(req: Request, res: Response) {
        try{
            const admin = await this.adminService.update(req.body as Admin);
            res.status(200).json({ message: "Admin atualizado com sucesso", admin: admin });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar admin", error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try{
            const admin = await this.adminService.delete(req.body.id);
            res.status(200).json({ message: "Admin deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar admin", error: error });
        }
    }

    async findAll(req: Request, res: Response) {
        try{
            const admin = await this.adminService.findAll();
            res.status(200).json(admin);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar admins", error: error });
        }
    }

    async findById(req: Request, res: Response) {
        try{
            const admin = await this.adminService.findById(Number(req.params.id));
            res.status(200).json(admin);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar admin", error: error });
        }
    }

    async findByEmail(req: Request, res: Response) {
        try{
            const admin = await this.adminService.findByEmail(req.params.email);
            res.status(200).json(admin);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar admin", error: error });
        }
    }
}
import { Request, Response } from "express";
import { AdminServices } from "../../../aplication/services/AdminServices";
import { validarCPF } from "../../../configs/utils/CpfValidators";

export class AdminController {
    constructor(private readonly adminService: AdminServices) {}

    async login(req: Request, res: Response) {
        try {
            const { login, senha } = req.body;
            const admin = await this.adminService.login(login, senha);
             res.status(200).json(admin);
        } catch (error) {
            res.status(400).json({ message: "Falha no login", error });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const data = req.body;
            console.log("dados chegando", data)
            if (!validarCPF(data.cpf)) {
                console.log("CPF inválido detectado:", data.cpf);
                res.status(400).json({ message: "CPF inválido" });
                return;
            }

            const admin = await this.adminService.create(data);
            console.log("admin criado", admin)
            res.status(201).json(admin);
        } catch (error) {
            res.status(400).json({ message: "Erro ao criar Admin", error });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const admin = await this.adminService.update(req.body);
             res.status(200).json(admin);
        } catch (error) {
            res.status(400).json({ message: "Erro ao atualizar Admin", error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.adminService.delete(id);
            res.status(200).json({ message: "Admin removido com sucesso" });
        } catch (error) {
            res.status(400).json({ message: "Erro ao deletar Admin", error });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const admins = await this.adminService.findAll();
            res.status(200).json(admins);
        } catch (error) {
            res.status(400).json({ message: "Erro ao listar Admins", error });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const admin = await this.adminService.findById(id);
             res.status(200).json(admin);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar Admin", error });
        }
    }

    async findByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const admin = await this.adminService.findByEmail(email);
            res.status(200).json(admin);
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar Admin", error });
        }
    }
}

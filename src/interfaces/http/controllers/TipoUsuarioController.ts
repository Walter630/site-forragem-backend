import { TipoUsuarioServices } from "../../../aplication/services/TipoUsuarioServices";
import TipoUsuarioRepositoryPrisma from "../../../infra/repositories/TipoUsuarioRepositories";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Request, Response } from "express";

export class TipoUsuarioController {
    constructor(private readonly tipoUsuarioServices: TipoUsuarioServices) {
        this.tipoUsuarioServices = new TipoUsuarioServices(TipoUsuarioRepositoryPrisma.create(prisma));
    }

    async findAll(req: Request, res: Response) {
        try {
            const tiposUsuarios = await this.tipoUsuarioServices.findAll();
            res.status(200).json(tiposUsuarios);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar tipos de usuários", error: error });
        }
    }
    async findById(req: Request, res: Response) {
        try {
            const tipoUsuario = await this.tipoUsuarioServices.findById(Number(req.params.id));
            res.status(200).json(tipoUsuario);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar tipo de usuário", error: error });
        }
    }
    async create(req: Request, res: Response) {
        try {
            const tipoUsuario = await this.tipoUsuarioServices.create(req.body);
            res.status(201).json(tipoUsuario);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar tipo de usuário", error: error });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const tipoUsuario = await this.tipoUsuarioServices.update(req.body);
            res.status(200).json(tipoUsuario);
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar tipo de usuário", error: error });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            await this.tipoUsuarioServices.delete(Number(req.params.id));
            res.status(200).json({ message: "Tipo de usuário deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao deletar tipo de usuário", error: error });
        }
    }
}   
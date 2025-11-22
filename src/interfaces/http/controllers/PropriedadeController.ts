import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { Request, Response } from "express";
export class PropriedadeController {
    constructor(private readonly service: PropriedadeServices) {}

    async listar(req: Request, res: Response) {
        try {
            res.json(await this.service.findAll());
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            res.json(await this.service.findById(req.params.id));
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const created = await this.service.create(req.body);
            res.status(201).json(created);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updated = await this.service.update(req.params.id, req.body);
            res.json(updated);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await this.service.delete(req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }
}

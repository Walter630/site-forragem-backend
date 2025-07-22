import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { Request, Response } from "express";

export class HistoricoController {
    constructor(private simulacaoService: HistoricoServices) {}

    async historico(req: Request, res: Response) {
        try {
            const historico = await this.simulacaoService.listarHistorico();
            res.status(200).json(historico);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async findById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const historico = await this.simulacaoService.findById(Number(id));
             res.json(historico);
        } catch (err: any) {
             res.status(404).json({ erro: err.message });
        }
    }       
    async findByPropriedadeId(req: Request, res: Response) {
        try {
            const propriedadeId = req.params.propriedadeId;
            const historico = await this.simulacaoService.findByPropriedadeId(Number(propriedadeId));
             res.json(historico);
        } catch (err: any) {
             res.status(404).json({ erro: err.message });
        }
    }
    async create(req: Request, res: Response) {
        try {
            const historico = req.body;
            const createdHistorico = await this.simulacaoService.create(historico);
             res.status(201).json(createdHistorico);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const historico = req.body;
            const updatedHistorico = await this.simulacaoService.update(id, historico);
             res.json(updatedHistorico);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async deleteByPropriedadeId(req: Request, res: Response) {
        try {
            const propriedadeId = Number(req.params.propriedadeId);
            await this.simulacaoService.deleteById(propriedadeId);
             res.status(204).send();
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await this.simulacaoService.delete(id);
             res.status(204).send();
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async findAll(req: Request, res: Response) {
        try {
            const historicos = await this.simulacaoService.findAll();
             res.status(200).json(historicos);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
}
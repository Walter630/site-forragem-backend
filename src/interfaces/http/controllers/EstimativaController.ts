import { EstimativaServices } from "../../../aplication/services/EstimativasServices";
import { Request, Response } from "express";
export class EstimativaController {
    constructor(private readonly service: EstimativaServices) {}

    async create(req: Request, res: Response) {
        try{
            const estimativa = req.body;
            const createdEstimativa = await this.service.create(estimativa);
            res.status(201).json(createdEstimativa);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async findAll(req: Request, res: Response) {
        try{
            const estimativas = await this.service.findAll();
            res.status(200).json(estimativas);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try{
            const id = Number(req.params.id);
            await this.service.delete(id);
            res.status(204).send();
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try{
            const id = Number(req.params.id);
            const estimativa = req.body;
            const updatedEstimativa = await this.service.update(id, estimativa);
            res.json(updatedEstimativa);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async findById(req: Request, res: Response) {
        try{
            const id = req.params.id;
            const estimativa = await this.service.findById(Number(id));
            res.json(estimativa);
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
        }
    }

    async findByPropriedade(req: Request, res: Response) {
        try{
            const propriedadeId = req.params.propriedadeId;
            const estimativa = await this.service.findByPropriedade(Number(propriedadeId));
            res.json(estimativa);
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
        }
    }
}
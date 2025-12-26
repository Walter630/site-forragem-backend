import {CulturaServices} from "../../../aplication/services/CulturaServices";
import {Request, Response} from "express";

export class CulturaController {
    constructor(private readonly culturaController: CulturaServices) {}

    async create(req: Request, res:Response) {
        try {
            const cultura = await this.culturaController.create(req.body);
            res.status(201).json(cultura);
        }catch (error) {
            res.status(500).json({message: "Erro ao criar cultura", error: error});
        }
    }

    async findAll(req: Request, res:Response) {
        try {
            const culturas = await this.culturaController.findAll();
            res.status(200).json(culturas);
        }catch (error) {
            res.status(500).json({message: "Erro ao buscar culturas", error: error});
        }
    }

    async findById(req: Request, res:Response) {
        try {
            const cultura = await this.culturaController.findById(req.params.id);
            res.status(200).json(cultura);
        }catch (error) {
            res.status(500).json({message: "Erro ao buscar cultura", error: error});
        }
    }

    async update(req: Request, res:Response) {
        try {
            const cultura = await this.culturaController.update(req.params.id, req.body);
            res.status(200).json(cultura);
        }catch (error) {
            res.status(500).json({message: "Erro ao atualizar cultura", error: error});
        }
    }

    async delete(req: Request, res:Response) {
        try {
            await this.culturaController.delete(req.params.id);
            res.status(200).json({message: "Cultura deletada com sucesso"});
        }catch (error) {
            res.status(500).json({message: "Erro ao deletar cultura", error: error});
        }
    }
}
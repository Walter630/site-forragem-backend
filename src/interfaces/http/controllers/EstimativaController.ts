import { EstimativaServices } from "../../../aplication/services/EstimativasServices";
import { Request, Response } from "express";
import { montarDadosGrafico } from "../../../aplication/services/MontarDadosGraficos";

export class EstimativaController {
    constructor(private readonly service: EstimativaServices) {}

    async criar(req: Request, res: Response): Promise<void> {
    try {
      const { valorTotal, descricao, propriedadeId, simulacaoId } = req.body;

      const estimativa = await this.service.create({
        valorTotal,
        descricao,
        propriedadeId,
        simulacaoId,
        createdAt: new Date()
      });

      res.status(201).json(estimativa);
      return;
    } catch (error: any) {
      res.status(400).json({ error: error.message });
      return;
    }
  }

    async findAll(req: Request, res: Response): Promise<void> {
        try{
            const estimativas = await this.service.findAll();
            res.status(200).json(estimativas);
            return;
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
            return;
        }
    }
    async getGrafico(req: any, res: any): Promise<void> {
        try {
            // Pega dados do banco via service
            const dados = await this.service.buscarDadosParaGrafico();

            // Monta labels e values
            const { labels, values } = montarDadosGrafico(dados);

            res.status(200).json({ labels, values });
            return;
        } catch (error: any) {
            res.status(400).json({ message: error.message });
            return;
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try{
            const id = String(req.params.id);
            await this.service.delete(id);
            res.status(204).send();
            return;
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
            return;
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try{
            const id = String(req.params.id);
            const estimativa = req.body;
            const updatedEstimativa = await this.service.update(id, estimativa);
            res.json(updatedEstimativa);
            return;
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
            return;
        }
    }

    async findById(req: Request, res: Response): Promise<void> {
        try{
            const id = req.params.id;
            const estimativa = await this.service.findById(String(id));
            res.json(estimativa);
            return;
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
            return;
        }
    }

    async findByPropriedade(req: Request, res: Response): Promise<void> {
        try{
            const propriedadeId = req.params.propriedadeId;
            const estimativa = await this.service.findByPropriedade(String(propriedadeId));
            res.json(estimativa);
            return;
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
            return;
        }
    }
}
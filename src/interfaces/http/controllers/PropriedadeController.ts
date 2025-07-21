import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { Request, Response } from "express";

export class PropriedadeController {
    constructor(private readonly service: PropriedadeServices) {}

  async listar(req: Request, res: Response) {
    try {
        await this.service.findAll();
       res.json();
    } catch (err: any) {
       res.status(500).json({ erro: err.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const  id  = req.params.id;
      const propriedade = await this.service.findById(Number(id));
       res.json(propriedade);
    } catch (err: any) {
       res.status(404).json({ erro: err.message });
    }
  }
    async findByNomePropriedade(req: Request, res: Response) {
        try {
        const nome = req.params.nome;
        const propriedades = await this.service.findByNomePropriedade(nome);
         res.json(propriedades);
        } catch (err: any) {
         res.status(404).json({ erro: err.message });
        }
    }
    async findByNomeProprietario(req: Request, res: Response) {
        try {
        const nome = req.params.nome;
        const propriedades = await this.service.findByNomeProprietario(nome);
         res.json(propriedades);
        } catch (err: any) {
         res.status(404).json({ erro: err.message });
        }
    }
    async create(req: Request, res: Response) {
        try {
            const propriedade = req.body;
            const createdPropriedade = await this.service.create(propriedade);
             res.status(201).json(createdPropriedade);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const propriedade = req.body;
            const updatedPropriedade = await this.service.update(id, propriedade);
             res.json(updatedPropriedade);
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            await this.service.delete(id);
             res.status(204).send();
        } catch (err: any) {
             res.status(500).json({ erro: err.message });
        }
    }
}
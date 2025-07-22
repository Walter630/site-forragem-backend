import { PrecipitacaoServices } from "../../../aplication/services/PrecipitacaoServices";
import { Request, Response } from "express";
import { CreatePrecipitacaoDTO } from "../../../aplication/dto/PrecipitacaoDTO";

export class PrecipitacaoController {
  constructor(private service: PrecipitacaoServices) {}

  async findAll(req: Request, res: Response) {
    try {
      const precipitations = await this.service.findAll();
       res.json(precipitations);
    } catch (err: any) {
       res.status(500).json({ error: err.message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const precipitation = await this.service.findById(id);

      if (!precipitation) {
         res.status(404).json({ error: "Precipitação não encontrada" });
      }

       res.json(precipitation);
    } catch (err: any) {
       res.status(500).json({ error: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
        console.log("Headers:", req.headers);
    console.log("Body (raw):", req.body);
        const {propriedadeId ,mmAno, chuvas, mmDia, cvDia, mmMes, cvMes } = req.body;

      const created = await this.service.create({
        propriedadeId,
        mmAno,
        chuvas,
        mmDia,
        cvDia,
        mmMes,
        cvMes,
      });
      console.error('Created precipitation:', created);
       res.status(201).json(created);
    } catch (err: any) {
      console.error('Error creating precipitation:', err);
      res.status(500).json({ error: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const {propriedadeId, mmAno, chuvas, mmDia, cvDia, mmMes, cvMes } = req.body;

      const existing = await this.service.findById(id);
      if (!existing) {
         res.status(404).json({ error: "Precipitação não encontrada para atualizar" });
      }

      const updated = await this.service.update(id, {
        propriedadeId,
        mmAno,
        chuvas,
        mmDia,
        cvDia,
        mmMes,
        cvMes,
      });

       res.json(updated);
    } catch (err: any) {
       res.status(500).json({ error: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await this.service.delete(id);
       res.status(204).send();
    } catch (err: any) {
       res.status(500).json({ error: err.message });
    }
  }
}

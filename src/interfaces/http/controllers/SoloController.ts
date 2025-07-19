import { SoloServices } from "../../../aplication/services/SoloServices";
import {Request, Response} from "express";
import { Solo } from "../../../domain/entities/Solo";

export class SoloController {
    constructor(private readonly soloServices: SoloServices) {}
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        profundidade = 0,
        condut_hidraulica_saturada,
        densidade_aparente,
        agua_0_bar,
        agua_13_bar,
        agua_15_bar,
        fator_rocha,
      } = req.body;

      const solo = Solo.create({
        profundidade,
        condut_hidraulica_saturada,
        densidade_aparente,
        agua_0_bar,
        agua_13_bar,
        agua_15_bar,
        fator_rocha,
      });
      console.log("Criando novo solo:", solo);

      const novoSolo = await this.soloServices.create(solo);
      console.log("Novo solo criado:", novoSolo);
      return res.status(201).json(novoSolo);
    } catch (error: any) {
      console.error("Erro ao criar solo:", error);
      return res.status(500).json({ error: error.message });
    }
  }


    async getAll(req: Request, res: Response) {
        try {
            const solos = await this.soloServices.findAll();
            return res.status(200).json(solos);
        } catch (error) {
            console.error("Error fetching solos:", error);
            return res.status(500).json({ error: "Erro ao buscar solos." });
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const { dados } = req.body;
            const resultado = await this.soloServices.update(id, dados);
            return res.status(200).json({ resultado });
        } catch (error) {
            console.error("Error updating solo:", error);
            return res.status(500).json({ error: "Erro ao atualizar solo." });
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.body;
            await this.soloServices.delete(id);
            return res.status(204).send();
        } catch (error) {
            console.error("Error deleting solo:", error);
            return res.status(500).json({ error: "Erro ao deletar solo." });
        }
    }
    async findById(req: Request, res: Response) {
        try {
            const { id } = req.body;
            const solo = await this.soloServices.findById(id);
            if (!solo) {
                return res.status(404).json({ error: "Solo not found." });
            }
            return res.status(200).json(solo);
        } catch (error) {
            console.error("Error fetching solo by ID:", error);
            return res.status(500).json({ error: "Erro ao buscar solo." });
        }
    }
    
}
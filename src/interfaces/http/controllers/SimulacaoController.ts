import { PDFServices } from './../../../aplication/services/PdfServices';
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";

export class SimulacaoController {
  constructor(
    private readonly simulacaoServices: SimulacaoServices,
  ) {}

  async simular(req: Request, res: Response) {
    try {
      const { propriedadeId, dados } = req.body;

      if (!propriedadeId || !dados) {
         res.status(400).json({ error: "propriedadeId e dados são obrigatórios." });
      }

      const resultado = await this.simulacaoServices.simularForragem({
        propriedadeId: Number(propriedadeId),
        dados
      });

       res.status(201).json({ resultado });
    } catch (error: any) {
      console.error("Erro na simulação:", error);
       res.status(500).json({ error: error.message || "Erro ao simular produção." });
    }
  }

  async historico(req: Request, res: Response) {
    try {
      const historico = await this.simulacaoServices.listarHistorico();
       res.json(historico);
    } catch (error: any) {
      console.error("Erro ao buscar histórico:", error);
       res.status(500).json({ error: error.message || "Erro ao buscar histórico." });
    }
  }
}

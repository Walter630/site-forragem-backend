// src/presentation/controllers/SimulacaoController.ts
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";

export class SimulacaoController {
  // Injetando o serviço de simulação
  // e removendo o repositório, pois não é necessário aqui

  constructor(private readonly simulacaoServices: SimulacaoServices, ) {}

  // Agora espera no body: { propriedadeId: number, descricao?: string }
  async simular(req: Request, res: Response) {
    try {
      const { propriedadeId, descricao } = req.body;

      if (!propriedadeId) {
         res.status(400).json({ error: "PropriedadeId é obrigatório" });
      }

      const resultado = await this.simulacaoServices.calcularProducaoPorPropriedade(propriedadeId, descricao);

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
    } catch (error) {
      console.error("Erro ao buscar histórico:", error);
       res.status(500).json({ error: "Erro ao buscar histórico" });
    }
  }
}

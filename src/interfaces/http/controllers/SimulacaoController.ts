// src/presentation/controllers/SimulacaoController.ts
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimulacaoRepositories } from "../../../infra/repositories/SimulacaoRepositories";


export class SimulacaoController {
    constructor(private readonly simulacaoServices: SimulacaoServices, private readonly simulacaoRepository: SimulacaoRepositories) {}

   async simular(req: Request, res: Response) {
    try {
      const {dados} = req.body;
      const resultado = await this.simulacaoServices.calcularProducao(dados);
      const saved = await this.simulacaoRepository.salvar(dados, resultado);

      return res.status(201).json({ resultado, id: saved.id });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao simular produção." });
    }
  }

    async historico(req: Request, res: Response) {
    const historico = await this.simulacaoRepository.listarHistorico();
    return res.json(historico);
  }
}

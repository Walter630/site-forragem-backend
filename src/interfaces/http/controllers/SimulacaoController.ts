import { PDFServices } from './../../../aplication/services/PdfServices';
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimularForragemInputDTO } from "../../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoController {
  constructor(
    private readonly simulacaoServices: SimulacaoServices,
  ) {}

  async simular(req: Request, res: Response): Promise<void> {
    try {
      const {
        propriedadeId,
        dados,
        nomeSimulacao,
        ano,
        culturaId,
        soloId,
        eto,
        indiceAridez,
        precipitacaoMmAno,
        numeroChuvas,
        precipitacaoMmDia,
        cvDia,
        precipitacaoMmMes,
        cvMes,
        altitude,
        temperaturaMed,
        umidade,
      } = req.body;

      // Validação dos campos obrigatórios
      if (!propriedadeId || !dados || !nomeSimulacao || !ano || !culturaId || !soloId) {
         res.status(400).json({ error: "Campos obrigatórios ausentes: propriedadeId, dados, nomeSimulacao, ano, culturaId, soloId" });
         return;
      }

      const input: SimularForragemInputDTO = {
        propriedadeId: String(propriedadeId),
        dados,
        nomeSimulacao: String(nomeSimulacao),
        ano: Number(ano),
        culturaId: String(culturaId),
        soloId: String(soloId),
        eto: eto !== undefined ? Number(eto) : undefined,
        indiceAridez: indiceAridez !== undefined ? Number(indiceAridez) : undefined,
        precipitacaoMmAno: precipitacaoMmAno !== undefined ? Number(precipitacaoMmAno) : undefined,
        numeroChuvas: numeroChuvas !== undefined ? Number(numeroChuvas) : undefined,
        precipitacaoMmDia: precipitacaoMmDia !== undefined ? Number(precipitacaoMmDia) : undefined,
        cvDia: cvDia !== undefined ? Number(cvDia) : undefined,
        precipitacaoMmMes: precipitacaoMmMes !== undefined ? Number(precipitacaoMmMes) : undefined,
        cvMes: cvMes !== undefined ? Number(cvMes) : undefined,
        altitude: altitude !== undefined ? Number(altitude) : undefined,
        temperaturaMed: temperaturaMed !== undefined ? Number(temperaturaMed) : undefined,
        umidade: umidade !== undefined ? Number(umidade) : undefined,
      } as SimularForragemInputDTO;

      const resultado = await this.simulacaoServices.simularForragem(input);

       res.status(201).json({ resultado });
       return;
    } catch (error: any) {
      console.error("Erro na simulação:", error);
       res.status(500).json({ error: error.message || "Erro ao simular produção." });
       return;
    }
  }

  async historico(req: Request, res: Response): Promise<void> {
    try {
      const historico = await this.simulacaoServices.listarHistorico();
       res.json(historico);
       return;
    } catch (error: any) {
      console.error("Erro ao buscar histórico:", error);
       res.status(500).json({ error: error.message || "Erro ao buscar histórico." });
       return;
    }
  }

  async listar(req: Request, res: Response): Promise<void> {
    try {
      const simulacoes = await this.simulacaoServices.listarSimulacoes();
       res.json(simulacoes);
       return;
    } catch (error: any) {
      console.error("Erro ao listar simulações:", error);
       res.status(500).json({ error: error.message || "Erro ao listar simulações." });
       return;
    }
  }
}

import { PDFServices } from './../../../aplication/services/PdfServices';
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimularForragemInputDTO } from "../../../aplication/dto/SimulacaoForragemDTO";
import {Simulacao} from "../../../domain/entities/Simulacao";

export class SimulacaoController {
  constructor(
    private readonly simulacaoServices: SimulacaoServices,
  ) {}

  async simular(req: Request, res: Response): Promise<void> {
    try {
      const {
        propriedadeId,
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
      console.log(req.body)
      // Validação dos campos obrigatórios
      if (!propriedadeId  || !nomeSimulacao || !ano || !culturaId || !soloId) {
         res.status(400).json({ error: "Campos obrigatórios ausentes: propriedadeId, dados, nomeSimulacao, ano, culturaId, soloId" });
         return;
      }

      const input: SimularForragemInputDTO = {
        propriedadeId: String(propriedadeId),

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
      console.log(input)
      const resultado = await this.simulacaoServices.simularForragem(input);
      console.log(resultado)
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

  // Listar todas as simulações (apenas ADMIN)
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

  // Listar simulações filtradas pelo usuário logado
  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const user = (req as any).user;

      if (!user?.id) {
        res.status(401).json({ error: "Usuário não autenticado" });
        return;
      }

      const userContext = {
        id: user.id,
        role: user.role,
        gerenteId: user.gerenteId
      };

      const simulacoes = await this.simulacaoServices.listarSimulacoesPorUsuario(userContext);
      res.json(simulacoes);
      return;
    } catch (error: any) {
      console.error("Erro ao listar simulações do usuário:", error);
      res.status(500).json({ error: error.message || "Erro ao listar simulações." });
      return;
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = (req as any).user;

      if (!id) {
        res.status(400).json({ error: "ID é obrigatório" });
        return;
      }

      const simulacao = await this.simulacaoServices.findById(id);

      if (!simulacao) {
        res.status(404).json({ error: "Simulação não encontrada" });
        return;
      }

      // Verifica permissão se usuário autenticado
      if (user?.id) {
        const userContext = {
          id: user.id,
          role: user.role,
          gerenteId: user.gerenteId
        };

        const canAccess = await this.simulacaoServices.userCanAccessSimulacao(id, userContext);
        if (!canAccess) {
          res.status(403).json({ error: "Você não tem acesso a esta simulação" });
          return;
        }
      }

      res.json(simulacao);
      return;
    } catch (error: any) {
      console.error("Erro ao buscar simulação por ID:", error);
      res.status(500).json({ error: error.message || "Erro ao buscar simulação." });
    }
  }

  // Deletar simulação por ID
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = (req as any).user;

      if (!id) {
        res.status(400).json({ error: "ID é obrigatório" });
        return;
      }

      if (!user?.id) {
        res.status(401).json({ error: "Usuário não autenticado" });
        return;
      }

      const userContext = {
        id: user.id,
        role: user.role,
        gerenteId: user.gerenteId
      };

      await this.simulacaoServices.delete(id, userContext);

      res.status(200).json({ message: "Simulação deletada com sucesso" });
      return;
    } catch (error: any) {
      console.error("Erro ao deletar simulação:", error);

      if (error.message === "Simulação não encontrada") {
        res.status(404).json({ error: error.message });
        return;
      }

      if (error.message === "Você não tem permissão para deletar esta simulação") {
        res.status(403).json({ error: error.message });
        return;
      }

      res.status(500).json({ error: error.message || "Erro ao deletar simulação." });
      return;
    }
  }
}

import { Request, Response } from "express";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";

export class HistoricoController {
  constructor(private historicoService: HistoricoServices) {}

  // Listar todos os históricos
  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const historicos = await this.historicoService.listarHistorico();
      res.status(200).json(historicos);
      return;
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
      return;
    }
  }

  // Listar históricos filtrados pelo usuário logado
  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const user = (req as any).user;

      if (!user?.id) {
        res.status(401).json({ erro: "Usuário não autenticado" });
        return;
      }

      const userContext = {
        id: user.id,
        role: user.role,
        gerenteId: user.gerenteId
      };

      const historicos = await this.historicoService.listarHistoricoPorUsuario(userContext);
      res.status(200).json(historicos);
      return;
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
      return;
    }
  }

  // Listar histórico por ID
  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = String(req.params.id);
      const user = (req as any).user;

      // Verificar permissão se usuário autenticado
      if (user?.id) {
        const userContext = {
          id: user.id,
          role: user.role,
          gerenteId: user.gerenteId
        };

        const canAccess = await this.historicoService.userCanAccessHistorico(id, userContext);
        if (!canAccess) {
          res.status(403).json({ erro: "Você não tem acesso a este histórico" });
          return;
        }
      }

      const historico = await this.historicoService.buscarComDetalhes(id);
      res.status(200).json(historico);
      return;
    } catch (err: any) {
      res.status(404).json({ erro: err.message });
      return;
    }
  }

  // Listar histórico por propriedadeId
  async findByPropriedadeId(req: Request, res: Response): Promise<void> {
    try {
      const propriedadeId = String(req.params.propriedadeId);
      const historico = await this.historicoService.gerarPDFHistorico(propriedadeId);
      res.status(200).json(historico);
      return;
    } catch (err: any) {
      res.status(404).json({ erro: err.message });
      return;
    }
  }

  // Listar todos os históricos (pode ser um histórico geral ou simplificado)
  async historico(req: Request, res: Response): Promise<void> {
    try {
      const historicos = await this.historicoService.listarHistorico();
      res.status(200).json(historicos);
      return;
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
      return;
    }
  }

  // Atualizar histórico por ID
  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = String(req.params.id);
      const historicoData = req.body;
      // HistoricoServices não tem atualizar implementado; precisaria implementar se necessário
      const atualizado = await this.historicoService.buscarComDetalhes(id);
      res.status(200).json(atualizado);
      return;
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
      return;
    }
  }

  // Deletar histórico por ID
  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = String(req.params.id);
      // HistoricoServices não tem deletar implementado; se tiver, chamar aqui
      res.status(204).send();
      return;
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
      return;
    }
  }

  // Gerar relatório PDF do histórico
  async gerarRelatorio(req: Request, res: Response): Promise<void> {
  try {
    const id = String(req.params.id);
    const pdfBuffer = await this.historicoService.gerarPDFHistorico(id);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=relatorio-historico-${id}.pdf`);
    res.send(pdfBuffer);
    return;
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Erro ao gerar PDF" });
    return;
  }
}

}

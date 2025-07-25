import { Request, Response } from "express";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";

export class HistoricoController {
  constructor(private historicoService: HistoricoServices) {}

  // Listar todos os históricos
  async findAll(req: Request, res: Response) {
    try {
      const historicos = await this.historicoService.findAll();
      res.status(200).json(historicos);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Listar histórico por ID
  async findById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const historico = await this.historicoService.findById(id);
      res.status(200).json(historico);
    } catch (err: any) {
      res.status(404).json({ erro: err.message });
    }
  }

  // Listar histórico por propriedadeId
  async findByPropriedadeId(req: Request, res: Response) {
    try {
      const propriedadeId = Number(req.params.propriedadeId);
      const historico = await this.historicoService.findByPropriedadeId(propriedadeId);
      res.status(200).json(historico);
    } catch (err: any) {
      res.status(404).json({ erro: err.message });
    }
  }

  // Listar todos os históricos (pode ser um histórico geral ou simplificado)
  async historico(req: Request, res: Response) {
    try {
      const historico = await this.historicoService.listarHistorico();
      res.status(200).json(historico);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Criar novo histórico
  async create(req: Request, res: Response) {
    try {
      const historicoData = req.body;
      const novoHistorico = await this.historicoService.create(historicoData);
      res.status(201).json(novoHistorico);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Atualizar histórico por ID
  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const historicoData = req.body;
      const atualizado = await this.historicoService.update(id, historicoData);
      res.status(200).json(atualizado);
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Deletar histórico por ID
  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await this.historicoService.delete(id);
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Deletar histórico pelo ID da propriedade
  async deleteByPropriedadeId(req: Request, res: Response) {
    try {
      const propriedadeId = Number(req.params.propriedadeId);
      await this.historicoService.deleteById(propriedadeId);
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ erro: err.message });
    }
  }

  // Gerar relatório PDF do histórico
  async gerarRelatorio(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const pdfBuffer = await this.historicoService.gerarPDFHistorico(id);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=relatorio-historico-${id}.pdf`);
    res.send(pdfBuffer);
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Erro ao gerar PDF" });
  }
}

}

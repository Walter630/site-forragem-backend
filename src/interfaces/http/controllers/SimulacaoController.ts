// src/presentation/controllers/SimulacaoController.ts
import { Request, Response } from "express";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimulacaoPDFService } from "../../../aplication/services/PdfServices";

export class SimulacaoController {
  constructor(private readonly simulacaoServices: SimulacaoServices, private readonly pdfService: SimulacaoPDFService) {}

  // Espera no body: { propriedadeId: number, dados: any }
  async simular(req: Request, res: Response) {
    try {
      const { propriedadeId, dados } = req.body;

      if (!propriedadeId || !dados) {
         res.status(400).json({ error: "propriedadeId e dados são obrigatórios." });
      }

      const resultado = await this.simulacaoServices.simularForragem({ propriedadeId, dados });

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
    async gerarRelatorioPDF(req: Request, res: Response) {
      try {
        const dadosSimulacao = req.body;
  
        // Gera o PDF com dados + gráfico
        const pdfPath = await this.pdfService.gerarPDF(dadosSimulacao);
  
        // Envia o PDF como download
        res.download(pdfPath, 'relatorio-simulacao.pdf', (err) => {
          if (err) {
            console.error('Erro ao enviar PDF:', err);
            res.status(500).json({ error: 'Erro ao baixar o PDF' });
          }
        });
  
      } catch (error: any) {
        console.error('Erro ao gerar PDF:', error);
        res.status(500).json({ error: 'Erro ao gerar o PDF' });
      }
    }
  }

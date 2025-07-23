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
    // src/presentation/controllers/SimulacaoController.ts
  async gerarRelatorioPDF(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const dados = await this.pdfService.buscarSimulacaoComEstimativas(Number(id));
      if (!dados) {
         res.status(404).json({ error: "Simulação não encontrada" });
      }

      const caminhoPDF = await this.pdfService.gerarPDF(dados);
       res.download(caminhoPDF, `relatorio-simulacao-${id}.pdf`);
    } catch (err: any) {
       res.status(500).json({ error: err.message });
    }
  }
// ... outros métodos

  async gerarPDFPorSimulacaoId(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
         res.status(400).json({ error: "ID da simulação é obrigatório." });
         
      }

      // Busca a simulação completa no banco
      const simulacao = await this.pdfService.buscarPorId(Number(id));

      if (!simulacao) {
         res.status(404).json({ error: "Simulação não encontrada." });
      }

      // Gera o PDF com os dados da simulação
      const pdfPath = await this.pdfService.gerarPDF(simulacao);

      // Envia o arquivo como download
       res.download(pdfPath, `simulacao-${id}.pdf`, (err) => {
        if (err) {
          console.error("Erro ao enviar o PDF:", err);
           res.status(500).json({ error: "Erro ao baixar o PDF" });
        }
      });

    } catch (error: any) {
      console.error("Erro ao gerar PDF:", error);
       res.status(500).json({ error: error.message || "Erro interno." });
    }
  }
}

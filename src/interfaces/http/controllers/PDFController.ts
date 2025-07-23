import { Request, Response } from 'express';
import { SimulacaoPDFService } from '../../../aplication/services/PdfServices';

export class SimulacaoController {
  private readonly pdfService = new SimulacaoPDFService();

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

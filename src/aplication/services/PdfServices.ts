import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { ChartService } from './ChartServices';

export class SimulacaoPDFService {
  private chartService = new ChartService();

  async gerarPDF(dadosSimulacao: any): Promise<string> {
    const doc = new PDFDocument();
    const filePath = path.join(__dirname, '..', '..', 'pdfs', `simulacao-${Date.now()}.pdf`);

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    doc.fontSize(18).text('Relatório de Simulação de Forragem', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(`Propriedade: ${dadosSimulacao.propriedade}`);
    doc.text(`Solo: ${dadosSimulacao.tipoSolo}`);
    doc.text(`Precipitação: ${dadosSimulacao.precipitacao} mm`);
    doc.text(`Resultado: ${dadosSimulacao.resultado} kg/ha`);
    doc.text(`Data: ${new Date().toLocaleString()}`);
    doc.moveDown();

    // ⬇️ GERA O GRÁFICO
    if (dadosSimulacao.estimativas) {
      const { labels, values } = dadosSimulacao.estimativas;
      const grafico = await this.chartService.gerarGrafico({ labels, values });

      doc.addPage(); // adicionar nova página se quiser
      doc.fontSize(14).text('Gráfico de Estimativas', { align: 'center' });
      doc.moveDown();

      // Adiciona a imagem do gráfico
      doc.image(grafico, {
        fit: [500, 300],
        align: 'center',
        valign: 'center',
      });
    }

    doc.end();

    return new Promise((resolve) => {
      stream.on('finish', () => {
        resolve(filePath);
      });
    });
  }
}

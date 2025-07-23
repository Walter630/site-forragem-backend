import { SimulacaoRepositories } from './../../infra/repositories/SimulacaoRepositories';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { ChartService } from './ChartServices';
import { prisma } from '../../infra/prisma/PrismaClient';
import { EstimativasRepositories } from '../../infra/repositories/EstimativasRepositories';

export class SimulacaoPDFService {
  private chartService = new ChartService();
  private simulacaoRepository = new SimulacaoRepositories(prisma);
  private estimativasRepository = new EstimativasRepositories(prisma)

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
    doc.text(`Solo: ${dadosSimulacao.soloId}`);
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
  // src/aplication/services/SimulacaoServices.ts

async buscarSimulacaoComEstimativas(id: number) {
  const simulacao = await this.simulacaoRepository.buscarPorId(id);
  if (!simulacao) return null;

  const estimativas = await this.estimativasRepository.findByPropriedade(simulacao.propriedadeId);

  if (!estimativas) {
    throw new Error('Erro na estimativa');
  }
  // 🛠️ Tipagem explícita para garantir que é um array
  if (!Array.isArray(estimativas) || estimativas.length === 0) {
    throw new Error('Erro na estimativa');
  }
  const labels = estimativas.map((e: any) => e.mes);
  const values = estimativas.map((e: any) => e.valor);

  if (!labels || !values) {
    throw new Error('Erro ao montar dados de estimativas');
  }

  return {
    propriedade: simulacao.propriedadeId,
    data: simulacao.dataSimulacao,
    dadosJson: simulacao.dadosJson,
    resultado: simulacao.resultado,
    estimativas: {
      labels,
      values
    }
  };
}
async buscarPorId(id: number) {
    return this.simulacaoRepository.buscarPorId(id);
  }

}

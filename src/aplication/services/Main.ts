import fs from 'fs';
import { ChartService } from '../services/ChartServices';
import { PDFServices } from '../services/PdfServices';
import { montarDadosGrafico } from '../services/MontarDadosGraficos';

async function main() {
  async function gerarRelatorio(simulacaoData: {
    producaoPorMes: { mes: string; valor: number }[],
    historicoCompleto: {
      propriedade: { nomeProprietario: string; nomePropriedade: string },
      simulacao: { dataSimulacao: Date; resultado: number },
      estimativas: Record<string, number>
    }
  }) {
    try {
      const dadosConvertidos = simulacaoData.producaoPorMes.map(dado => ({
        mes: parseInt(dado.mes),
        producao: dado.valor
      }));

      const dadosGrafico = montarDadosGrafico(dadosConvertidos);

      const chartService = new ChartService();
      const bufferGrafico = await chartService.gerarGrafico(dadosGrafico);

      fs.writeFileSync('grafico-forragem.png', bufferGrafico);

      const pdfService = new PDFServices();
      const pdfBuffer = await pdfService.gerarPDFDoHistorico(
        simulacaoData.historicoCompleto,
        bufferGrafico
      );

      fs.writeFileSync('relatorio-com-grafico.pdf', pdfBuffer);

      console.log('✅ PDF gerado com gráfico dinâmico e texto!');
    } catch (error) {
      console.error('❌ Erro ao gerar relatório:', error);
    }
  }

  // Exemplo de chamada (dados fictícios)
  await gerarRelatorio({
    producaoPorMes: [
      { mes: "1", valor: 500 },
      { mes: "2", valor: 800 },
      { mes: "3", valor: 700 },
      // ... adicione conforme resultado da simulação
    ],
    historicoCompleto: {
      propriedade: {
        nomeProprietario: "João da Silva",
        nomePropriedade: "Fazenda Boa Esperança",
      },
      simulacao: {
        dataSimulacao: new Date(),
        resultado: 12345,
      },
      estimativas: {
        janeiro: 500,
        fevereiro: 800,
        março: 700,
        // ...
      }
    }
  });
}

main();

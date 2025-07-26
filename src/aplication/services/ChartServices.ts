// ChartServices.ts
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import { ChartConfiguration } from 'chart.js';

export class ChartService {
  private chartCanvas = new ChartJSNodeCanvas({ width: 800, height: 400 });

  async gerarGrafico(dados: { mes: number; producao: number }[]): Promise<Buffer> {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels: meses,
        datasets: [
          {
            label: 'Produção Mensal',
            data: dados.map(d => d.producao),
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    return this.chartCanvas.renderToBuffer(config);
  }
}

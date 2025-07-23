import { ChartJSNodeCanvas } from 'chartjs-node-canvas';

export class ChartService {
  private width = 600;
  private height = 400;
  private chartCallback = (ChartJS: any) => {
    // registrar plugins se quiser
  };

  private chartJSNodeCanvas = new ChartJSNodeCanvas({
    width: this.width,
    height: this.height,
    chartCallback: this.chartCallback,
    backgroundColour: 'white',
  });

  async gerarGrafico(dados: { labels: string[]; values: number[] }): Promise<Buffer> {
    const configuration = {
      type: 'bar', // ou 'line', 'pie' etc.
      data: {
        labels: dados.labels,
        datasets: [
          {
            label: 'Estimativas (kg/ha)',
            data: dados.values,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ],
      },
    };

    return await this.chartJSNodeCanvas.renderToBuffer(configuration as any);
  }
}

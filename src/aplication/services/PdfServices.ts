import path from 'path';
import PdfPrinter from 'pdfmake';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const fontsPath = path.resolve(__dirname, '../fonts');

const fonts = {
  Roboto: {
    normal: path.join(fontsPath, 'Roboto-Regular.ttf'),
    bold: path.join(fontsPath, 'Roboto-Medium.ttf'),
    italics: path.join(fontsPath, 'Roboto-Italic.ttf'),
    bolditalics: path.join(fontsPath, 'Roboto-MediumItalic.ttf'),
  },
};

const printer = new PdfPrinter(fonts);

export class PDFServices {
  async gerarPDFDoHistorico(data: any, graficoBuffer?: Buffer): Promise<Buffer> {
    const imageGrafico = graficoBuffer
      ? `data:image/png;base64,${graficoBuffer.toString('base64')}`
      : null;

    const estimativasArray =
      data.estimativas && typeof data.estimativas === 'object'
        ? Object.entries(data.estimativas).map(([nome, valor]) => ({
            text: `- ${nome}: ${valor} kg/ha`,
            margin: [0, 2, 0, 0],
          }))
        : [{ text: 'Sem estimativas disponíveis' }];

    const contentArray: any[] = [
      { text: '📄 Relatório da Simulação de Forragem', style: 'header', margin: [0, 0, 0, 10] },

      // 🧑‍🌾 Propriedade
      { text: 'Informações da Propriedade', style: 'subheader' },
      { text: `Proprietário: ${data.propriedade.nomeProprietario}` },
      { text: `Nome da Propriedade: ${data.propriedade.nomePropriedade}` },
      { text: `Latitude: ${data.propriedade.latitude}` },
      { text: `Longitude: ${data.propriedade.longitude}` },
      { text: `Altitude: ${data.propriedade.altitude} m`, margin: [0, 0, 0, 10] },

      // 📘 Histórico
      { text: 'Detalhes do Histórico', style: 'subheader' },
      { text: `Descrição: ${data.historico.descricao}` },
      { text: `Valor da Simulação: ${data.historico.valorSimulacao} kg/ha`, margin: [0, 0, 0, 10] },

      // 🧪 Simulação
      { text: 'Informações da Simulação', style: 'subheader' },
      {
        text: `Data da Simulação: ${new Date(data.simulacao.dataSimulacao).toLocaleString()}`,
      },
      { text: `Resultado Final: ${data.simulacao.resultado} kg/ha`, margin: [0, 0, 0, 10] },

      // 📊 Estimativas
      { text: 'Estimativas de Produção', style: 'subheader' },
      ...estimativasArray,
      { text: '', margin: [0, 0, 0, 10] },

      // 🌱 Solo
      { text: 'Informações do Solo', style: 'subheader' },
      { text: `ID Solo: ${data.solo.id}` },
      { text: `Profundidade: ${data.solo.profundidade} cm` },
      { text: `Fator Rocha: ${data.solo.fatorRocha ?? 'N/A'}` },
      { text: `Condutividade Hidráulica Saturada: ${data.solo.condutHidraulicaSaturada ?? 'N/A'}` },
      { text: `Densidade Aparente: ${data.solo.densidadeAparente ?? 'N/A'}` },
      { text: `Água 0 Bar: ${data.solo.agua0Bar ?? 'N/A'}` },
      { text: `Água 13 Bar: ${data.solo.agua13Bar ?? 'N/A'}` },
      { text: `Água 15 Bar: ${data.solo.agua15Bar ?? 'N/A'}` },

      // 🌧️ Precipitação
      { text: 'Informações de Precipitação', style: 'subheader' },
      { text: `ID Precipitação: ${data.precipitacao.id}` },
      { text: `Milímetros por Ano: ${data.precipitacao.mmAno ?? 'N/A'}` },
      { text: `Chuvas: ${data.precipitacao.chuvas ?? 'N/A'} mm` },
      { text: `Milímetros por Dia: ${data.precipitacao.mmDia ?? 'N/A'}` },
      { text: `Coeficiente de Variação Diário: ${data.precipitacao.cvDia ?? 'N/A'}` },
      { text: `Milímetros por Mês: ${data.precipitacao.mmMes ?? 'N/A'}` },
      { text: `Coeficiente de Variação Mensal: ${data.precipitacao.cvMes ?? 'N/A'}`, margin: [0, 0, 0, 10] },
    ];

    // 📈 Adiciona o gráfico, se existir
    if (imageGrafico) {
      contentArray.push({ text: 'Gráfico de Produção Mensal', style: 'subheader' });
      contentArray.push({ image: imageGrafico, width: 500, margin: [0, 10, 0, 0] });
    }

    const documentDefinition: TDocumentDefinitions = {
      content: contentArray,
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 4],
        },
      },
      defaultStyle: {
        font: 'Roboto',
      },
    };

    const pdfDoc = printer.createPdfKitDocument(documentDefinition);
    const chunks: Uint8Array[] = [];

    return new Promise((resolve, reject) => {
      pdfDoc.on('data', (chunk) => chunks.push(chunk));
      pdfDoc.on('end', () => resolve(Buffer.concat(chunks)));
      pdfDoc.end();
    });
  }
}

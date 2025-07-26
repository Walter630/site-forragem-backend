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
          }))
        : [{ text: 'Sem estimativas disponíveis' }];

    const contentArray: any[] = [
      { text: 'Relatório da Simulação de Forragem', style: 'header' },
      { text: `Nome do Proprietário: ${data.propriedade.nomeProprietario}`, margin: [0, 10, 0, 0] },
      { text: `Nome da Propriedade: ${data.propriedade.nomePropriedade}` },
      {
        text: `Data da Simulação: ${new Date(data.simulacao.dataSimulacao).toLocaleString()}`,
        margin: [0, 10, 0, 0],
      },
      { text: 'Estimativas:', margin: [0, 10, 0, 0], bold: true },
      ...estimativasArray,
      { text: `Resultado da Simulação: ${data.simulacao.resultado} kg/ha`, margin: [0, 10, 0, 0] },
    ];

    if (imageGrafico) {
      contentArray.push({ image: imageGrafico, width: 500, margin: [0, 20, 0, 0] });
    }

    const documentDefinition: TDocumentDefinitions = {
      content: contentArray,
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
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

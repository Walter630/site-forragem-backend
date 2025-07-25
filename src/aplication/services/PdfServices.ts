import path from "path";
import PdfPrinter from "pdfmake";
import { HistoricoCompleto } from "../dto/HistoricoDTO";
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import fs from "fs";

const fontsPath = path.resolve(__dirname, "../fonts");

const fonts = {
  Roboto: {
    normal: path.join(fontsPath, "Roboto-Regular.ttf"),
    bold: path.join(fontsPath, "Roboto-Medium.ttf"),
    italics: path.join(fontsPath, "Roboto-Italic.ttf"),
    bolditalics: path.join(fontsPath, "Roboto-MediumItalic.ttf"),
  },
};

const printer = new PdfPrinter(fonts);

export class PDFServices {

  async gerarPDFDoHistorico(data: HistoricoCompleto): Promise<Buffer> {
    const documentDefinition: TDocumentDefinitions = {
      content: [
        { text: "Relatório da Simulação de Forragem", style: "header" },
        { text: `Nome do Proprietário: ${data.propriedade.nomeProprietario}`, margin: [0, 10, 0, 0] },
        { text: `Nome da Propriedade: ${data.propriedade.nomePropriedade}` },
        { text: `Resultado da Simulação: ${data.simulacao.resultado} kg/ha`, margin: [0, 10, 0, 0] },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
        },
      },
      defaultStyle: {
        font: "Roboto",
      },
    };

    const pdfDoc = printer.createPdfKitDocument(documentDefinition);
    const chunks: Uint8Array[] = [];

    return new Promise((resolve, reject) => {
      pdfDoc.on("data", (chunk) => chunks.push(chunk));
      pdfDoc.on("end", () => resolve(Buffer.concat(chunks)));
      pdfDoc.end();
    });
  }
}

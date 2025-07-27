import { ChartService } from './ChartServices';
import { Historico } from "../../domain/entities/Historico";
import { HistoricoRepositories } from "../../infra/repositories/HistoricoRepositories";
import { montarDadosGrafico } from "./MontarDadosGraficos";
import { PDFServices } from "./PdfServices";
import { HistoricoCompleto } from "../../aplication/dto/HistoricoDTO";

type HistoricoProps = {
  id: number;
  descricao: string;
  valorSimulacao: number;
  propriedadeId: number;
  simulacaoId: number;
  soloId: number;
  precipitacaoId: number;
  // outras propriedades obrigatórias
};

export class HistoricoServices {
  private chartService = new ChartService();

  constructor(
    private pdfServices: PDFServices,
    private historicoRepository: HistoricoRepositories
  ) {}

  async listarTodos(): Promise<Historico[]> {
    return this.historicoRepository.findAll();
  }

  async listarPorPropriedade(usuarioId: number): Promise<Historico[]> {
    return this.historicoRepository.findByPropriedadeId(usuarioId);
  }

  async buscarPorId(id: number): Promise<Historico | null> {
    return this.historicoRepository.findById(id);
  }

  async buscarComDetalhes(id: number): Promise<HistoricoCompleto | null> {
    return this.historicoRepository.findByIdWithDetails(id);
  }



// Em atualizar:
async atualizar(id: number, dadosAtualizados: Partial<HistoricoProps>): Promise<Historico | null> {
  const historicoExistente = await this.historicoRepository.findById(id);
  if (!historicoExistente) {
    throw new Error("Histórico não encontrado para atualizar");
  }

  // Aqui você garante valores definidos, caso contrário usa valor existente
  const propsAtualizados: HistoricoProps = {
    id: historicoExistente.id ?? 0,
    descricao: dadosAtualizados.descricao ?? historicoExistente.descricao ?? "",
    valorSimulacao: dadosAtualizados.valorSimulacao ?? historicoExistente.valorSimulacao ?? 0,
    propriedadeId: dadosAtualizados.propriedadeId ?? historicoExistente.propriedadeId ?? 0,
    simulacaoId: dadosAtualizados.simulacaoId ?? historicoExistente.simulacaoId ?? 0,
    soloId: dadosAtualizados.soloId ?? historicoExistente.soloId ?? 0,
    precipitacaoId: dadosAtualizados.precipitacaoId ?? historicoExistente.precipitacaoId ?? 0,
    // outras propriedades aqui da mesma forma
  };

  const historicoAtualizado = new Historico(propsAtualizados);
  return this.historicoRepository.update(historicoAtualizado);
}


  async deletar(id: number): Promise<void> {
    await this.historicoRepository.delete(id);
  }

async gerarPDFHistorico(id: number): Promise<Buffer> {
  const historicoCompleto = await this.buscarComDetalhes(id);
  if (!historicoCompleto) throw new Error("Histórico não encontrado.");

  // Garante que os campos necessários existam e são do tipo certo
  if (
    !historicoCompleto ||
    !Array.isArray(historicoCompleto)
  ) {
    throw new Error("Propriedade 'producaoMensal' ausente ou inválida.");
  }

  // Extrai dados no formato esperado por montarDadosGrafico
  const producaoPorMes = this.extrairProducaoPorMes(historicoCompleto as any);

  // Monta labels e valores para o gráfico
  const dadosGrafico = montarDadosGrafico(producaoPorMes);

  // Converte para o formato que ChartService espera
  const dadosParaChart = dadosGrafico.labels.map((label, index) => ({
    mes: index + 1,
    producao: dadosGrafico.values[index],
  }));

  const chartService = new ChartService();
  const bufferGrafico = await chartService.gerarGrafico(dadosParaChart);

  // ✅ Aqui você pode adaptar se precisar extrair apenas o "props"
  // return this.pdfServices.gerarPDFDoHistorico(historicoCompleto.props, bufferGrafico);

  // ou, se o método aceita HistoricoCompleto:
  return this.pdfServices.gerarPDFDoHistorico(historicoCompleto, bufferGrafico);
}

  // Ajuste aqui para converter nome do mês para número
  private mesStringParaNumero(mes: string): number {
    const meses: Record<string, number> = {
      Janeiro: 1,
      Fevereiro: 2,
      Março: 3,
      Abril: 4,
      Maio: 5,
      Junho: 6,
      Julho: 7,
      Agosto: 8,
      Setembro: 9,
      Outubro: 10,
      Novembro: 11,
      Dezembro: 12
    };
    return meses[mes] ?? 0;
  }

  private extrairProducaoPorMes(historico: Historico): { mes: string; valor: number }[] {
  // Use dados reais do histórico aqui
  return [
    { mes: "Janeiro", valor: 120 },
    { mes: "Fevereiro", valor: 110 },
    { mes: "Março", valor: 130 },
    { mes: "Abril", valor: 100 },
    { mes: "Maio", valor: 0 },
    { mes: "Junho", valor: 0 },
    { mes: "Julho", valor: 0 },
    { mes: "Agosto", valor: 0 },
    { mes: "Setembro", valor: 0 },
    { mes: "Outubro", valor: 0 },
    { mes: "Novembro", valor: 0 },
    { mes: "Dezembro", valor: 0 }
  ];
}

  
}

// HistoricoServices.ts
import { ChartService } from './ChartServices';
import { montarDadosGrafico } from './MontarDadosGraficos';
import { PDFServices } from './PdfServices';
import { HistoricoCompleto } from '../../aplication/dto/HistoricoDTO';
import { HistoricoRepositories } from '../../infra/repositories/HistoricoRepositories';
import { Historico } from '../../domain/entities/Historico';
import { PropriedadeRepository } from '../../infra/repositories/PropriedadeRepositories';

export interface UserContext {
  id: string;
  role: string;
  gerenteId?: string | null;
}

export class HistoricoServices {
  private chartService = new ChartService();
  private propriedadeRepository?: PropriedadeRepository;

  constructor(
    private pdfServices: PDFServices,
    private historicoRepository: HistoricoRepositories,
    propriedadeRepository?: PropriedadeRepository
  ) {
    this.propriedadeRepository = propriedadeRepository;
  }

  async listarHistorico(): Promise<Historico[]> {
    return this.historicoRepository.listarHistorico();
  }

  // Listar histórico filtrado pelo usuário logado
  async listarHistoricoPorUsuario(user: UserContext): Promise<Historico[]> {
    // ADMIN vê tudo
    if (user.role === 'ADMIN') {
      return this.historicoRepository.listarHistorico();
    }

    if (!this.propriedadeRepository) {
      return [];
    }

    // Busca propriedades do usuário/gerente
    let propriedades;
    if (user.role === 'GERENTE') {
      propriedades = await this.propriedadeRepository.findByAdminId(user.id);
    } else if (user.role === 'FUNCIONARIO' && user.gerenteId) {
      propriedades = await this.propriedadeRepository.findByAdminId(user.gerenteId);
    } else {
      return [];
    }

    const propriedadeIds = propriedades.map(p => p.id!).filter(id => id);

    if (propriedadeIds.length === 0) {
      return [];
    }

    return this.historicoRepository.findByPropriedadeIds(propriedadeIds);
  }

  // Verificar se usuário tem acesso ao histórico
  async userCanAccessHistorico(historicoId: string, user: UserContext): Promise<boolean> {
    if (user.role === 'ADMIN') return true;

    const historico = await this.historicoRepository.findById(historicoId);
    if (!historico || !historico.propriedadeId) return false;

    if (!this.propriedadeRepository) return false;

    const propriedade = await this.propriedadeRepository.findById(historico.propriedadeId);
    if (!propriedade) return false;

    if (user.role === 'GERENTE') {
      return propriedade.adminId === user.id;
    }

    if (user.role === 'FUNCIONARIO' && user.gerenteId) {
      return propriedade.adminId === user.gerenteId;
    }

    return false;
  }

  async buscarComDetalhes(id: string): Promise<HistoricoCompleto | null> {
    return this.historicoRepository.findByIdWithDetails(id);
  }

  /**
   * Gera PDF do histórico somando produções por mês de todas simulações da propriedade.
   */
  async gerarPDFHistorico(id: string): Promise<Buffer> {
    // Busca histórico detalhado para o relatório
    const historicoCompleto = await this.buscarComDetalhes(id);
    if (!historicoCompleto) throw new Error('Histórico não encontrado.');

    // Busca todos históricos completos da propriedade (para agregar produção mensal)
    const todosHistoricos = await this.historicoRepository.findAllWithDetailsByPropriedadeId(
      historicoCompleto.propriedade.id ?? ""
    );

    if(!todosHistoricos) throw new Error('Vazio')

    // Extrai dados de mês e valor para cada simulação
    const dadosSimulacoes: { mes: string; valor: number }[] = todosHistoricos.map((historico: any) => {
      const dataSimulacao = new Date(historico.simulacao.dataSimulacao);
      const mesNome = this.numeroParaMes(dataSimulacao.getMonth()); // 0 a 11
      return { mes: mesNome, valor: historico.simulacao.resultado };
    });

    // Agrega a soma dos valores por mês
    const producaoAgrupada = this.agregarPorMes(dadosSimulacoes);

    // Monta dados para gráfico (labels + values)
    const dadosGrafico = montarDadosGrafico(producaoAgrupada);

    // Prepara dados para gerar o gráfico
    const dadosParaChart = dadosGrafico.labels.map((label, i) => ({
      mes: label,
      valor: dadosGrafico.values[i],
    }));

    // Gera buffer do gráfico
    const bufferGrafico = await this.chartService.gerarGrafico(dadosParaChart);

    // Gera PDF com histórico e gráfico
    return this.pdfServices.gerarPDFDoHistorico(historicoCompleto, bufferGrafico);
  }

  private agregarPorMes(dados: { mes: string; valor: number }[]): { mes: string; valor: number }[] {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    const somaPorMes: Record<string, number> = {};
    meses.forEach(mes => (somaPorMes[mes] = 0));

    dados.forEach(({ mes, valor }) => {
      if (somaPorMes.hasOwnProperty(mes)) {
        somaPorMes[mes] += valor;
      }
    });

    return meses.map(mes => ({ mes, valor: somaPorMes[mes] }));
  }

  private numeroParaMes(numero: number): string {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];
    return meses[numero] ?? 'Mês inválido';
  }
}

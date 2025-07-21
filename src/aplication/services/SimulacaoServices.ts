// src/application/usecases/SimulacaoUseCase.ts
import { SimulacaoRepositories } from "../../infra/repositories/SimulacaoRepositories";
import { SimulacaoForragemDTO } from "../dto/SimulacaoForragemDTO";
import { HistoricoServices } from "./HistoricoServices";
import { SoloRepositories } from "../../infra/repositories/SoloRepositories";
import { PrecipitacaoRepositories } from "../../infra/repositories/PrecipitacaoRepositories";

export class SimulacaoServices {
  private readonly simulacaoRepository: SimulacaoRepositories;
  private readonly historicoService: HistoricoServices;
  private readonly soloRepository: SoloRepositories;
  private readonly precipitacaoRepository: PrecipitacaoRepositories;

  constructor(
    simulacaoRepository: SimulacaoRepositories,
  historicoService: HistoricoServices,
  soloRepository: SoloRepositories,
  precipitacaoRepository: PrecipitacaoRepositories
  ) {
    this.simulacaoRepository = simulacaoRepository;
    this.historicoService = historicoService;
    this.soloRepository = soloRepository;
    this.precipitacaoRepository = precipitacaoRepository;
  }

  async calcularProducaoPorPropriedade(propriedadeId: number, descricao?: string): Promise<number> {
    // Buscar dados do solo e precipitação no banco
    const solo = await this.soloRepository.findByPropriedadeId(propriedadeId);
    const precipitacao = await this.precipitacaoRepository.findByPropriedadeId(propriedadeId);

    if (!solo) throw new Error("Solo não encontrado para a propriedade");
    if (!precipitacao) throw new Error("Precipitação não encontrada para a propriedade");

    // Monta DTO com os dados do banco
    const dados: SimulacaoForragemDTO = {
      solo: {
        agua0Bar: solo.agua_0_bar,
        agua15Bar: solo.agua_15_bar,
        fatorRocha: solo.fator_rocha,
        profundidade: solo.profundidade,
      },
      precipitacao: {
        mmAno: precipitacao.mmAno,
      },
      propriedadeId,
      descricao,
    };

    // Calcula o valor da produção
    const aguaDisponivel = dados.solo.agua0Bar - dados.solo.agua15Bar;
    const fatorPrecipitacao = dados.precipitacao.mmAno * (1 - dados.solo.fatorRocha);
    const resultado = aguaDisponivel * dados.solo.profundidade * fatorPrecipitacao;
    const valorTotal = Number(resultado.toFixed(2));

    // Salva no banco o resultado da simulação
    await this.simulacaoRepository.salvar(dados, valorTotal);

    // Salva no histórico
    await this.historicoService.create({
      valorTotal,
      descricao: descricao || "Simulação de produção de forragem",
      propriedadeId,
    });

    return valorTotal;
  }

  async listarHistorico() {
    return this.simulacaoRepository.listarHistorico();
  }
}

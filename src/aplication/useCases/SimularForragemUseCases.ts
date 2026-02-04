import {
  SimularForragemInputDTO,
  SimularForragemOutputDTO,
} from "../dto/SimulacaoForragemDTO";

import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { IPropriedadeRepositories } from "../../domain/gateway/IPropriedadeRepositories";
import { Historico } from "../../domain/entities/Historico";

type DadosSimulacao = {
  area?: number;
  eficiencia?: number;
};

export class SimularForragemUseCase {
  constructor(
    private simulacaoRepo: ISimulacaoGateway,
    private historicoRepo: IHistoricoRepositories,
    private estimativaRepo: IEstimativasRepositories,
    private propriedadeDataRepo: IPropriedadeRepositories
  ) {}

  async execute(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    const { propriedadeId, nomeSimulacao, ano, culturaId, soloId, dados } = input;

    const resultadoSimulado = this.calcularForragem(dados ?? {});

    const estimativa = await this.estimativaRepo.findByPropriedade(propriedadeId);
    const estimativas = estimativa[0];

    const simulacaoCriada = await this.simulacaoRepo.create({
      propriedadeId,
      nomeSimulacao,
      ano,
      culturaId,
      soloId,
      eto: input.eto,
      indiceAridez: input.indiceAridez,
      precipitacaoMmAno: input.precipitacaoMmAno,
      numeroChuvas: input.numeroChuvas,
      precipitacaoMmDia: input.precipitacaoMmDia,
      cvDia: input.cvDia,
      precipitacaoMmMes: input.precipitacaoMmMes,
      cvMes: input.cvMes,
      altitude: input.altitude,
      temperaturaMed: input.temperaturaMed,
      umidade: input.umidade,
      resultado: resultadoSimulado,
      dataSimulacao: new Date(),
    });

    // Busca soloId e precipitacaoId da propriedade (para histórico)
    let soloIdHist: string | null = null;
    let precipitacaoIdHist: string | null = null;
    try {
      const propData = await this.propriedadeDataRepo.getSoloEPrecipitacao(propriedadeId);
      soloIdHist = propData.soloId;
      precipitacaoIdHist = propData.precipitacaoId;
    } catch (e) {
      // Ignora se não encontrar
    }

    await this.historicoRepo.create(
      Historico.create({
        valorSimulacao: resultadoSimulado,
        simulacaoId: simulacaoCriada.id!,
        propriedadeId,
        soloId: soloIdHist ?? soloId,
        precipitacaoId: precipitacaoIdHist ?? undefined,
        descricao: `Simulação realizada em ${new Date().toLocaleDateString()} para propriedade ${propriedadeId}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );

    if (estimativas) {
      const valorEstimativa = estimativas.valorTotal ?? 0;
      const diferenca = valorEstimativa - resultadoSimulado;

      const status = diferenca > 0 ? "Necessita mais produção" : "Produção suficiente";

      const mensagem =
        diferenca > 0
          ? `Você precisa de mais ${diferenca.toFixed(2)} kg para atingir a meta.`
          : `Você superou a meta em ${Math.abs(diferenca).toFixed(2)} kg.`;

      return {
        resultado: resultadoSimulado,
        estimativa: valorEstimativa,
        diferenca,
        status,
        mensagem,
      };
    }

    return {
      resultado: resultadoSimulado,
      status: "Nenhuma estimativa registrada para esta propriedade",
      mensagem: "Cadastre uma estimativa para comparações futuras.",
    };
  }

  private calcularForragem(dados: DadosSimulacao): number {
    const area = dados.area ?? 1;
    const eficiencia = dados.eficiencia ?? 0.75;

    return area * eficiencia * 1000;
  }
}

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
    const { propriedadeId, dados } = input;

    const resultadoSimulado = this.calcularForragem(dados);

    const { soloId, precipitacaoId } =
      await this.propriedadeDataRepo.getSoloEPrecipitacao(propriedadeId);

    const estimativa = await this.estimativaRepo.findByPropriedade(input.propriedadeId);
    const estimativas = estimativa[0]

    const dadosCompletos = {
      ...dados,
      soloId,
      precipitacao: precipitacaoId,
      estimativa: estimativas?.valorTotal,
    };

    const simulacaoCriada = await this.simulacaoRepo.create({
      propriedadeId,
      dadosJson: dadosCompletos,
      resultado: resultadoSimulado,
      dataSimulacao: new Date(),
    });

    await this.historicoRepo.create(
      Historico.create({
        valorSimulacao: resultadoSimulado,
        simulacaoId: simulacaoCriada.id!,
        propriedadeId,
        soloId,
        precipitacaoId,
        descricao: `Simulação realizada em ${new Date().toLocaleDateString()} para propriedade ${propriedadeId}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );

    if (estimativas) {
      const valorEstimativa = estimativas.valorTotal;
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

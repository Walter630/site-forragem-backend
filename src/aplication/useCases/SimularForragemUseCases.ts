import {
  SimularForragemInputDTO,
  SimularForragemOutputDTO,
} from "../dto/SimulacaoForragemDTO";

import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { Historico } from "../../domain/entities/Historico";

type DadosSimulacao = {
  area?: number;
  eficiencia?: number;
  // outros campos que possa ter
};

export class SimularForragemUseCase {
  constructor(
    private simulacaoRepo: ISimulacaoGateway,
    private historicoRepo: IHistoricoRepositories,
    private estimativaRepo: IEstimativasRepositories
  ) {}

  async execute(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    const { propriedadeId, dados } = input;

    const resultadoSimulado = this.calcularForragem(dados);

    const simulacaoCriada = await this.simulacaoRepo.create({
      propriedadeId,
      dadosJson: dados,
      resultado: resultadoSimulado,
      dataSimulacao: new Date(),
    });

    await this.historicoRepo.create(
      Historico.create({
        valorSimulacao: resultadoSimulado,
        simulacaoId: simulacaoCriada.id!,
        propriedadeId,
        descricao: `Simulação realizada em ${new Date().toLocaleDateString()} para propriedade ${propriedadeId}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    );

    const estimativa = await this.estimativaRepo.findByPropriedade(propriedadeId); // <- aqui

    if (estimativa) {
  const valorEstimativa = estimativa.valorTotal;
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

    return area * eficiencia * 1000; // resultado em kg
  }
}

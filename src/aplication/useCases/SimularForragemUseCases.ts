import {
  SimularForragemInputDTO,
  SimularForragemOutputDTO
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

    const simulacao = await this.simulacaoRepo.create({
      dados: dados as any, // garantir que seu repositório aceite dadosJson do tipo JSON
      resultado: resultadoSimulado,
      dataSimulacao: new Date(),
      propriedadeId,
    });

    await this.historicoRepo.create(
    Historico.create({
        valorSimulacao: resultadoSimulado,
        simulacaoId: simulacao.id!,
        propriedadeId,
        descricao: `Simulação realizada em ${new Date().toLocaleDateString()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
    );

    // Passar objeto Propriedade, ajuste conforme seu domínio
    const estimativa = await this.estimativaRepo.findByPropriedade({ id: propriedadeId } as any);

    if (estimativa && estimativa.length > 0) {
      const valorEstimativa = estimativa[0].valorTotal;
      const diferenca = valorEstimativa - resultadoSimulado;
      return {
        resultado: resultadoSimulado,
        estimativa: valorEstimativa,
        diferenca,
        status: diferenca > 0 ? "Necessita mais produção" : "Produção suficiente",
      };
    }

    return {
      resultado: resultadoSimulado,
      status: "Nenhuma estimativa registrada para esta propriedade",
    };
  }

  private calcularForragem(dados: DadosSimulacao): number {
    const area = dados.area ?? 1;
    const eficiencia = dados.eficiencia ?? 0.75;
    return area * eficiencia * 1000;
  }
}

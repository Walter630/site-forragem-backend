// src/application/usecases/SimulacaoUseCase.ts
import { SimulacaoRepositories } from "../../infra/repositories/SimulacaoRepositories";
import { SimulacaoForragemDTO } from "../dto/SimulacaoForragemDTO";

export class SimulacaoServices {
    private readonly simulacaoRepository: SimulacaoRepositories; // Replace with actual repository type
    constructor(simulacaoRepository: SimulacaoRepositories) {
        this.simulacaoRepository = simulacaoRepository;
    }
  async calcularProducao(dados: SimulacaoForragemDTO): Promise<number> {
    const { solo, precipitacao } = dados;

    const aguaDisponivel = solo.agua0bar - solo.agua15bar;
    const fatorPrecipitacao = precipitacao.mmAno * (1 - solo.fatorRocha);
    const resultado = aguaDisponivel * solo.profundidade * fatorPrecipitacao;

    return Number(resultado.toFixed(2));
  }
}

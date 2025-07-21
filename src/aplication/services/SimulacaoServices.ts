import { SimularForragemUseCase } from "../useCases/SimularForragemUseCases";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../dto/SimulacaoForragemDTO";

export class SimulacaoServices {
  private simularForragemUseCase: SimularForragemUseCase;

  constructor(
    simulacaoRepo: ISimulacaoGateway,
    historicoRepo: IHistoricoRepositories,
    estimativaRepo: IEstimativasRepositories
  ) {
    this.simularForragemUseCase = new SimularForragemUseCase(
      simulacaoRepo,
      historicoRepo,
      estimativaRepo
    );
  }

  async simularForragem(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    return this.simularForragemUseCase.execute(input);
  }


  async listarHistorico() {
    return await this.simularForragemUseCase["historicoRepo"].listarHistorico(); // ou use outro serviço, se aplicável
  }
}

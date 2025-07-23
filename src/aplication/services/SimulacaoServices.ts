import { SimularForragemUseCase } from "../useCases/SimularForragemUseCases";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../dto/SimulacaoForragemDTO";
import { IPropriedadeRepositories } from "../../domain/gateway/IPropriedadeRepositories";

export class SimulacaoServices {
  private simularForragemUseCase: SimularForragemUseCase;

  constructor(
    simulacaoRepo: ISimulacaoGateway,
    historicoRepo: IHistoricoRepositories,
    estimativaRepo: IEstimativasRepositories,
    propriedadeRepo: IPropriedadeRepositories
  ) {
    this.simularForragemUseCase = new SimularForragemUseCase(
      simulacaoRepo,
      historicoRepo,
      estimativaRepo,
      propriedadeRepo
    );
  }

  async simularForragem(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    return this.simularForragemUseCase.execute(input);
  }


  async listarHistorico() {
    return await this.simularForragemUseCase["historicoRepo"].listarHistorico(); // ou use outro serviço, se aplicável
  }

  
  
}

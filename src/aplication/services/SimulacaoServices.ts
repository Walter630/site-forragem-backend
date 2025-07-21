import { SimularForragemUseCase } from './../useCases/SimularForragemUseCases';
// src/aplication/services/SimulacaoServices.ts
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../dto/SimulacaoForragemDTO";

export class SimulacaoServices {
  constructor(private readonly simularForragemUseCase: SimularForragemUseCase) {}

  async simularForragem(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    return await this.simularForragemUseCase.execute(input);
  }

  async listarHistorico() {
    return await this.simularForragemUseCase["historicoRepo"].listarHistorico(); // ou use outro serviço, se aplicável
  }
}

import { SimularForragemUseCase } from "../useCases/SimularForragemUseCases";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../dto/SimulacaoForragemDTO";
import { SimulacaoRepositories } from "../../infra/repositories/SimulacaoRepositories";
import { PropriedadeRepository } from "../../infra/repositories/PropriedadeRepositories";

export interface UserContext {
  id: string;
  role: string;
  gerenteId?: string | null;
}

export class SimulacaoServices {
  private simularForragemUseCase: SimularForragemUseCase;
  private simulacaoRepo: SimulacaoRepositories;
  private propriedadeRepo: PropriedadeRepository;

  constructor(
    simulacaoRepo: ISimulacaoGateway,
    historicoRepo: IHistoricoRepositories,
    estimativaRepo: IEstimativasRepositories,
    propriedadeRepo: any
  ) {
    this.simularForragemUseCase = new SimularForragemUseCase(
      simulacaoRepo,
      historicoRepo,
      estimativaRepo,
      propriedadeRepo
    );
    this.simulacaoRepo = simulacaoRepo as SimulacaoRepositories;
    this.propriedadeRepo = propriedadeRepo as PropriedadeRepository;
  }

  async simularForragem(input: SimularForragemInputDTO): Promise<SimularForragemOutputDTO> {
    return this.simularForragemUseCase.execute(input);
  }


  async listarHistorico() {
    return await this.simularForragemUseCase["historicoRepo"].listarHistorico(); // ou use outro serviço, se aplicável
  }

  async listarSimulacoes() {
    return await this.simularForragemUseCase["simulacaoRepo"].listarHistorico();
  }

  // Listar simulações filtradas por usuário
  async listarSimulacoesPorUsuario(user: UserContext) {
    // ADMIN vê todas
    if (user.role === 'ADMIN') {
      return await this.simulacaoRepo.listarHistorico();
    }

    // Busca propriedades do usuário/gerente
    let propriedades;
    if (user.role === 'GERENTE') {
      propriedades = await this.propriedadeRepo.findByAdminId(user.id);
    } else if (user.role === 'FUNCIONARIO' && user.gerenteId) {
      propriedades = await this.propriedadeRepo.findByAdminId(user.gerenteId);
    } else {
      return [];
    }

    const propriedadeIds = propriedades.map(p => p.id!).filter(id => id);

    if (propriedadeIds.length === 0) {
      return [];
    }

    return await this.simulacaoRepo.listarPorPropriedadeIds(propriedadeIds);
  }

  async findById(id: string) {
    return await this.simularForragemUseCase["simulacaoRepo"].buscarPorId(id);
  }

  // Verificar se usuário tem acesso à simulação
  async userCanAccessSimulacao(simulacaoId: string, user: UserContext): Promise<boolean> {
    // ADMIN acessa tudo
    if (user.role === 'ADMIN') return true;

    const adminId = await this.simulacaoRepo.getAdminIdBySimulacao(simulacaoId);
    if (!adminId) return false;

    // GERENTE acessa apenas simulações das suas propriedades
    if (user.role === 'GERENTE') {
      return adminId === user.id;
    }

    // FUNCIONARIO acessa simulações das propriedades do seu gerente
    if (user.role === 'FUNCIONARIO' && user.gerenteId) {
      return adminId === user.gerenteId;
    }

    return false;
  }

  // Deletar simulação
  async delete(id: string, user: UserContext): Promise<void> {
    // Verifica se a simulação existe
    const simulacao = await this.findById(id);
    if (!simulacao) {
      throw new Error("Simulação não encontrada");
    }

    // Verifica permissão
    const canAccess = await this.userCanAccessSimulacao(id, user);
    if (!canAccess) {
      throw new Error("Você não tem permissão para deletar esta simulação");
    }

    await this.simulacaoRepo.delete(id);
  }
}

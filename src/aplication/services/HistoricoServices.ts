import { HistoricoRepositories } from "../../infra/repositories/HistoricoRepositories";

export class HistoricoServices {
    constructor(private simulacaoRepository: HistoricoRepositories) {}

    async listarHistorico(): Promise<any[]> {
        try {
            return await this.simulacaoRepository.findAll();
        } catch (error) {
            console.error("Erro ao listar histórico:", error);
            throw new Error("Erro ao listar histórico: " );
        }
    }
    async findById(id: number): Promise<any | null> {
        try {
            return await this.simulacaoRepository.findById(id);
        } catch (error) {
            console.error("Erro ao buscar histórico por ID:", error);
            throw new Error("Erro ao buscar histórico por ID: " );
        }
    }
    async deleteById(id: number): Promise<void> {
        try {
            await this.simulacaoRepository.delete(id);
        } catch (error) {
            console.error("Erro ao deletar histórico por ID:", error);
            throw new Error("Erro ao deletar histórico por ID: ");
        }
    }
    async create(dados: any): Promise<any> {
        try {
            return await this.simulacaoRepository.create(dados);
        } catch (error) {
            console.error("Erro ao criar histórico:", error);
            throw new Error("Erro ao criar histórico: ");
        }
    }
    async update(id: number, dados: any): Promise<any | null> {
        try {
            return await this.simulacaoRepository.update({ ...dados, id } as any);
        } catch (error) {
            console.error("Erro ao atualizar histórico:", error);
            throw new Error("Erro ao atualizar histórico: ");
        }
    }
    async findByPropriedadeId(propriedadeId: number): Promise<any[]> {
        try {
            return await this.simulacaoRepository.findByPropriedadeId(propriedadeId);
        } catch (error) {
            console.error("Erro ao buscar histórico por ID de propriedade:", error);
            throw new Error("Erro ao buscar histórico por ID de propriedade: ");
        }
    }
    
}
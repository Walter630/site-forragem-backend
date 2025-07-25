import { Historico } from "../../domain/entities/Historico";
import { HistoricoRepositories } from "../../infra/repositories/HistoricoRepositories";
import { SimulacaoRepositories } from "../../infra/repositories/SimulacaoRepositories";
import { HistoricoCompleto } from "../dto/HistoricoDTO";
import { PDFServices } from "./PdfServices"; // importe seu serviço de PDF

export class HistoricoServices {

    constructor(private PdfServices: PDFServices, private historicoRepository: HistoricoRepositories) {}

    async listarHistorico(): Promise<any[]> {
        try {
            return await this.historicoRepository.findAll();
        } catch (error) {
            console.error("Erro ao listar histórico:", error);
            throw new Error("Erro ao listar histórico: " );
        }
    }
    async findById(id: number): Promise<any | null> {
        try {
            return await this.historicoRepository.findById(id);
        } catch (error) {
            console.error("Erro ao buscar histórico por ID:", error);
            throw new Error("Erro ao buscar histórico por ID: " );
        }
    }
    async deleteById(id: number): Promise<void> {
        try {
            await this.historicoRepository.delete(id);
        } catch (error) {
            console.error("Erro ao deletar histórico por ID:", error);
            throw new Error("Erro ao deletar histórico por ID: ");
        }
    }
    async create(dados: any): Promise<any> {
        try {
            return await this.historicoRepository.create(dados);
        } catch (error) {
            console.error("Erro ao criar histórico:", error);
            throw new Error("Erro ao criar histórico: ");
        }
    }
     async gerarPDFHistorico(id: number): Promise<Buffer> {
    const historicoCompleto = await this.historicoRepository.findByIdWithDetails(id);
    if (!historicoCompleto) {
      throw new Error("Histórico não encontrado.");
    }
    return this.PdfServices.gerarPDFDoHistorico(historicoCompleto);
  }
    async gerarRelatorioHistorico(id: number): Promise<HistoricoCompleto> {
  const historico = await this.historicoRepository.findByIdWithDetails(id);
  if (!historico) {
    throw new Error("Histórico não encontrado.");
  }

  return historico;
}

    async update(id: number, dados: any): Promise<any | null> {
        try {
            return await this.historicoRepository.update({ ...dados, id });

        } catch (error) {
            console.error("Erro ao atualizar histórico:", error);
            throw new Error("Erro ao atualizar histórico: ");
        }
    }
    async findByPropriedadeId(propriedadeId: number): Promise<any[]> {
        try {
            return await this.historicoRepository.findByPropriedadeId(propriedadeId);
        } catch (error) {
            console.error("Erro ao buscar histórico por ID de propriedade:", error);
            throw new Error("Erro ao buscar histórico por ID de propriedade: ");
        }
    }
    
    async findAll(): Promise<Historico[]> {
        try {
            return await this.historicoRepository.findAll();
        } catch (error) {
            console.error("Erro ao buscar histórico:", error);
            throw new Error("Erro ao buscar histórico: ");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.historicoRepository.delete(id);
        } catch (error) {
            console.error("Erro ao deletar histórico por ID:", error);
            throw new Error("Erro ao deletar histórico por ID: ");
        }
    }
}
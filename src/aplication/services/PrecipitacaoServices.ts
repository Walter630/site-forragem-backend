import { Precipitacao } from "../../domain/entities/Precipitacao";
import { PrecipitacaoRepositories } from "../../infra/repositories/PrecipitacaoRepositories";

export class PrecipitacaoServices {
    constructor(private readonly precipitacaoRepository: PrecipitacaoRepositories) {}
    
    async create (dados: any): Promise<any> {
        if (!dados.mmAno || !dados.chuvas || !dados.mmDia || !dados.cvDia || !dados.mmMes || !dados.cvMes) {
            throw new Error('Todos os campos são obrigatórios');
        }
        if (dados.mmAno < 0 || dados.mmDia < 0 || dados.cvDia < 0 || dados.mmMes < 0 || dados.cvMes < 0) {
            throw new Error('Valores de precipitação não podem ser negativos');
        }
        if (dados.createdAt && !(dados.createdAt instanceof Date)) {
            throw new Error('createdAt deve ser uma instância de Date');
        }
        return this.precipitacaoRepository.createPrecipitacao(dados);
    }
    async findAll(): Promise<any[]> {
        return this.precipitacaoRepository.findAll();
    }
    async findById(id: number): Promise<any | null> {
        return this.precipitacaoRepository.findById(id);
    }
    async update(id: number, dados: Precipitacao): Promise<any | null> {
        return this.precipitacaoRepository.updatePrecipitacao({ ...dados} as Precipitacao);
    }
    async delete(id: number): Promise<void> {
        return this.precipitacaoRepository.deletePrecipitacao(id);
    }
}
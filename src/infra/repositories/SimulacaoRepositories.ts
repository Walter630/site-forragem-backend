// src/infra/repositories/SimulacaoRepository.ts
import { PrismaClient } from "../../generated/prisma/client";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { Simulacao } from "../../domain/entities/Simulacao";
import { SimulacaoForragemDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoRepositories implements ISimulacaoGateway {
    constructor(private readonly prisma: PrismaClient) {
        this.prisma = prisma;
    }
    async salvar(dados: any, resultado: number): Promise<Simulacao> {
        await this.prisma.simulacao.create({
            data: {
                // Substitua 'id' pelo campo correto da sua entidade Propriedade
                propriedade: { connect: { id: dados.propriedadeId } }, // Certifique-se de que 'dados.propriedadeId' existe
                dadosJson: dados,
                resultado,
                dataSimulacao: new Date(),
            },
        });
        const simulacao = await this.prisma.simulacao.findFirst({
            where: { resultado },
            orderBy: { dataSimulacao: "desc" },
        });
        if (!simulacao) {
            throw new Error("Simulação não encontrada após salvar.");
        }
        if (!simulacao.dadosJson) {
            throw new Error("dadosJson está nulo na simulação recuperada.");
        }
        return Simulacao.with({
            id: simulacao.id,
            propriedadeId: simulacao.propriedadeId,
            dadosJson: simulacao.dadosJson as unknown as SimulacaoForragemDTO,
            resultado: simulacao.resultado,
            dataSimulacao: simulacao.dataSimulacao,
        });
    }

    async listarHistorico(): Promise<any[]> {
        return await this.prisma.simulacao.findMany({
            orderBy: { dataSimulacao: "desc" },
        });
    }


}

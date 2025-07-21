import { PrismaClient } from "../../generated/prisma";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { Simulacao } from "../../domain/entities/Simulacao";
import { SimulacaoForragemDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoRepositories implements ISimulacaoGateway {
  constructor(private readonly prisma: PrismaClient) {}

  async salvar(dados: SimulacaoForragemDTO, resultado: number): Promise<Simulacao> {
    const simulacao = await this.prisma.simulacao.create({
      data: {
        propriedade: { connect: { id: dados.propriedadeId } },
        dadosJson: {
          propriedadeId: dados.propriedadeId,
          descricao: dados.descricao ?? null
        },
        resultado,
        dataSimulacao: new Date(),
      },
    });

    return Simulacao.with({
      id: simulacao.id,
      propriedadeId: simulacao.propriedadeId,
      dadosJson: simulacao.dadosJson as unknown as SimulacaoForragemDTO,
      resultado: simulacao.resultado,
      dataSimulacao: simulacao.dataSimulacao,
    });
  }

  async listarHistorico(): Promise<Simulacao[]> {
    const sims = await this.prisma.simulacao.findMany({
      orderBy: { dataSimulacao: "desc" },
    });

    return sims.map(s =>
      Simulacao.with({
        id: s.id,
        propriedadeId: s.propriedadeId,
        dadosJson: s.dadosJson as unknown as SimulacaoForragemDTO,
        resultado: s.resultado,
        dataSimulacao: s.dataSimulacao,
      })
    );
  }
}

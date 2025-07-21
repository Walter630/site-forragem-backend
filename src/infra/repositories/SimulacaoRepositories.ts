import { PrismaClient } from "../../generated/prisma";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { Simulacao } from "../../domain/entities/Simulacao";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoRepositories implements ISimulacaoGateway {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: {
  propriedadeId: number;
  dadosJson: SimularForragemInputDTO;
  resultado: number;
  dataSimulacao: Date;
}): Promise<Simulacao> {
  const simulacao = await this.prisma.simulacao.create({
    data: {
      propriedadeId: data.propriedadeId,
      dadosJson: data.dadosJson as any, // <- ou use JSON.parse(JSON.stringify(data.dadosJson))
      resultado: data.resultado,
      dataSimulacao: data.dataSimulacao,
    },
  });

  return Simulacao.with({
    id: simulacao.id,
    propriedadeId: simulacao.propriedadeId,
    dados: simulacao.dadosJson as any,
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
        dados: s.dadosJson as any,
        resultado: s.resultado,
        dataSimulacao: s.dataSimulacao,
      })
    );
  }
}

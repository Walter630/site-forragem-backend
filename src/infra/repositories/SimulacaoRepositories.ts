import { PrismaClient } from "../../generated/prisma";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { Simulacao } from "../../domain/entities/Simulacao";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoRepositories implements ISimulacaoGateway {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: {
    propriedadeId: number;
    dadosJson: Record<string, any>; // ou `any` se você preferir
    resultado: number;
    dataSimulacao: Date;
  }): Promise<Simulacao> {
    const simulacao = await this.prisma.simulacao.create({
      data: {
        propriedadeId: data.propriedadeId,
        dadosJson: data.dadosJson, // <- campo reconhecido no Prisma
        resultado: data.resultado,
        dataSimulacao: data.dataSimulacao,
      },
    });
   
    if (!simulacao.dadosJson) {
      throw new Error("Dados da simulação estão ausentes.");
    }

      return Simulacao.with({
      id: simulacao.id,
      propriedadeId: simulacao.propriedadeId,
      dadosJson: simulacao.dadosJson as unknown as SimularForragemInputDTO,
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
        dadosJson: s.dadosJson as any,
        resultado: s.resultado,
        dataSimulacao: s.dataSimulacao,
      })
    );
  }
  async buscarPorId(id: number) {
      return this.prisma.simulacao.findUnique({
        where: { id },
        include: {
          propriedade: true, // se necessário trazer os dados da fazenda
          // outras relações, se existirem
        }
      }).then(simulacao => {
        if (!simulacao) {
          return null;
        }
        return Simulacao.with({
          id: simulacao.id,
          propriedadeId: simulacao.propriedadeId,
          dadosJson: simulacao.dadosJson as any,
          resultado: simulacao.resultado,
          dataSimulacao: simulacao.dataSimulacao,
        });
      });
    }
}

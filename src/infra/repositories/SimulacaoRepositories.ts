import { PrismaClient } from "../../generated/prisma";
import { ISimulacaoGateway } from "../../domain/gateway/ISimulacaoGateway";
import { Simulacao } from "../../domain/entities/Simulacao";
import { SimularForragemInputDTO, SimularForragemOutputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class SimulacaoRepositories implements ISimulacaoGateway {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: {
    propriedadeId: string;
    nomeSimulacao: string;
    ano: number;
    culturaId: string;
    soloId: string;
    eto?: number;
    indiceAridez?: number;
    precipitacaoMmAno?: number;
    numeroChuvas?: number;
    precipitacaoMmDia?: number;
    cvDia?: number;
    precipitacaoMmMes?: number;
    cvMes?: number;
    altitude?: number;
    temperaturaMed?: number;
    umidade?: number;
    resultado?: number;
    dataSimulacao: Date;
  }): Promise<Simulacao> {
    try {
      const simulacao = await this.prisma.simulacao.create({
        data: {
          propriedadeId: data.propriedadeId,
          nomeSimulacao: data.nomeSimulacao,
          ano: data.ano,
          culturaId: data.culturaId,
          soloId: data.soloId,
          eto: data.eto,
          indiceAridez: data.indiceAridez,
          precipitacaoMmAno: data.precipitacaoMmAno,
          numeroChuvas: data.numeroChuvas,
          precipitacaoMmDia: data.precipitacaoMmDia,
          cvDia: data.cvDia,
          precipitacaoMmMes: data.precipitacaoMmMes,
          cvMes: data.cvMes,
          altitude: data.altitude,
          temperaturaMed: data.temperaturaMed,
          umidade: data.umidade,
          resultado: data.resultado,
          dataSimulacao: data.dataSimulacao,
        },
      });

      return Simulacao.with({
        id: simulacao.id,
        nomeSimulacao: simulacao.nomeSimulacao,
        ano: simulacao.ano,
        propriedadeId: simulacao.propriedadeId,
        culturaId: simulacao.culturaId,
        soloId: simulacao.soloId,
        eto: simulacao.eto ?? undefined,
        indiceAridez: simulacao.indiceAridez ?? undefined,
        precipitacaoMmAno: simulacao.precipitacaoMmAno ?? undefined,
        numeroChuvas: simulacao.numeroChuvas ?? undefined,
        precipitacaoMmDia: simulacao.precipitacaoMmDia ?? undefined,
        cvDia: simulacao.cvDia ?? undefined,
        precipitacaoMmMes: simulacao.precipitacaoMmMes ?? undefined,
        cvMes: simulacao.cvMes ?? undefined,
        altitude: simulacao.altitude ?? undefined,
        temperaturaMed: simulacao.temperaturaMed ?? undefined,
        umidade: simulacao.umidade ?? undefined,
        resultado: simulacao.resultado ?? undefined,
        dataSimulacao: simulacao.dataSimulacao,
        createdAt: simulacao.createdAt,
        updatedAt: simulacao.updatedAt ?? undefined,
      });
    } catch (error) {
      throw new Error("Error creating simulacao");
    }
  }

  async listarHistorico(): Promise<Simulacao[]> {
    try {
      const sims = await this.prisma.simulacao.findMany({
        orderBy: { dataSimulacao: "desc" },
      });

      return sims.map(s =>
        Simulacao.with({
          id: s.id,
          nomeSimulacao: s.nomeSimulacao,
          ano: s.ano,
          propriedadeId: s.propriedadeId,
          culturaId: s.culturaId,
          soloId: s.soloId,
          eto: s.eto ?? undefined,
          indiceAridez: s.indiceAridez ?? undefined,
          precipitacaoMmAno: s.precipitacaoMmAno ?? undefined,
          numeroChuvas: s.numeroChuvas ?? undefined,
          precipitacaoMmDia: s.precipitacaoMmDia ?? undefined,
          cvDia: s.cvDia ?? undefined,
          precipitacaoMmMes: s.precipitacaoMmMes ?? undefined,
          cvMes: s.cvMes ?? undefined,
          altitude: s.altitude ?? undefined,
          temperaturaMed: s.temperaturaMed ?? undefined,
          umidade: s.umidade ?? undefined,
          resultado: s.resultado ?? undefined,
          dataSimulacao: s.dataSimulacao,
          createdAt: s.createdAt,
          updatedAt: s.updatedAt ?? undefined,
        })
      );
    } catch (error) {
      throw new Error("Error listing simulacoes");
    }
  }

  async buscarPorId(id: string): Promise<Simulacao | null> {
    try {
      const simulacao = await this.prisma.simulacao.findUnique({
        where: { id },
      });

      if (!simulacao) return null;

      return Simulacao.with({
        id: simulacao.id,
        nomeSimulacao: simulacao.nomeSimulacao,
        ano: simulacao.ano,
        propriedadeId: simulacao.propriedadeId,
        culturaId: simulacao.culturaId,
        soloId: simulacao.soloId,
        eto: simulacao.eto ?? undefined,
        indiceAridez: simulacao.indiceAridez ?? undefined,
        precipitacaoMmAno: simulacao.precipitacaoMmAno ?? undefined,
        numeroChuvas: simulacao.numeroChuvas ?? undefined,
        precipitacaoMmDia: simulacao.precipitacaoMmDia ?? undefined,
        cvDia: simulacao.cvDia ?? undefined,
        precipitacaoMmMes: simulacao.precipitacaoMmMes ?? undefined,
        cvMes: simulacao.cvMes ?? undefined,
        altitude: simulacao.altitude ?? undefined,
        temperaturaMed: simulacao.temperaturaMed ?? undefined,
        umidade: simulacao.umidade ?? undefined,
        resultado: simulacao.resultado ?? undefined,
        dataSimulacao: simulacao.dataSimulacao,
        createdAt: simulacao.createdAt,
        updatedAt: simulacao.updatedAt ?? undefined,
      });
    } catch (error) {
      throw new Error("Error fetching simulacao by id");
    }
  }
}

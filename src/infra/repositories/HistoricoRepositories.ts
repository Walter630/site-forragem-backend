import { Historico } from "../../domain/entities/Historico";
import { PrismaClient } from "@prisma/client";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";
import { Simulacao } from "../../domain/entities/Simulacao";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { Solo } from "../../domain/entities/Solo";
import { Estimativas } from "../../domain/entities/Estimativas";
import { HistoricoCompleto } from "../../aplication/dto/HistoricoDTO";

export class HistoricoRepositories implements IHistoricoRepositories {
  constructor(private prisma: PrismaClient) {}

  private mapToDomain(data: any): Historico {
    return Historico.with({
      id: data.id,
      descricao: data.observacao ?? undefined,
      valorSimulacao: data.valorSimulacao ?? undefined,
      propriedadeId: data.propriedadeId ?? undefined,
      simulacaoId: data.simulacaoId,
      soloId: data.soloId ?? undefined,
      precipitacaoId: data.precipitacaoId ?? undefined,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: null,
    });
  }

  async findAll(): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      orderBy: { createdAt: "desc" },
    });
    return historicos.map(this.mapToDomain);
  }

  async findById(id: string): Promise<Historico | null> {
    const historico = await this.prisma.historico.findUnique({ where: { id } });
    return historico ? this.mapToDomain(historico) : null;
  }

  async findByPropriedadeId(propriedadeId: string): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { propriedadeId },
      orderBy: { createdAt: "desc" },
    });
    return historicos.map(this.mapToDomain);
  }

  async create(
    data: Omit<Historico, "id" | "createdAt" | "updatedAt" | "deletedAt">
  ): Promise<Historico> {
    const created = await this.prisma.historico.create({
      data: {
        propriedadeId: data.propriedadeId,
        simulacaoId: data.simulacaoId,
        soloId: data.soloId,
        precipitacaoId: data.precipitacaoId,
        observacao: data.descricao,
      },
    });
    return this.mapToDomain(created);
  }

  async update(historico: Historico): Promise<Historico> {
    const updated = await this.prisma.historico.update({
      where: { id: historico.id! },
      data: {
        observacao: historico.descricao,
      },
    });
    return this.mapToDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.historico.delete({ where: { id } });
  }

  async listarHistorico(): Promise<Historico[]> {
    return await this.findAll();
  }

  async buscarEstimativasMensais(propriedadeId: string): Promise<any[]> {
    return this.prisma.simulacao.findMany({
      where: { propriedadeId },
    });
  }

  async findByIdWithDetails(id: string): Promise<HistoricoCompleto | null> {
    const historico = await this.prisma.historico.findUnique({
      where: { id },
    });

    if (!historico) return null;

    const estimativas = await this.prisma.estimativas.findFirst({
      where: {
        propriedadeId: historico.propriedadeId,
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      historico: this.mapToDomain(historico),
      simulacao: Simulacao.with({
        id: historico.simulacaoId,
        nomeSimulacao: "N/A",
        ano: new Date().getFullYear(),
        propriedadeId: historico.propriedadeId || "",
        culturaId: "",
        soloId: historico.soloId || "",
        dataSimulacao: new Date(),
      }),
      solo: Solo.with({
        id: historico.soloId || "",
        nomeClasse: "N/A",
      }),
      precipitacao: Precipitacao.with({
        id: historico.precipitacaoId || "",
        propriedadeId: historico.propriedadeId || "",
      }),
      estimativas: estimativas ? Estimativas.with({
        id: estimativas.id,
        valorTotal: estimativas.valorTotal ?? undefined,
        propriedadeId: estimativas.propriedadeId || "",
        simulacaoId: estimativas.simulacaoId,
        descricao: estimativas.descricao ?? undefined,
        createdAt: estimativas.createdAt,
        updatedAt: estimativas.updatedAt,
      }) : Estimativas.with({
        propriedadeId: historico.propriedadeId || "",
        simulacaoId: historico.simulacaoId,
      }),
      propriedade: Propriedade.with({
        id: historico.propriedadeId || "",
        nomePropriedade: "N/A",
        nomeResponsavel: "N/A",
        latitude: 0,
        longitude: 0,
        adminId: undefined,
      }),
      producaoPorMes: [],
    };
  }

  /**
   * NOVO MÉTODO para buscar todos históricos completos de uma propriedade (com detalhes).
   */
  async findAllWithDetailsByPropriedadeId(propriedadeId: string): Promise<HistoricoCompleto[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { propriedadeId },
      orderBy: { createdAt: "desc" },
    });

    return historicos.map(h => ({
      historico: this.mapToDomain(h),
      simulacao: Simulacao.with({
        id: h.simulacaoId,
        nomeSimulacao: "N/A",
        ano: new Date().getFullYear(),
        propriedadeId: h.propriedadeId || "",
        culturaId: "",
        soloId: h.soloId || "",
        dataSimulacao: new Date(),
      }),
      solo: Solo.with({
        id: h.soloId || "",
        nomeClasse: "N/A",
      }),
      precipitacao: Precipitacao.with({
        id: h.precipitacaoId || "",
        propriedadeId: h.propriedadeId || "",
      }),
      estimativas: Estimativas.with({
        propriedadeId: h.propriedadeId || "",
        simulacaoId: h.simulacaoId,
      }),
      propriedade: Propriedade.with({
        id: h.propriedadeId || "",
        nomePropriedade: "N/A",
        nomeResponsavel: "N/A",
        latitude: 0,
        longitude: 0,
        adminId: undefined,
      }),
      producaoPorMes: [],
    }));
  }
}

import { Historico } from "../../domain/entities/Historico";
import { PrismaClient } from "../../generated/prisma";
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
      descricao: data.descricao ?? undefined,
      valorSimulacao: data.valorSimulacao,
      propriedadeId: data.propriedadeId,
      simulacaoId: data.simulacaoId,
      precipitacaoId: data.precipitacaoId,
      soloId: data.soloId,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      deletedAt: data.deletedAt ?? null,
    });
  }

  async findAll(): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      orderBy: { createdAt: "desc" },
    });
    return historicos.map(this.mapToDomain);
  }

  async findById(id: number): Promise<Historico | null> {
    const historico = await this.prisma.historico.findUnique({ where: { id } });
    return historico ? this.mapToDomain(historico) : null;
  }

  async findByPropriedadeId(propriedadeId: number): Promise<Historico[]> {
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
        descricao: data.descricao,
        valorSimulacao: data.valorSimulacao,
        propriedadeId: data.propriedadeId,
        simulacaoId: data.simulacaoId,
        precipitacaoId: data.precipitacaoId,
        soloId: data.soloId,
      },
    });
    return this.mapToDomain(created);
  }

  async update(historico: Historico): Promise<Historico> {
    const updated = await this.prisma.historico.update({
      where: { id: historico.id! },
      data: {
        descricao: historico.descricao,
        valorSimulacao: historico.valorSimulacao,
        propriedadeId: historico.propriedadeId,
        simulacaoId: historico.simulacaoId,
        updatedAt: new Date(),
      },
    });
    return this.mapToDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.historico.delete({ where: { id } });
  }

  async listarHistorico(): Promise<Historico[]> {
    return await this.findAll();
  }

  async buscarEstimativasMensais(propriedadeId: number): Promise<any[]> {
    return this.prisma.simulacao.findMany({
      where: { propriedadeId },
      include: {
        estimativas: true,
      },
    });
  }

  async findByIdWithDetails(id: number): Promise<HistoricoCompleto | null> {
    const historico = await this.prisma.historico.findUnique({
      where: { id },
      include: {
        simulacao: true,
        solo: true,
        precipitacao: true,
        propriedade: true,
      },
    });

    if (!historico) return null;

    const estimativas = await this.prisma.estimativas.findFirst({
      where: {
        propriedadeId: historico.propriedadeId,
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      historico: Historico.with({
        ...historico,
        descricao: historico.descricao ?? undefined,
        createdAt: historico.createdAt ?? undefined,
        updatedAt: historico.updatedAt ?? undefined,
        
      }),
      simulacao: Simulacao.with({
        ...historico.simulacao,
        dadosJson:
          typeof historico.simulacao.dadosJson === "object" &&
          historico.simulacao.dadosJson !== null
            ? historico.simulacao.dadosJson
            : {},
      }),
      solo: Solo.with({
        ...historico.solo,
        updatedAt: historico.solo.updatedAt ?? undefined,
        deletedAt: historico.solo.deletedAt ?? undefined,
      }),
      precipitacao: Precipitacao.with({
        ...historico.precipitacao,
        updatedAt: historico.precipitacao.updatedAt ?? undefined,
        deletedAt: historico.precipitacao.deletedAt ?? undefined,
      }),
      estimativas: Estimativas.with(estimativas!),
      propriedade: Propriedade.with({
        ...historico.propriedade,
        updatedAt: historico.propriedade.updatedAt ?? undefined,
        deletedAt: historico.propriedade.deletedAt ?? undefined,
        adminId: historico.propriedade.adminId ?? undefined,
      }),
      producaoPorMes: [], // <<< adicione esta linha
    };
  }

  /**
   * NOVO MÉTODO para buscar todos históricos completos de uma propriedade (com detalhes).
   */
  async findAllWithDetailsByPropriedadeId(propriedadeId: number): Promise<HistoricoCompleto[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { propriedadeId },
      include: {
        simulacao: true,
        solo: true,
        precipitacao: true,
        propriedade: true,
      },
      orderBy: { createdAt: "desc" },
    });

    // Para cada histórico busca a estimativa mais recente da propriedade
    const historicosCompleto: HistoricoCompleto[] = [];

    for (const historico of historicos) {
      const estimativas = await this.prisma.estimativas.findFirst({
        where: {
          propriedadeId: historico.propriedadeId,
        },
        orderBy: { createdAt: "desc" },
      });

      historicosCompleto.push({
        historico: Historico.with({
          ...historico,
          descricao: historico.descricao ?? undefined,
          createdAt: historico.createdAt ?? undefined,
          updatedAt: historico.updatedAt ?? undefined,
        }),
        simulacao: Simulacao.with({
          ...historico.simulacao,
          dadosJson:
            typeof historico.simulacao.dadosJson === "object" &&
            historico.simulacao.dadosJson !== null
              ? historico.simulacao.dadosJson
              : {},
        }),
        solo: Solo.with({
          ...historico.solo,
          updatedAt: historico.solo.updatedAt ?? undefined,
          deletedAt: historico.solo.deletedAt ?? undefined,
        }),
        precipitacao: Precipitacao.with({
          ...historico.precipitacao,
          updatedAt: historico.precipitacao.updatedAt ?? undefined,
          deletedAt: historico.precipitacao.deletedAt ?? undefined,
        }),
        estimativas: Estimativas.with(estimativas!),
        propriedade: Propriedade.with({
          ...historico.propriedade,
          updatedAt: historico.propriedade.updatedAt ?? undefined,
          deletedAt: historico.propriedade.deletedAt ?? undefined,
          adminId: historico.propriedade.adminId ?? undefined,
        }),
        producaoPorMes: [], // <<< adicione esta linha
      });
    }

    return historicosCompleto;
  }
}

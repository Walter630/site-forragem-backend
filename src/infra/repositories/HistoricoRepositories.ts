// repositories/HistoricoRepositories.ts
import { Historico } from "../../domain/entities/Historico";
import { PrismaClient } from "../../generated/prisma";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";
import { Precipitacao } from "../../generated/prisma";
import { Solo } from "../../generated/prisma";
import { mapSolo, mapPrecipitacao } from "../../configs/utils/Mappers";

interface CreateHistoricoDTO {
  descricao?: string;
  soloId?: number;
  precipitacaoId?: number;
}

export class HistoricoRepositories implements IHistoricoRepositories {
  constructor(private readonly prisma: PrismaClient = new PrismaClient()) {}

  private mapHistorico(h: any): Historico {
    return Historico.with({
      id: h.id,
      descricao: h.descricao ?? undefined,
      solo: mapSolo(h.solo),
      precipitacao: mapPrecipitacao(h.precipitacao),
      createdAt: h.createdAt,
    });
  }

  async findAll(): Promise<Historico[]> {
    try {
    const historicos = await this.prisma.historico.findMany({
      include: { solo: true, precipitacao: true },
    });
    return historicos.map(this.mapHistorico);
    } catch (error) {
    console.error("Error fetching historicos:", error);
    throw new Error("Error fetching historicos");   
    }
  }

  async findById(id: number): Promise<Historico | null> {
    try {
    const historico = await this.prisma.historico.findUnique({
      where: { id },
      include: { solo: true, precipitacao: true },
    });
    return historico ? this.mapHistorico(historico) : null;
} catch (error) {
    console.error("Error fetching historico by id:", error);
    throw new Error("Error fetching historico by id");
    }
  }

  async findByPropriedade(propriedade: Propriedade): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { precipitacao: {id: propriedade.id} },
      include: { solo: true, precipitacao: true },
    });
    return historicos.map(this.mapHistorico);
  }

  async findBySolo(solo: Solo): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { solo: { id: solo.id }},
      include: { solo: true, precipitacao: true },
    });
    return historicos.map(this.mapHistorico);
  }

  async findByPrecipitacao(precipitacao: Precipitacao): Promise<Historico[]> {
    const historicos = await this.prisma.historico.findMany({
      where: { id: precipitacao.id },
      include: { solo: true, precipitacao: true },
    });
    return historicos.map(this.mapHistorico);
  }

  async create(data: CreateHistoricoDTO): Promise<Historico> {
    try {
    const historico = await this.prisma.historico.create({
      data: {
        descricao: data.descricao,
        solo: data.soloId ? { connect: { id: data.soloId } } : undefined,
        precipitacao: data.precipitacaoId ? { connect: { id: data.precipitacaoId } } : undefined,
      },
      include: { solo: true, precipitacao: true },
    });
    return this.mapHistorico(historico);
} catch (error) {
    console.error("Error creating historico:", error);
    throw new Error("Error creating historico");
    }
  }

  async update(historico: Historico): Promise<Historico> {
    try {
    const updated = await this.prisma.historico.update({
      where: { id: historico.id },
      data: {
        descricao: historico.descricao,
        solo: historico.soloId ? { connect: { id: historico.soloId } } : undefined,
        precipitacao: historico.precipitacaoId ? { connect: { id: historico.precipitacaoId } } : undefined,
        updatedAt: new Date(),
      },
      include: { solo: true, precipitacao: true },
    });
    return this.mapHistorico(updated);
  } catch (error) {
    console.error("Error updating historico:", error);
    throw new Error("Error updating historico");
  }
  }

  async delete(id: number): Promise<void> {
    await this.prisma.historico.delete({ where: { id } });
  }
}

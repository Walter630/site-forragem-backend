import { PrismaClient } from "@prisma/client";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { IPrecipitacaoRepositories } from "../../domain/gateway/IPrecipitacaoRepositories";

export class PrecipitacaoRepositories implements IPrecipitacaoRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Precipitacao[]> {
    const records = await this.prisma.precipitacao.findMany({ orderBy: { createdAt: "asc" } });
    return records.map(p => Precipitacao.with({
      id: p.id,
      propriedadeId: p.propriedadeId,
      mmAno: p.mmAno ?? undefined,
      mmDia: p.mmDia ?? undefined,
      mmMes: p.mmMes ?? undefined,
      chuvas: p.chuvas ?? undefined,
      cvDia: p.cvDia ?? undefined,
      cvMes: p.cvMes ?? undefined,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt ?? new Date(),
      deletedAt: p.deletedAt,
    }));
  }

  async findById(id: string): Promise<Precipitacao | null> {
    const p = await this.prisma.precipitacao.findUnique({ where: { id } });
    return p ? Precipitacao.with({
      id: p.id,
      propriedadeId: p.propriedadeId,
      mmAno: p.mmAno ?? undefined,
      mmDia: p.mmDia ?? undefined,
      mmMes: p.mmMes ?? undefined,
      chuvas: p.chuvas ?? undefined,
      cvDia: p.cvDia ?? undefined,
      cvMes: p.cvMes ?? undefined,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt ?? new Date(),
      deletedAt: p.deletedAt,
    }) : null;
  }

  async findByPropriedadeId(propriedadeId: string): Promise<Precipitacao | null> {
    const precipitacao = await this.prisma.precipitacao.findFirst({
      where: { propriedadeId },
    });
    return precipitacao ? Precipitacao.with({
      id: precipitacao.id,
      propriedadeId: precipitacao.propriedadeId,
      mmAno: precipitacao.mmAno ?? undefined,
      mmDia: precipitacao.mmDia ?? undefined,
      mmMes: precipitacao.mmMes ?? undefined,
      chuvas: precipitacao.chuvas ?? undefined,
      cvDia: precipitacao.cvDia ?? undefined,
      cvMes: precipitacao.cvMes ?? undefined,
      createdAt: precipitacao.createdAt,
      updatedAt: precipitacao.updatedAt ?? new Date(),
      deletedAt: precipitacao.deletedAt,
    }) : null;
  }

  async createPrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
    const created = await this.prisma.precipitacao.create({
      data: {
        propriedadeId: precipitacao.propriedadeId,
        mmAno: precipitacao.mmAno,
        chuvas: precipitacao.chuvas,
        mmDia: precipitacao.mmDia,
        cvDia: precipitacao.cvDia,
        mmMes: precipitacao.mmMes,
        cvMes: precipitacao.cvMes,
      },
    });
    return Precipitacao.with({
      id: created.id,
      propriedadeId: created.propriedadeId,
      mmAno: created.mmAno ?? undefined,
      mmDia: created.mmDia ?? undefined,
      mmMes: created.mmMes ?? undefined,
      chuvas: created.chuvas ?? undefined,
      cvDia: created.cvDia ?? undefined,
      cvMes: created.cvMes ?? undefined,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt ?? new Date(),
      deletedAt: created.deletedAt,
    });
  }

  async updatePrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
    const updated = await this.prisma.precipitacao.update({
      where: { id: precipitacao.id! },
      data: {
        mmAno: precipitacao.mmAno,
        chuvas: precipitacao.chuvas,
        mmDia: precipitacao.mmDia,
        cvDia: precipitacao.cvDia,
        mmMes: precipitacao.mmMes,
        cvMes: precipitacao.cvMes,
        updatedAt: new Date(),
      },
    });
    return Precipitacao.with({
      id: updated.id,
      propriedadeId: updated.propriedadeId,
      mmAno: updated.mmAno ?? undefined,
      mmDia: updated.mmDia ?? undefined,
      mmMes: updated.mmMes ?? undefined,
      chuvas: updated.chuvas ?? undefined,
      cvDia: updated.cvDia ?? undefined,
      cvMes: updated.cvMes ?? undefined,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt ?? new Date(),
      deletedAt: updated.deletedAt,
    });
  }

  async deletePrecipitacao(id: string): Promise<void> {
    await this.prisma.precipitacao.delete({ where: { id } });
  }
}


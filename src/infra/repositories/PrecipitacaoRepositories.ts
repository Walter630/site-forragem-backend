import { PrismaClient } from "../../generated/prisma";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { IPrecipitacaoRepositories } from "../../domain/gateway/IPrecipitacaoRepositories";

export class PrecipitacaoRepositories implements IPrecipitacaoRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Precipitacao[]> {
    const records = await this.prisma.precipitacao.findMany({ orderBy: { id: "asc" } });
    return records.map(p => Precipitacao.with({ ...p, updatedAt: p.updatedAt ?? new Date() }));
  }

  async findById(id: number): Promise<Precipitacao | null> {
    const p = await this.prisma.precipitacao.findUnique({ where: { id } });
    return p ? Precipitacao.with({ ...p, updatedAt: p.updatedAt ?? new Date() }) : null;
  }

  async findByPropriedadeId(propriedadeId: number): Promise<Precipitacao | null> {
    const precipitacao = await this.prisma.precipitacao.findFirst({
      where: { propriedadeId },  // CORREÇÃO: era where: { id: propriedadeId }
    });
    return precipitacao ? Precipitacao.fromPrisma(precipitacao) : null;
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
        createdAt: precipitacao.createdAt ?? new Date(),
        updatedAt: precipitacao.updatedAt ?? new Date(),
      },
    });
    return Precipitacao.fromPrisma(created);
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
    return Precipitacao.with({ ...updated, updatedAt: updated.updatedAt ?? new Date() });
  }

  async deletePrecipitacao(id: number): Promise<void> {
    await this.prisma.precipitacao.delete({ where: { id } });
  }
}


import { PrismaClient } from "../../generated/prisma";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { IPrecipitacaoRepositories } from "../../domain/gateway/IPrecipitacaoRepositories";

export class PrecipitacaoRepositories implements IPrecipitacaoRepositories {
  constructor(private readonly prisma: PrismaClient) {
    // Recebe o PrismaClient já instanciado, não instancia aqui
  }

  async findAll(): Promise<Precipitacao[]> {
    try {
      const records = await this.prisma.precipitacao.findMany({ orderBy: { id: "asc" } });
      return records.map(p =>
        Precipitacao.with({
          id: p.id,
          mmAno: p.mmAno,
          chuvas: p.chuvas,
          mmDia: p.mmDia,
          cvDia: p.cvDia,
          mmMes: p.mmMes,
          cvMes: p.cvMes,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt || new Date(),
        })
      );
    } catch {
      throw new Error("Error fetching all precipitacoes");
    }
  }

  async findById(id: number): Promise<Precipitacao | null> {
    try {
      const p = await this.prisma.precipitacao.findUnique({ where: { id } });
      if (!p) return null;
      return Precipitacao.with({
        id: p.id,
        mmAno: p.mmAno,
        chuvas: p.chuvas,
        mmDia: p.mmDia,
        cvDia: p.cvDia,
        mmMes: p.mmMes,
        cvMes: p.cvMes,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt || new Date(),
      });
    } catch {
      throw new Error("Error fetching precipitacao by id");
    }
  }

  async findByPropriedadeId(propriedadeId: number): Promise<Precipitacao | null> {
    try {
      const precipitacao = await this.prisma.precipitacao.findFirst({
        where: { id: propriedadeId },
      });

      if (!precipitacao) return null;

      return Precipitacao.fromPrisma(precipitacao);
    } catch (error) {
      console.error("Error finding precipitacao by propriedadeId:", error);
      throw new Error("Error finding precipitacao by propriedadeId");
    }
  }

  async createPrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
    try {
      console.error('Creating precipitation with body:', precipitacao);
      const data = {
        mmAno: precipitacao.mmAno,
        chuvas: precipitacao.chuvas,
        mmDia: precipitacao.mmDia,
        cvDia: precipitacao.cvDia,
        mmMes: precipitacao.mmMes,
        cvMes: precipitacao.cvMes,
        createdAt: precipitacao.createdAt || new Date(),
        updatedAt: precipitacao.updatedAt || new Date(),
      };

      const created = await this.prisma.precipitacao.create({ data });

      return Precipitacao.fromPrisma(created);
    } catch {
      throw new Error("Error creating precipitacao");
    }
  }

  async updatePrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
    try {
      const updated = await this.prisma.precipitacao.update({
        where: { id: precipitacao.id },
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
        mmAno: updated.mmAno,
        chuvas: updated.chuvas,
        mmDia: updated.mmDia,
        cvDia: updated.cvDia,
        mmMes: updated.mmMes,
        cvMes: updated.cvMes,
        updatedAt: updated.updatedAt || new Date(),
      });
    } catch {
      throw new Error("Error updating precipitacao");
    }
  }

  async deletePrecipitacao(id: number): Promise<void> {
    try {
      await this.prisma.precipitacao.delete({ where: { id } });
    } catch {
      throw new Error("Error deleting precipitacao");
    }
  }
}

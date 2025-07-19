import { Historico } from "../../domain/entities/Historico";
import { Precipitacao, PrismaClient, Solo } from "../../generated/prisma";
import { IHistoricoRepositories } from "../../domain/gateway/IHistoricoRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";

export class HistoricoRepositories implements IHistoricoRepositories {
  constructor(private readonly prisma: PrismaClient = new PrismaClient()) {}
  findByPropriedade(propriedade: Propriedade): Promise<Historico[]> {
    throw new Error("Method not implemented.");
  }
  findBySolo(solo: Solo): Promise<Historico[]> {
    throw new Error("Method not implemented.");
  }
  findByPrecipitacao(precipitacao: Precipitacao): Promise<Historico[]> {
    throw new Error("Method not implemented.");
  }

  private mapToDomain(data: any): Historico {
    return Historico.with({
      id: data.id,
      descricao: data.descricao ?? undefined,
      valorSimulacao: data.valorSimulacao,
      propriedadeId: data.propriedadeId,
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
      where: { id: propriedadeId },
      orderBy: { createdAt: "desc" },
    });
    return historicos.map(this.mapToDomain);
  }

  async create(data: Omit<Historico, "id" | "createdAt" | "updatedAt" | "deletedAt"> & { propriedadeId: number }): Promise<Historico> {
    const created = await this.prisma.historico.create({
      data: {
        descricao: data.descricao,
        valorSimulacao: data.valorSimulacao,
        propriedadeId: data.propriedadeId,
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
        updatedAt: new Date(),
      },
    });
    return this.mapToDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.historico.delete({ where: { id } });
  }
}

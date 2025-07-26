import { Estimativas } from "../../domain/entities/Estimativas";
import { Propriedade } from "../../domain/entities/Propriedade";
import { IEstimativasRepositories } from "../../domain/gateway/IEstimativasRepositories";
import { PrismaClient } from "../../generated/prisma";

export class EstimativasRepositories implements IEstimativasRepositories {
  constructor(private readonly prisma: PrismaClient = new PrismaClient()) {}

  private mapToDomain(data: any): Estimativas {
    return Estimativas.with({
      ...data,
      descricao: data.descricao ?? "",
      propriedade: data.propriedade
        ? Propriedade.with({
            ...data.propriedade,
            adminId: data.propriedade.adminId ?? undefined,
            admin: data.propriedade.admin ?? undefined,
            updatedAt: data.propriedade.updatedAt ?? undefined,
            deletedAt: data.propriedade.deletedAt ?? undefined,
          })
        : undefined,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt ?? new Date(),
      deletedAt: data.deletedAt ?? null,
    });
  }

  async findAll(): Promise<Estimativas[]> {
    const estimativas = await this.prisma.estimativas.findMany({
      include: { propriedade: { include: { admin: true } } },
    });

    return estimativas.map(this.mapToDomain.bind(this));
  }

  async create(estimativa: Estimativas): Promise<Estimativas> {
  const dataToCreate: any = {
    valorTotal: estimativa.valorTotal,
    descricao: estimativa.descricao,
    propriedade: { connect: { id: estimativa.propriedadeId } }, // substitui propriedadeId
    createdAt: estimativa.createdAt,
    updatedAt: estimativa.updatedAt,
  };

  if (estimativa.simulacaoId) {
    dataToCreate.simulacao = { connect: { id: estimativa.simulacaoId } };
  } else {
    dataToCreate.simulacao = {
      create: {
       dadosJson: estimativa.descricao ?? "",
      resultado: estimativa.valorTotal,
      dataSimulacao: estimativa.createdAt ?? new Date(),
      propriedade: { connect: { id: estimativa.propriedadeId } }, // necessário aqui também!
      },
    };
  }

  const created = await this.prisma.estimativas.create({
    data: dataToCreate,
    include: { propriedade: { include: { admin: true } } },
  });

  return this.mapToDomain(created);
}


  async findByPropriedade(propriedadeId: number): Promise<Estimativas[]> {
    const estimativas = await this.prisma.estimativas.findMany({
      where: { propriedadeId },
      include: { propriedade: { include: { admin: true } } },
    });

    if (!estimativas.length) {
      throw new Error("Nenhuma estimativa encontrada para esta propriedade.");
    }

    return estimativas.map(this.mapToDomain.bind(this));
  }

  async findById(id: number): Promise<Estimativas | null> {
    const estimativa = await this.prisma.estimativas.findUnique({
      where: { id },
      include: { propriedade: { include: { admin: true } } },
    });

    return estimativa ? this.mapToDomain(estimativa) : null;
  }

  async update(estimativa: Estimativas): Promise<Estimativas> {
    const updated = await this.prisma.estimativas.update({
      where: { id: estimativa.id! },
      data: {
        valorTotal: estimativa.valorTotal,
        descricao: estimativa.descricao || undefined,
        propriedadeId: estimativa.propriedadeId,
        updatedAt: new Date(),
      },
      include: { propriedade: { include: { admin: true } } },
    });

    return this.mapToDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.prisma.estimativas.delete({ where: { id } });
  }
}

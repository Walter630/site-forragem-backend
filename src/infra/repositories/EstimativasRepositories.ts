import { PrismaClient } from "../../generated/prisma";
import { IEstimativasRepositories } from '../../domain/gateway/IEstimativasRepositories';
import { Estimativas } from "../../domain/entities/Estimativas";
import { Propriedade } from "../../domain/entities/Propriedade";

export class EstimativasRepositories implements IEstimativasRepositories {
  constructor(private readonly prisma: PrismaClient = new PrismaClient()) {}

  // Mapper privado para conversão do Prisma para entidade de domínio
  private mapToDomain(data: any): Estimativas {
    return Estimativas.with({
      ...data,
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
    try {
      const estimativas = await this.prisma.estimativas.findMany({
        include: {
          propriedade: {
            include: { admin: true },
          },
        },
      });

      return estimativas.map(this.mapToDomain.bind(this));
    } catch (error) {
      console.error("Erro ao buscar estimativas:", error);
      throw new Error("Erro ao buscar estimativas");
    }
  }

  async create(estimativa: Estimativas): Promise<Estimativas> {
    try {
      const created = await this.prisma.estimativas.create({
        data: {
          valorTotal: estimativa.valorTotal,
          descricao: estimativa.descricao ,
          propriedadeId: estimativa.propriedadeId,
          createdAt: estimativa.createdAt,
          updatedAt: estimativa.updatedAt,
        },
        include: {
          propriedade: {
            include: { admin: true },
          },
        },
      });

      return this.mapToDomain(created);
    } catch (error) {
      console.error("Erro ao criar estimativa:", error);
      throw new Error("Erro ao criar estimativa");
    }
  }

  async findByPropriedade(propriedade: Propriedade): Promise<Estimativas[]> {
    try {
      const estimativas = await this.prisma.estimativas.findMany({
        where: { propriedadeId: propriedade.id! },
        include: {
          propriedade: {
            include: { admin: true },
          },
        },
      });

      // Podemos substituir propriedade pelo objeto já passado para evitar query desnecessária
      return estimativas.map(e =>
        Estimativas.with({
          ...e,
            propriedade: propriedade,
        }as Estimativas)
      );
    } catch (error) {
      console.error("Erro ao buscar estimativas por propriedade:", error);
      throw new Error("Erro ao buscar estimativas");
    }
  }

  async findById(id: number): Promise<Estimativas | null> {
    try {
      const estimativa = await this.prisma.estimativas.findUnique({
        where: { id },
        include: {
          propriedade: {
            include: { admin: true },
          },
        },
      });

      if (!estimativa) return null;

      return this.mapToDomain(estimativa);
    } catch (error) {
      console.error("Erro ao buscar estimativa por ID:", error);
      throw new Error("Erro ao buscar estimativa");
    }
  }

  async update(estimativa: Estimativas): Promise<Estimativas> {
    try {
      const updated = await this.prisma.estimativas.update({
        where: { id: estimativa.id! },
        data: {
          valorTotal: estimativa.valorTotal,
          descricao: estimativa.descricao || undefined,
          propriedadeId: estimativa.propriedadeId,
          updatedAt: estimativa.updatedAt ?? new Date(),
        },
        include: {
          propriedade: {
            include: { admin: true },
          },
        },
      });

      return this.mapToDomain(updated);
    } catch (error) {
      console.error("Erro ao atualizar estimativa:", error);
      throw new Error("Erro ao atualizar estimativa");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.estimativas.delete({
        where: { id },
      });
    } catch (error) {
      console.error("Erro ao deletar estimativa:", error);
      throw new Error("Erro ao deletar estimativa");
    }
  }
}

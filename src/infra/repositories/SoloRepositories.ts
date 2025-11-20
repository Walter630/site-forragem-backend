import { ISoloRepositories } from "../../domain/gateway/ISoloRepositories";
import { PrismaClient } from "../../generated/prisma";
import { Solo } from "../../domain/entities/Solo";

export class SoloRepositories implements ISoloRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async create(solo: Solo): Promise<Solo> {
    try {
      const data = {
        nomeClasse: solo.nomeClasse,
        profundidade: solo.profundidade,
        fatorRocha: solo.fatorRocha,
        condutHidraulicaSaturada: solo.condutHidraulicaSaturada,
        densidadeAparente: solo.densidadeAparente,
        agua0Bar: solo.agua0Bar,
        agua13Bar: solo.agua13Bar,
        agua15Bar: solo.agua15Bar,
      };

      const soloCreated = await this.prisma.solo.create({ data });
      return Solo.fromPrisma(soloCreated);
    } catch (error) {
      throw new Error("Error creating solo");
    }
  }

  async update(solo: Solo): Promise<Solo> {
    if (solo.id === undefined) {
      throw new Error("ID é obrigatório para atualizar o solo");
    }

    try {
      const soloUpdated = await this.prisma.solo.update({
        where: { id: solo.id },
        data: {
          nomeClasse: solo.nomeClasse,
          profundidade: solo.profundidade,
          fatorRocha: solo.fatorRocha,
          condutHidraulicaSaturada: solo.condutHidraulicaSaturada,
          densidadeAparente: solo.densidadeAparente,
          agua0Bar: solo.agua0Bar,
          agua13Bar: solo.agua13Bar,
          agua15Bar: solo.agua15Bar,
          updatedAt: new Date(),
        },
      });

      return Solo.fromPrisma(soloUpdated);
    } catch (error) {
      throw new Error("Error updating solo");
    }
  }

  async findByPropriedadeId(propriedadeId: string): Promise<Solo[]> {
    try {
      const solos = await this.prisma.solo.findMany({
        where: {
          propriedadeSolo: {
            some: { propriedadeId }
          }
        },
      });

      return solos.map(Solo.fromPrisma);
    } catch (error) {
      throw new Error("Error finding solo by propriedadeId");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.solo.delete({ where: { id } });
    } catch (error) {
      throw new Error("Error deleting solo");
    }
  }

  async findAll(): Promise<Solo[]> {
    try {
      const solos = await this.prisma.solo.findMany({ orderBy: { createdAt: "asc" } });
      return solos.map(Solo.fromPrisma);
    } catch (error) {
      throw new Error("Error fetching all solos");
    }
  }

  async findById(id: string): Promise<Solo | null> {
    try {
      const solo = await this.prisma.solo.findUnique({ where: { id } });
      if (!solo) return null;
      return Solo.fromPrisma(solo);
    } catch (error) {
      throw new Error("Error finding solo by ID");
    }
  }
}

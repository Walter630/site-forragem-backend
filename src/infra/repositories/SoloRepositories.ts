import { ISoloRepositories } from "../../domain/gateway/ISoloRepositories";
import { PrismaClient } from "../../generated/prisma";
import { Solo } from "../../domain/entities/Solo";

export class SoloRepositories implements ISoloRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async create(solo: Solo): Promise<Solo> {
  try {
    // Debug: verificar valores
    console.log("Solo properties para salvar:", {
      propriedadeId: solo.propriedadeId,
      profundidade: solo.profundidade,
      fatorRocha: solo.fator_rocha,
      condutHidraulicaSaturada: solo.condut_hidraulica_saturada,
      densidadeAparente: solo.densidade_aparente,
      agua0Bar: solo.agua_0_bar,
      agua13Bar: solo.agua_13_bar,
      agua15Bar: solo.agua_15_bar,
    });

    const data = {
      propriedadeId: solo.propriedadeId,
      profundidade: solo.profundidade,
      fatorRocha: solo.fator_rocha,
      condutHidraulicaSaturada: solo.condut_hidraulica_saturada,
      densidadeAparente: solo.densidade_aparente,
      agua0Bar: solo.agua_0_bar,
      agua13Bar: solo.agua_13_bar,
      agua15Bar: solo.agua_15_bar,
      createdAt: solo.createdAt || new Date(),
      updatedAt: solo.updatedAt || new Date(),
    };

    const soloCreated = await this.prisma.solo.create({ data });

    return Solo.fromPrisma(soloCreated);
  } catch (error) {
    console.error("Error creating solo:", error);
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
          profundidade: solo.profundidade,
          fatorRocha: solo.fator_rocha,
          condutHidraulicaSaturada: solo.condut_hidraulica_saturada,
          densidadeAparente: solo.densidade_aparente,
          agua0Bar: solo.agua_0_bar,
          agua13Bar: solo.agua_13_bar,
          agua15Bar: solo.agua_15_bar,
          updatedAt: new Date(),
        },
      });

      return Solo.fromPrisma(soloUpdated);
    } catch (error) {
      console.error("Error updating solo:", error);
      throw new Error("Error updating solo");
    }
  }

  async findByPropriedadeId(propriedadeId: number): Promise<Solo | null> {
    try {
      const solo = await this.prisma.solo.findFirst({
        where: { id: propriedadeId },
      });

      if (!solo) return null;

      return Solo.fromPrisma(solo);
    } catch (error) {
      console.error("Error finding solo by propriedadeId:", error);
      throw new Error("Error finding solo by propriedadeId");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.solo.delete({ where: { id } });
    } catch (error) {
      console.error("Error deleting solo:", error);
      throw new Error("Error deleting solo");
    }
  }

  async findAll(): Promise<Solo[]> {
    try {
      const solos = await this.prisma.solo.findMany({ orderBy: { id: "asc" } });
      return solos.map(Solo.fromPrisma);
    } catch (error) {
      console.error("Error fetching all solos:", error);
      throw new Error("Error fetching all solos");
    }
  }

  async findById(id: number): Promise<Solo | null> {
    try {
      const solo = await this.prisma.solo.findUnique({ where: { id } });
      if (!solo) return null;
      return Solo.fromPrisma(solo);
    } catch (error) {
      console.error("Error finding solo by ID:", error);
      throw new Error("Error finding solo by ID");
    }
  }
}

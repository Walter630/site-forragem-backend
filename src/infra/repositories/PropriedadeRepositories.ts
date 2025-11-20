import { PrismaClient } from "../../generated/prisma";
import { IPropriedadeRepositories } from "../../domain/gateway/IPropriedadeRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";

export class PropriedadeRepositories implements IPropriedadeRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Propriedade[]> {
    try {
      const props = await this.prisma.propriedade.findMany({
        orderBy: { createdAt: "asc" },
      });
      return props.map(p =>
        Propriedade.with({
          id: p.id,
          nomePropriedade: p.nomePropriedade,
          nomeResponsavel: p.nomeResponsavel,
          latitude: p.latitude,
          longitude: p.longitude,
          adminId: p.adminId,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
        })
      );
    } catch (error) {
      throw new Error("Error fetching propriedades");
    }
  }

  async findById(id: string): Promise<Propriedade | null> {
    try {
      const p = await this.prisma.propriedade.findUnique({
        where: { id },
      });
      if (!p) return null;
      return Propriedade.with({
        id: p.id,
        nomePropriedade: p.nomePropriedade,
        nomeResponsavel: p.nomeResponsavel,
        latitude: p.latitude,
        longitude: p.longitude,
        adminId: p.adminId,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      });
    } catch (error) {
      throw new Error("Error fetching propriedade by id");
    }
  }

  async createPropriedades(propriedade: Propriedade): Promise<Propriedade> {
    try {
      const data = {
        nomePropriedade: propriedade.nomePropriedade,
        nomeResponsavel: propriedade.nomeResponsavel,
        latitude: propriedade.latitude,
        longitude: propriedade.longitude,
        adminId: propriedade.adminId,
      };
      const created = await this.prisma.propriedade.create({
        data,
      });
      return Propriedade.with({
        id: created.id,
        nomePropriedade: created.nomePropriedade,
        nomeResponsavel: created.nomeResponsavel,
        latitude: created.latitude,
        longitude: created.longitude,
        adminId: created.adminId,
        createdAt: created.createdAt,
        updatedAt: created.updatedAt,
      });
    } catch (error) {
      throw new Error("Error creating propriedade");
    }
  }

  async getSoloEPrecipitacao(propriedadeId: string): Promise<{
    soloId: string;
    precipitacaoId: string;
  }> {
    try {
      const solo = await this.prisma.solo.findFirst({
        where: {
          propriedadeSolo: {
            some: { propriedadeId }
          }
        },
        orderBy: { createdAt: "desc" },
      });

      const precipitacao = await this.prisma.precipitacao.findFirst({
        where: { propriedadeId },
        orderBy: { createdAt: "desc" },
      });

      if (!solo || !precipitacao) {
        throw new Error("Solo ou Precipitação não encontrados para esta propriedade.");
      }

      return {
        soloId: solo.id,
        precipitacaoId: precipitacao.id,
      };
    } catch (error) {
      throw new Error("Error getting solo e precipitacao");
    }
  }

  async update(propriedade: Propriedade): Promise<Propriedade> {
    try {
      const updated = await this.prisma.propriedade.update({
        where: { id: propriedade.id },
        data: {
          nomePropriedade: propriedade.nomePropriedade,
          nomeResponsavel: propriedade.nomeResponsavel,
          latitude: propriedade.latitude,
          longitude: propriedade.longitude,
          adminId: propriedade.adminId,
          updatedAt: new Date(),
        },
      });

      return Propriedade.with({
        id: updated.id,
        nomePropriedade: updated.nomePropriedade,
        nomeResponsavel: updated.nomeResponsavel,
        latitude: updated.latitude,
        longitude: updated.longitude,
        adminId: updated.adminId,
        createdAt: updated.createdAt,
        updatedAt: updated.updatedAt,
      });
    } catch (error) {
      throw new Error("Error updating propriedade");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.propriedade.delete({ where: { id } });
    } catch (error) {
      throw new Error("Error deleting propriedade");
    }
  }

  async findByAdminId(adminId: string): Promise<Propriedade[]> {
    try {
      const propriedades = await this.prisma.propriedade.findMany({
        where: { adminId },
      });
      return propriedades.map(p =>
        Propriedade.with({
          id: p.id,
          nomePropriedade: p.nomePropriedade,
          nomeResponsavel: p.nomeResponsavel,
          latitude: p.latitude,
          longitude: p.longitude,
          adminId: p.adminId,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
        })
      );
    } catch (error) {
      throw new Error("Error fetching propriedades by admin id");
    }
  }

  async findByNomePropriedade(nome: string): Promise<Propriedade[]> {
    try {
      const propriedades = await this.prisma.propriedade.findMany({
        where: { nomePropriedade: nome },
      });
      return propriedades.map(p => Propriedade.with({
        id: p.id,
        nomePropriedade: p.nomePropriedade,
        nomeResponsavel: p.nomeResponsavel,
        latitude: p.latitude,
        longitude: p.longitude,
        adminId: p.adminId,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt,
      }));
    } catch (error) {
      throw new Error("Error fetching propriedade by nome");
    }
  }

  async findByNomeResponsavel(nome: string): Promise<Propriedade[]> {
    try {
      const propriedades = await this.prisma.propriedade.findMany({
        where: { nomeResponsavel: nome },
      });
      return propriedades.map(p =>
        Propriedade.with({
          id: p.id,
          nomePropriedade: p.nomePropriedade,
          nomeResponsavel: p.nomeResponsavel,
          latitude: p.latitude,
          longitude: p.longitude,
          adminId: p.adminId,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
        })
      );
    } catch (error) {
      throw new Error("Error fetching propriedades by nome responsavel");
    }
  }

  async findBySimulacao(simulacao: string): Promise<Propriedade[]> {
    try {
      const propriedades = await this.prisma.propriedade.findMany({
        where: {
          simulacoes: {
            some: { nomeSimulacao: simulacao }
          }
        },
      });
      return propriedades.map(p =>
        Propriedade.with({
          id: p.id,
          nomePropriedade: p.nomePropriedade,
          nomeResponsavel: p.nomeResponsavel,
          latitude: p.latitude,
          longitude: p.longitude,
          adminId: p.adminId,
          createdAt: p.createdAt,
          updatedAt: p.updatedAt,
        })
      );
    } catch (error) {
      throw new Error("Error fetching propriedades by simulacao");
    }
  }
}

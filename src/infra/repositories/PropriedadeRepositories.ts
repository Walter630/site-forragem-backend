import { PrismaClient } from "../../generated/prisma";
import { IPropriedadeRepositories } from "../../domain/gateway/IPropriedadeRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";
import { any } from "zod";

export class PropriedadeRepositories implements IPropriedadeRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async findAll(): Promise<Propriedade[]> {
    try {
      const props = await this.prisma.propriedade.findMany({
        include: { admin: true, estimativas: true },
        orderBy: { id: "asc" },
      });
      return props.map(p =>
        Propriedade.with({
          id: p.id,
          nomePropriedade: p.nomePropriedade,
          nomeProprietario: p.nomeProprietario,
          latitude: p.latitude,
          longitude: p.longitude,
          altitude: p.altitude,
          simulacao: p.simulacao || "",
          estimativas: p.estimativas,
          adminId: p.admin ? p.admin.id : undefined,
        })
      );
    } catch {
      throw new Error("Error fetching propriedades");
    }
  }

  async findById(id: number): Promise<Propriedade | null> {
    try {
      const p = await this.prisma.propriedade.findUnique({
        where: { id },
        include: { admin: true, estimativas: true },
      });
      if (!p) return null;
      return Propriedade.with({
        id: p.id,
        nomePropriedade: p.nomePropriedade,
        nomeProprietario: p.nomeProprietario,
        latitude: p.latitude,
        longitude: p.longitude,
        altitude: p.altitude,
        simulacao: p.simulacao || "",
        estimativas: p.estimativas,
        adminId: p.admin ? p.admin.id : undefined,
      });
    } catch {
      throw new Error("Error fetching propriedade by id");
    }
  }

  async createPropriedades(propriedade: Propriedade): Promise<Propriedade> {
    try {
      console.log(propriedade)
      const data: any = {
        nomePropriedade: propriedade.nomePropriedade,
        nomeProprietario: propriedade.nomeProprietario,
        latitude: propriedade.latitude,
        longitude: propriedade.longitude,
        altitude: propriedade.altitude,
        simulacao: propriedade.simulacao || "",
        adminId: propriedade.admin?.id || propriedade.adminId,
      };
      console.log(data)
      const created = await this.prisma.propriedade.create({
        data,
        include: { admin: true, estimativas: true },
      });
      console.log(created)
      return Propriedade.with({
        id: created.id,
        nomePropriedade: created.nomePropriedade,
        nomeProprietario: created.nomeProprietario,
        latitude: created.latitude,
        longitude: created.longitude,
        altitude: created.altitude,
        simulacao: created.simulacao || "",
        estimativas: created.estimativas,
        adminId: created.admin ? created.admin.id : undefined
      });
    } catch {
      throw new Error("Error creating propriedade");
    }
  }

  async getSoloEPrecipitacao(propriedadeId: number): Promise<{
    soloId: number;
    precipitacaoId: number;
  }> {
    const solo = await this.prisma.solo.findFirst({
      where: { propriedadeId },
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
  }

  async update(propriedade: Propriedade): Promise<Propriedade> {
    try {
      const updated = await this.prisma.propriedade.update({
        where: { id: propriedade.id },
        data: {
          nomePropriedade: propriedade.nomePropriedade,
          nomeProprietario: propriedade.nomeProprietario,
          latitude: propriedade.latitude,
          longitude: propriedade.longitude,
          altitude: propriedade.altitude,
          simulacao: propriedade.simulacao || "",
          updatedAt: new Date(),
        },
        include: { admin: true, estimativas: true },
      });

      return Propriedade.with({
        id: updated.id,
        nomePropriedade: updated.nomePropriedade,
        nomeProprietario: updated.nomeProprietario,
        latitude: updated.latitude,
        longitude: updated.longitude,
        altitude: updated.altitude,
        simulacao: updated.simulacao || "",
        estimativas: updated.estimativas,
        adminId: updated.admin ? updated.admin.id : undefined,
      });
    } catch {
      throw new Error("Error updating propriedade");
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.prisma.propriedade.delete({ where: { id } });
    } catch {
      throw new Error("Error deleting propriedade");
    }
  }
    async findByAdminId(adminId: number): Promise<Propriedade[]> {
        try {
        const propriedades = await this.prisma.propriedade.findMany({
            where: { adminId },
            include: { admin: true, estimativas: true },
        });
        return propriedades.map(p =>
            Propriedade.with({
            id: p.id,
            nomePropriedade: p.nomePropriedade,
            nomeProprietario: p.nomeProprietario,
            latitude: p.latitude,
            longitude: p.longitude,
            altitude: p.altitude,
            simulacao: p.simulacao || "",
            estimativas: p.estimativas,
            adminId: p.admin ? p.admin.id : undefined,
            })
        );
        } catch {
        throw new Error("Error fetching propriedades by admin id");
        }
    }
    async findByNomePropriedade(nome: string): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                where: { nomePropriedade: nome },
                include: { admin: true, estimativas: true },
            });
            if (!propriedades) throw new Error("Propriedade not found");
            return propriedades.map((pp: any) => Propriedade.with({
                id: pp.id,
                nomePropriedade: pp.nomePropriedade,
                nomeProprietario: pp.nomeProprietario,
                latitude: pp.latitude,
                longitude: pp.longitude,
                altitude: pp.altitude,
                simulacao: pp.simulacao || "",
                estimativas: pp.estimativas,
                adminId: pp.admin ? pp.admin.id : undefined,
            }))
        } catch {
            throw new Error("Error fetching propriedade by nome");
        }
    }
    async findByNomeProprietario(nome: string): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                where: { nomeProprietario: nome },
                include: { admin: true, estimativas: true },
            });
            return propriedades.map(p =>
                Propriedade.with({
                    id: p.id,
                    nomePropriedade: p.nomePropriedade,
                    nomeProprietario: p.nomeProprietario,
                    latitude: p.latitude,
                    longitude: p.longitude,
                    altitude: p.altitude,
                    simulacao: p.simulacao || "",
                    estimativas: p.estimativas,
                    adminId: p.admin ? p.admin.id : undefined,
                })
            );
        } catch {
            throw new Error("Error fetching propriedades by nome proprietario");
        }
    }
    async findBySimulacao(simulacao: string): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                where: { simulacao },
                include: { admin: true, estimativas: true },
            });
            return propriedades.map(p =>
                Propriedade.with({
                    id: p.id,
                    nomePropriedade: p.nomePropriedade,
                    nomeProprietario: p.nomeProprietario,
                    latitude: p.latitude,
                    longitude: p.longitude,
                    altitude: p.altitude,
                    simulacao: p.simulacao || "",
                    estimativas: p.estimativas,
                    adminId: p.admin ? p.admin.id : undefined,
                })
            );
        } catch {
            throw new Error("Error fetching propriedades by simulacao");
        }
    }
}

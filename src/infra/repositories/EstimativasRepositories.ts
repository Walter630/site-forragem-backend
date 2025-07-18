import { PrismaClient } from "../../generated/prisma";
import { IEstimativasRepositories } from '../../domain/gateway/IEstimativasRepositories';
import { Estimativas } from "../../domain/entities/Estimativas";
import { Propriedade } from "../../domain/entities/Propriedade";

export class EstimativasRepositories implements IEstimativasRepositories {
    constructor(private readonly prisma: PrismaClient = new PrismaClient()) {}

    async findAll(): Promise<Estimativas[]> {
        const estimativas = await this.prisma.estimativas.findMany({
            include: {
                propriedade: {
                    include: {
                        admin: true // Se você quiser dados do admin associados
                    }
                }
            }
        });

        return estimativas.map(e =>
            Estimativas.with({
                ...e,
                propriedade: e.propriedade
                    ? Propriedade.with({
                        ...e.propriedade,
                        adminId: e.propriedade.adminId ?? undefined,
                        admin: e.propriedade.admin ?? undefined,
                        updatedAt: e.propriedade.updatedAt ?? undefined,
                    })
                    : undefined,
                createdAt: e.createdAt,
                updatedAt: e.updatedAt ?? new Date(),
            })
        );
    }

    async create(estimativa: Estimativas): Promise<Estimativas> {
        const created = await this.prisma.estimativas.create({
            data: {
                valorTotal: estimativa.valorTotal,
                createdAt: estimativa.createdAt,
                updatedAt: estimativa.updatedAt,
                propriedade: {
                    create: {
                        nomeProprietario: estimativa.propriedade.nomeProprietario,
                        nomePropriedade: estimativa.propriedade.nomePropriedade,
                        latitude: estimativa.propriedade.latitude,
                        longitude: estimativa.propriedade.longitude,
                        altitude: estimativa.propriedade.altitude,
                        simulacao: estimativa.propriedade.simulacao || "",
                        // Se você quiser associar o admin diretamente
                        // adminId: estimativa.propriedade.adminId,
                        admin: {
                            connect: { id: estimativa.propriedade.adminId }
                        }
                    }
                }
            },
            include: {
                propriedade: {
                    include: {
                        admin: true
                    }
                }
            }
        });

        return Estimativas.with({
            ...created,
            propriedade: created.propriedade
                ? Propriedade.with({
                    id: created.propriedade.id,
                    nomePropriedade: created.propriedade.nomePropriedade,
                    nomeProprietario: created.propriedade.nomeProprietario,
                    latitude: created.propriedade.latitude,
                    longitude: created.propriedade.longitude,
                    altitude: created.propriedade.altitude,
                    simulacao: created.propriedade.simulacao || "",
                    adminId: created.propriedade.adminId ?? undefined,
                    admin: created.propriedade.admin ?? undefined,
                    updatedAt: created.propriedade.updatedAt ?? undefined,
                    deletedAt: created.propriedade.deletedAt ?? undefined,
                })
                : undefined,
            createdAt: created.createdAt,
            updatedAt: created.updatedAt ?? new Date(),
        });
    }

    async findByPropriedade(propriedade: Propriedade): Promise<Estimativas[]> {
        const estimativas = await this.prisma.estimativas.findMany({
            where: {
                propriedadeId: propriedade.id
            }
        });

        return estimativas.map(e =>
            Estimativas.with({
                ...e,
                propriedade, // já que a propriedade foi passada como argumento
                updatedAt: e.updatedAt ?? new Date(),
            })
        );
    }

    async findById(id: number): Promise<Estimativas | null> {
        const estimativa = await this.prisma.estimativas.findUnique({
            where: { id },
            include: {
                propriedade: {
                    include: {
                        admin: true
                    }
                }
            }
        });

        if (!estimativa) return null;

        return Estimativas.with({
            ...estimativa,
            propriedade: estimativa.propriedade
                ? Propriedade.with({
                    ...estimativa.propriedade,
                    adminId: estimativa.propriedade.adminId ?? undefined,
                    admin: estimativa.propriedade.admin ?? undefined,
                    updatedAt: estimativa.propriedade.updatedAt === null ? undefined : estimativa.propriedade.updatedAt
                })
                : undefined,
            createdAt: estimativa.createdAt,
            updatedAt: estimativa.updatedAt ?? new Date(),
        });
    }

    async update(estimativa: Estimativas): Promise<Estimativas> {
        const updated = await this.prisma.estimativas.update({
            where: { id: estimativa.id },
            data: {
                ...estimativa
            },
            include: {
                propriedade: {
                    include: {
                        admin: true
                    }
                }
            }
        });

        return Estimativas.with({
            ...updated,
            propriedade: updated.propriedade
                ? Propriedade.with({
                    ...updated.propriedade,
                    adminId: updated.propriedade.adminId ?? undefined,
                    admin: updated.propriedade.admin ?? undefined,
                    updatedAt: updated.propriedade.updatedAt === null ? undefined : updated.propriedade.updatedAt
                })
                : undefined,
            createdAt: updated.createdAt,
            updatedAt: updated.updatedAt ?? new Date(),
        });
    }

    async delete(id: number): Promise<void> {
        await this.prisma.estimativas.delete({
            where: { id }
        });
    }
}

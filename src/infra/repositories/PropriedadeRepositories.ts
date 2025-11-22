// src/infra/repositories/PropriedadeRepository.ts
import { PrismaClient } from "@prisma/client";
import { CreatePropriedadeDTO, UpdatePropriedadeDTO } from "../../aplication/dto/PropriedadeDto";
import { Propriedade } from "../../domain/entities/Propriedade";

export class PropriedadeRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async findAll(): Promise<Propriedade[]> {
        const propriedades = await this.prisma.propriedade.findMany({
            include: {
                culturas: { include: { cultura: true } },
                solos: { include: { solo: true } }
            }
        });

        return propriedades.map((p: any) =>
            Propriedade.with({
                ...p,
                id: p.id.toString(),
                adminId: p.adminId?.toString() ?? null,
                culturas: p.culturas.map((c: any) => c.cultura.nome),
                solos: p.solos.map((s: any) => s.solo.nome),
            })
        );
    }

    async findById(id: string): Promise<Propriedade | null> {
        const p = await this.prisma.propriedade.findUnique({
            where: { id },
            include: {
                culturas: { include: { cultura: true } },
                solos: { include: { solo: true } }
            }
        });

        if (!p) return null;

        return Propriedade.with({
            ...p,
            id: p.id.toString(),
            adminId: p.adminId?.toString() ?? null,
            culturas: p.culturas.map((c: any) => c.cultura.nome),
            solos: p.solos.map((s: any) => s.solo.nome)
        });
    }

    async create(data: CreatePropriedadeDTO): Promise<Propriedade> {
        const { culturas, solos, ...rest } = data;

        const created = await this.prisma.propriedade.create({
            data: {
                nomePropriedade: rest.nomePropriedade,
                nomeResponsavel: rest.nomeResponsavel,
                latitude: Number(rest.latitude),
                longitude: Number(rest.longitude),
                adminId: rest.adminId ?? null,

                culturas: culturas ? {
                    create: culturas.map(nome => ({
                        cultura: {
                            connectOrCreate: {
                                where: { name: nome },
                                create: { name: nome }
                            }
                        }
                    }))
                } : undefined,

                solos: solos ? {
                    create: solos.map(nome => ({
                        solo: {
                            connectOrCreate: {
                                where: { nomeClasse: nome },
                                create: { nomeClasse: nome }
                            }
                        }
                    }))
                } : undefined,
            },
            include: {
                culturas: { include: { cultura: true } },
                solos: { include: { solo: true } }
            }
        }) as any;
        console.log("created",created);
        return Propriedade.with({
            ...created,
            id: created.id.toString(),
            adminId: created.adminId?.toString() ?? null,
            culturas: created.culturas?.map((c: any) => c.cultura.nome) ?? [],
            solos: created.solos?.map((s: any) => s.solo.nome) ?? [],
        });
    }


    async update(id: string, data: UpdatePropriedadeDTO): Promise<Propriedade> {
        // Desestruturamos para montar corretamente o objeto "data" do prisma
        const { culturas, solos, latitude, longitude, adminId, nomePropriedade, nomeResponsavel } = data;

        const prismaData: any = {};

        if (nomePropriedade !== undefined) prismaData.nomePropriedade = nomePropriedade;
        if (nomeResponsavel !== undefined) prismaData.nomeResponsavel = nomeResponsavel;
        if (adminId !== undefined) prismaData.adminId = adminId ?? null;
        if (latitude !== undefined) prismaData.latitude = Number(latitude);
        if (longitude !== undefined) prismaData.longitude = Number(longitude);

        // Trata culturas (recebemos nomes)
        if (culturas !== undefined) {
            prismaData.culturas = {
                deleteMany: {}, // limpa relações atuais
                create: culturas.map((nome) => ({
                    cultura: {
                        connectOrCreate: {
                            where: { name: nome },
                            create: { name: nome }
                        }
                    }
                }))
            };
        }

        // Trata solos (recebemos nomes)
        if (solos !== undefined) {
            prismaData.solos = {
                deleteMany: {},
                create: solos.map((nome) => ({
                    solo: {
                        connectOrCreate: {
                            where: { nomeClasse: nome },
                            create: { nomeClasse: nome }
                        }
                    }
                }))
            };
        }

        const updated = await this.prisma.propriedade.update({
            where: { id },
            data: prismaData,
            include: {
                culturas: { include: { cultura: true } },
                solos: { include: { solo: true } }
            }
        });

        // Mapeia para a entidade usando nomes (consistente com findAll/findById)
        return Propriedade.with({
            ...updated,
            id: updated.id.toString(),
            adminId: updated.adminId?.toString() ?? null,
            culturas: updated.culturas?.map((c: any) => c.cultura.nome) ?? [],
            solos: updated.solos?.map((s: any) => s.solo.nome) ?? [],
            createdAt: updated.createdAt,
            updatedAt: updated.updatedAt,
        });
    }

    async delete(id: string): Promise<void> {
        await this.prisma.propriedade.delete({ where: { id } });
    }
}

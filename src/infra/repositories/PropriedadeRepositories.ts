
import { PrismaClient } from "../../generated/prisma";
import { IPropriedadeRepositories } from "../../domain/gateway/IPropriedadeRepositories";
import { Propriedade } from "../../domain/entities/Propriedade";
export class PropriedadeRepositories implements IPropriedadeRepositories {
    constructor(private readonly prisma: PrismaClient) {
        // Initialize Prisma Client
        this.prisma = new PrismaClient();
    }

    async getPropriedadeRepository() {
        try {
            return await this.prisma.propriedade.findMany({
                orderBy: { id: "asc" }, 
            });
        } catch (error) {
            throw new Error("Error fetching propriedade repository");
        }
    }

    async createPropriedades(propriedade: Propriedade): Promise<Propriedade> {
        try {
            const data: any = {
                id: propriedade.id,
                nomePropriedade: propriedade.nomePropriedade,
                nomeProprietario: propriedade.nomeProprietario,
                latitude: propriedade.latitude,
                longitude: propriedade.longitude,
                altitude: propriedade.altitude,
                simulacao: propriedade.simulacao,
                createdAt: propriedade.createdAt || new Date(),
                updatedAt: propriedade.updatedAt || new Date(),
                adminId: propriedade.adminId,
                admin: propriedade.admin ? { connect: { id: propriedade.admin.id } } : undefined
            };
            if (propriedade.id !== undefined) {
                data.id = propriedade.id;
            }
            const propriedadeCreated = await this.prisma.propriedade.create({
                data,
                include: {
                    admin: true,
                    estimativas: true
                }
            });
            if (propriedade.estimativas) {
                await this.prisma.estimativas.createMany({
                    data: propriedade.estimativas.map(estimativa => ({
                        ...estimativa,
                        propriedadeId: propriedadeCreated.id
                    }))
                });
            }       
            
            return Propriedade.with({
                id: propriedadeCreated.id,
                nomePropriedade: propriedadeCreated.nomePropriedade,
                nomeProprietario: propriedadeCreated.nomeProprietario,
                latitude: propriedadeCreated.latitude,
                longitude: propriedadeCreated.longitude,
                altitude: propriedadeCreated.altitude,
                simulacao: propriedadeCreated.simulacao || "",
                
                estimativas: propriedadeCreated.estimativas,
            });
        } catch (error) {
            console.error("Error creating propriedade:", error);
            throw new Error("Error creating propriedade");
        }
    }
    async findAll(): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                include: {
                    admin: true,
                    estimativas: true
                }
            });
            return propriedades.map((propriedade) => Propriedade.with({
                id: propriedade.id,
                nomePropriedade: propriedade.nomePropriedade,
                nomeProprietario: propriedade.nomeProprietario,
                latitude: propriedade.latitude,
                longitude: propriedade.longitude,
                altitude: propriedade.altitude,
                simulacao: propriedade.simulacao || "",
                estimativas: propriedade.estimativas,
            }));
        } catch (error) {
            console.error("Error fetching propriedades:", error);
            throw new Error("Error fetching propriedades");
        }
    }
    async findBySimulacao(simulacao: string): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                where: { simulacao: simulacao },
                include: {
                    admin: true,
                    estimativas: true
                }
            });
            return propriedades.map((propriedade) => Propriedade.with({
                id: propriedade.id,
                nomePropriedade: propriedade.nomePropriedade,
                nomeProprietario: propriedade.nomeProprietario,
                latitude: propriedade.latitude,
                longitude: propriedade.longitude,
                altitude: propriedade.altitude,
                simulacao: propriedade.simulacao || "",
                estimativas: propriedade.estimativas,
            }));
        } catch (error) {
            console.error("Error fetching propriedades by simulacao:", error);
            throw new Error("Error fetching propriedades by simulacao");
        }
    }

        async findByNomePropriedade(nomePropriedade: string): Promise<Propriedade[]> {
            try {
                const propriedades = await this.prisma.propriedade.findMany({
                    where: { nomePropriedade: { contains: nomePropriedade} },
                    include: {
                        admin: true,
                        estimativas: true
                    }
                });
                return propriedades.map((propriedade) => Propriedade.with({
                    id: propriedade.id,
                    nomePropriedade: propriedade.nomePropriedade,
                    nomeProprietario: propriedade.nomeProprietario,
                    latitude: propriedade.latitude,
                    longitude: propriedade.longitude,
                    altitude: propriedade.altitude,
                    simulacao: propriedade.simulacao || "",
                    estimativas: propriedade.estimativas,
                }));
            } catch (error) {
                console.error("Error fetching propriedades by nomePropriedade:", error);
                throw new Error("Error fetching propriedades by nomePropriedade");
            }
    }
    async findByNomeProprietario(nomeProprietario: string): Promise<Propriedade[]> {
        try {
            const propriedades = await this.prisma.propriedade.findMany({
                where: { nomeProprietario: { contains: nomeProprietario } },
                include: {
                    admin: true,
                    estimativas: true
                }
            });
            return propriedades.map((propriedade) => Propriedade.with({
                id: propriedade.id,
                nomePropriedade: propriedade.nomePropriedade,
                nomeProprietario: propriedade.nomeProprietario,
                latitude: propriedade.latitude,
                longitude: propriedade.longitude,
                altitude: propriedade.altitude,
                simulacao: propriedade.simulacao || "",
                estimativas: propriedade.estimativas,
            }));
        } catch (error) {
            console.error("Error fetching propriedades by nomeProprietario:", error);
            throw new Error("Error fetching propriedades by nomeProprietario");
        }
    }

    async findById(id: number): Promise<Propriedade | null> {
        try {
            const propriedade = await this.prisma.propriedade.findUnique({
                where: { id },
                include: {
                    admin: true,
                    estimativas: true
                }
            });
            return propriedade ? Propriedade.with({
                id: propriedade.id,
                nomePropriedade: propriedade.nomePropriedade,
                nomeProprietario: propriedade.nomeProprietario,
                latitude: propriedade.latitude,
                longitude: propriedade.longitude,
                altitude: propriedade.altitude,
                simulacao: propriedade.simulacao || "",
                estimativas: propriedade.estimativas,
            }) : null;
        } catch (error) {
            console.error("Error fetching propriedade by id:", error);
            throw new Error("Error fetching propriedade by id");
        }
    }

    async update(propriedade: Propriedade): Promise<Propriedade> {
        try {
            const propriedadeUpdated = await this.prisma.propriedade.update({
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
            });
            return Propriedade.with({
                id: propriedadeUpdated.id,
                nomePropriedade: propriedadeUpdated.nomePropriedade,
                nomeProprietario: propriedadeUpdated.nomeProprietario,
                latitude: propriedadeUpdated.latitude,
                longitude: propriedadeUpdated.longitude,
                altitude: propriedadeUpdated.altitude,
                simulacao: propriedadeUpdated.simulacao || "",
            });
        } catch (error) {
            console.error("Error updating propriedade:", error);
            throw new Error("Error updating propriedade");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.propriedade.delete({
                where: { id },
            });
        } catch (error) {
            console.error("Error deleting propriedade:", error);
            throw new Error("Error deleting propriedade");
        }
    }
}
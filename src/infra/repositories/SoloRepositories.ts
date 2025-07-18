import { ISoloRepositories } from "../../domain/gateway/ISoloRepositories";
import { PrismaClient } from "../../generated/prisma";
import { Solo } from "../../domain/entities/Solo";

const prisma = new PrismaClient();

export class SoloRepositories implements ISoloRepositories {
    constructor(private readonly prisma: PrismaClient) {
        // Initialize Prisma Client
        this.prisma = new PrismaClient();
    }

    async getSoloRepository() {
        try {
            return await prisma.solo.findMany({
                orderBy: {  id: "asc" },
            });
        } catch (error) {
            throw new Error("Error fetching solo repository");
        }
    }

    async create(solo: Solo): Promise<Solo> {
        try {
            const data: any = {
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
            if (solo.id !== undefined) {
                data.id = solo.id;
            }
            const soloCreated = await this.prisma.solo.create({
                data,
            });
            return Solo.with({
                id: soloCreated.id,
                profundidade: soloCreated.profundidade,
                fator_rocha: soloCreated.fatorRocha,
                condut_hidraulica_saturada: soloCreated.condutHidraulicaSaturada,
                densidade_aparente: soloCreated.densidadeAparente,
                agua_0_bar: soloCreated.agua0Bar,
                agua_13_bar: soloCreated.agua13Bar,
                agua_15_bar: soloCreated.agua15Bar,
                createdAt: soloCreated.createdAt,
            });
        } catch (error) {
            console.error("Error creating solo:", error);
            throw new Error("Error creating solo");
        }
    }
    async update(solo: Solo): Promise<Solo> {
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
                    agua15Bar: solo.agua_15_bar
                },
            });
            return Solo.with({
                id: soloUpdated.id,
                profundidade: soloUpdated.profundidade,
                fator_rocha: soloUpdated.fatorRocha,
                condut_hidraulica_saturada: soloUpdated.condutHidraulicaSaturada,
                densidade_aparente: soloUpdated.densidadeAparente,
                agua_0_bar: soloUpdated.agua0Bar,
                agua_13_bar: soloUpdated.agua13Bar,
                agua_15_bar: soloUpdated.agua15Bar,
                createdAt: soloUpdated.createdAt,
            });
        } catch (error) {
            console.error("Error updating solo:", error);
            throw new Error("Error updating solo");
        }
    }
    async delete(id: number): Promise<void> {
        try {
            await this.prisma.solo.delete({
                where: { id },
            });
        } catch (error) {
            console.error("Error deleting solo:", error);
            throw new Error("Error deleting solo");
        }
    }

    async findAll(): Promise<Solo[]> {
        try {
            const solos = await this.prisma.solo.findMany({
                orderBy: { id: "asc" },
            });
            return solos.map(solo => Solo.with({
                id: solo.id,
                profundidade: solo.profundidade,
                fator_rocha: solo.fatorRocha,
                condut_hidraulica_saturada: solo.condutHidraulicaSaturada,
                densidade_aparente: solo.densidadeAparente,
                agua_0_bar: solo.agua0Bar,
                agua_13_bar: solo.agua13Bar,
                agua_15_bar: solo.agua15Bar,
                createdAt: solo.createdAt,
}            ));
        } catch (error) {
            console.error("Error fetching all solos:", error);
            throw new Error("Error fetching all solos");
        }
    }

    async findById(id: number): Promise<Solo | null> {
        try {
            const solo = await this.prisma.solo.findUnique({
                where: { id },
            });
            return solo ? Solo.with({
                id: solo.id,
                profundidade: solo.profundidade,
                fator_rocha: solo.fatorRocha,
                condut_hidraulica_saturada: solo.condutHidraulicaSaturada,
                densidade_aparente: solo.densidadeAparente,
                agua_0_bar: solo.agua0Bar,
                agua_13_bar: solo.agua13Bar,
                agua_15_bar: solo.agua15Bar,
                createdAt: solo.createdAt,
            }) : null;
        } catch (error) {
            console.error("Error finding solo by ID:", error);
            throw new Error("Error finding solo by ID");
        }
    }
}
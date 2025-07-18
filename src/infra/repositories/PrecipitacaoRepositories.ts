import { PrismaClient } from "../../generated/prisma";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { IPrecipitacaoRepositories } from "../../domain/gateway/IPrecipitacaoRepositories";

export class PrecipitacaoRepositories implements IPrecipitacaoRepositories {
    constructor(private readonly prisma: PrismaClient) {
        // Initialize Prisma Client
        this.prisma = new PrismaClient();
    }

    async getPrecipitacaoRepository() {
        try {
            return await this.prisma.precipitacao.findMany({
                orderBy: { id: "asc" }, 
            });
        } catch (error) {
            throw new Error("Error fetching precipitacao repository");
        }
    }

    async createPrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
        try {
            const data: any = {
                id: precipitacao.id,
                mmAno: precipitacao.mm_ano,
                chuvas: precipitacao.chuvas,
                mmDia: precipitacao.mm_dia,
                chuvasDia: precipitacao.chuvas_dia,
                mmMes: precipitacao.mm_mes,
                chuvasMes: precipitacao.chuvas_mes,
                createdAt: precipitacao.createdAt || new Date(),
                updatedAt: precipitacao.updatedAt || new Date(),
            };
            if (precipitacao.id !== undefined) {
                data.id = precipitacao.id;
            }
            const precipitacaoCreated = await this.prisma.precipitacao.create({
                data,
            });
            
            return Precipitacao.with({
                id: precipitacaoCreated.id,
                mm_ano: precipitacaoCreated.mmAno,
                chuvas: precipitacaoCreated.chuvas,
                mm_dia: precipitacaoCreated.mmDia,
                chuvas_dia: precipitacaoCreated.cvDia,
                mm_mes: precipitacaoCreated.mmMes,
                chuvas_mes: precipitacaoCreated.cvMes,
                
            });
        } catch (error) {
            throw new Error("Error creating precipitacao");
        }
    }

    async updatePrecipitacao(precipitacao: Precipitacao): Promise<Precipitacao> {
        try {
            const precipitacaoUpdated = await this.prisma.precipitacao.update({
                where: { id: precipitacao.id },
                data: {
                    mmAno: precipitacao.mm_ano,
                    chuvas: precipitacao.chuvas,
                    mmDia: precipitacao.mm_dia,
                    cvDia: precipitacao.chuvas_dia,
                    mmMes: precipitacao.mm_mes,
                    cvMes: precipitacao.chuvas_mes,
                    updatedAt: new Date(),
                },
            });
            return Precipitacao.with({
                id: precipitacaoUpdated.id,
                mm_ano: precipitacaoUpdated.mmAno,
                chuvas: precipitacaoUpdated.chuvas,
                mm_dia: precipitacaoUpdated.mmDia,
                chuvas_dia: precipitacaoUpdated.cvDia,
                mm_mes: precipitacaoUpdated.mmMes,
                chuvas_mes: precipitacaoUpdated.cvMes,
                updatedAt: precipitacaoUpdated.updatedAt || new Date(),
            });
        } catch (error) {
            throw new Error("Error updating precipitacao");
        }
    }

    async deletePrecipitacao(id: number): Promise<void> {
        try {
            await this.prisma.precipitacao.delete({
                where: { id },
            });
        } catch (error) {
            throw new Error("Error deleting precipitacao");
        }
    }

    async findAll(): Promise<Precipitacao[]> {
        try {
            const precipitacoes = await this.prisma.precipitacao.findMany({
                orderBy: { id: "asc" },
            });
            return precipitacoes.map(p => Precipitacao.with({
                id: p.id,
                mm_ano: p.mmAno,
                chuvas: p.chuvas,
                mm_dia: p.mmDia,
                chuvas_dia: p.cvDia,
                mm_mes: p.mmMes,
                chuvas_mes: p.cvMes,
                createdAt: p.createdAt,
            }));
        } catch (error) {
            throw new Error("Error fetching all precipitacoes");
        }
    }

    async findById(id: number): Promise<Precipitacao | null> {
        try {
            const precipitacao = await this.prisma.precipitacao.findUnique({
                where: { id },
            });
            if (!precipitacao) {
                return null;
            }
            return Precipitacao.with({
                id: precipitacao.id,
                mm_ano: precipitacao.mmAno,
                chuvas: precipitacao.chuvas,
                mm_dia: precipitacao.mmDia,
                chuvas_dia: precipitacao.cvDia,
                mm_mes: precipitacao.mmMes,
                chuvas_mes: precipitacao.cvMes,
                createdAt: precipitacao.createdAt,
            });
        } catch (error) {
            throw new Error("Error fetching precipitacao by id");
        }
    }

}
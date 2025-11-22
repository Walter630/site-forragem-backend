import { Cultura } from "../../domain/entities/Cultura";
import { ICulturaRepositories } from "../../domain/gateway/ICulturaRepositories";
import { PrismaClient } from "@prisma/client";
import { PropriedadeCultura } from "../../domain/entities/PropriedadeCultura";
import {Admin} from "../../domain/entities/Admin";
import {TipoUser} from "../../domain/entities/TipoUser";
import {Propriedade} from "../../domain/entities/Propriedade";

export class CulturaRepositories implements ICulturaRepositories {
    private constructor(private readonly prisma: PrismaClient) {}


    public static create(prisma: PrismaClient): CulturaRepositories {
        return new CulturaRepositories(prisma);
    }

    private mapToDomain(data: any): Cultura {
        if (!data) {
            throw new Error("Cultura não encontrado");
        }

        return Cultura.with({
            id: data.id,
            name: data.name,
            eua: data.eua,
            propriedadeCultura: data.propriedadeCultura,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
            deletedAt: data.deletedAt
        });
    }

    async create(cultura: Cultura): Promise<Cultura> {
        const createCultura = await this.prisma.cultura.create({
            data: {
                name: cultura.name,
                eua: cultura.eua
            }
        });

        return Cultura.with({
            ...createCultura,
            propriedadeCultura: cultura.propriedadeCultura
        });
    }
    async update(id: number, cultura: Cultura): Promise<Cultura | null> {
        const updateCultura = await this.prisma.cultura.update({
            where: { id },
            data: {
                name: cultura.name,
                eua: cultura.eua
            }
        });
        return Cultura.with({
            ...updateCultura,
            propriedadeCultura : cultura.propriedadeCultura
        });

    }
    async delete(id: number): Promise<void> {
        await this.prisma.cultura.delete({ where: { id } });
        return;
    }
    async findById(id: number): Promise<Cultura | null> {
        const cultura = await this.prisma.cultura.findUnique({
            where: {id},
        });

        if (!cultura) return null;
        return this.mapToDomain(cultura)
    }
    async findAll(): Promise<Cultura[]> {
        const culturasFindall = await this.prisma.cultura.findMany();

        return culturasFindall.map(this.mapToDomain.bind(this));
    }
}

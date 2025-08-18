import { Cultura } from "../../domain/entities/Cultura";
import { CulturaRepositories } from "../../infra/repositories/CulturaRepositores";

export class CulturaServices {
    private culturaRepositories: CulturaRepositories;
    constructor(culturaRepo: CulturaRepositories) {
        this.culturaRepositories = culturaRepo
    }

    async create(cultura: Cultura): Promise<Cultura> {
        const culturaCreated: any = await this.culturaRepositories.create(cultura);
        return culturaCreated
    }

    async update(id: number, cultura: Cultura): Promise<Cultura | null> {
        const culturaUpdated: any = await this.culturaRepositories.update(id, cultura);
        return culturaUpdated
    }

    async delete(id: number): Promise<void> {
        await this.culturaRepositories.delete(id);
    }

    async findById(id: number): Promise<Cultura | null> {
        const cultura: any = await this.culturaRepositories.findById(id);
        return cultura
    }

    async findAll(): Promise<Cultura[]> {
        const culturas: any = await this.culturaRepositories.findAll();
        return culturas
    }
}
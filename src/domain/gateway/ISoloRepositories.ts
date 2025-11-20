import { Solo } from "../entities/Solo";

export interface ISoloRepositories {
    create(solo: Solo): Promise<Solo>;
    findAll(): Promise<Solo[]>;
    findById(id: string): Promise<Solo | null>;
    update(solo: Solo): Promise<Solo>;
    delete(id: string): Promise<void>;
    findByPropriedadeId(propriedadeId: string): Promise<Solo[]>;
}
import { Solo } from "../entities/Solo";

export interface ISoloRepositories {
    create(solo: Solo): Promise<Solo>;
    findAll(): Promise<Solo[]>;
    findById(id: number): Promise<Solo | null>;
    update(solo: Solo): Promise<Solo>;
    delete(id: number): Promise<void>;
}
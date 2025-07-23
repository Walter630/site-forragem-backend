import { Estimativas } from "../entities/Estimativas";
import { Propriedade } from "../entities/Propriedade";

export interface IEstimativasRepositories {
    create(estimativa: Estimativas): Promise<Estimativas>;
    findAll(): Promise<Estimativas[]>;
    findByPropriedade(propriedadeId: number): Promise<Estimativas[]>;
    findById(id: number): Promise<Estimativas | null>;
    update(estimativa: Estimativas): Promise<Estimativas>;
    delete(id: number): Promise<void>;
}
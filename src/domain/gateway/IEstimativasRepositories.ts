import { Estimativas } from "../entities/Estimativas";
import { Propriedade } from "../entities/Propriedade";

export interface IEstimativasRepositories {
    create(estimativa: Estimativas): Promise<Estimativas>;
    findAll(): Promise<Estimativas[]>;
    findByPropriedade(propriedadeId: string): Promise<Estimativas[]>;
    findById(id: string): Promise<Estimativas | null>;
    update(estimativa: Estimativas): Promise<Estimativas>;
    delete(id: string): Promise<void>;
}
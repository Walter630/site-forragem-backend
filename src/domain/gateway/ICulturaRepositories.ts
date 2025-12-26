import { Cultura } from "../entities/Cultura";
export interface ICulturaRepositories {
    create(cultura: Cultura): Promise<Cultura>;
    update(id: string, cultura: Cultura): Promise<Cultura | null>;
    delete(id: string): Promise<void>;
    findById(id: string): Promise<Cultura | null>;
    findAll(): Promise<Cultura[]>;
}
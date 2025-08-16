import { Cultura } from "../entities/Cultura";
export interface ICulturaRepositories {
    create(cultura: Cultura): Promise<Cultura>;
    update(id: number, cultura: Cultura): Promise<Cultura | null>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Cultura | null>;
    findAll(): Promise<Cultura[]>;
}
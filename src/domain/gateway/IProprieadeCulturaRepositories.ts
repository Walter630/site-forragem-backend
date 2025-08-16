import {PropriedadeCultura} from "../../domain/entities/PropriedadeCultura";

export interface IPropriedadeCulturaRepositories {
    create(propriedadeCultura: PropriedadeCultura): Promise<PropriedadeCultura>;
    update(propriedadeCultura: PropriedadeCultura): Promise<PropriedadeCultura>;
    delete(propriedadeCultura: PropriedadeCultura): Promise<PropriedadeCultura>;
    findById(id: number): Promise<PropriedadeCultura | null>;
    findAll(): Promise<PropriedadeCultura[]>
}
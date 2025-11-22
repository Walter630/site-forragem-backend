// src/aplication/dto/PropriedadeDto.ts

export interface CreatePropriedadeDTO {
    nomePropriedade: string;
    nomeResponsavel: string;
    latitude: number;
    longitude: number;

    adminId?: string | null;
    culturas?: string[];
    solos?: string[];
}

export interface UpdatePropriedadeDTO {
    nomePropriedade?: string;
    nomeResponsavel?: string;
    latitude?: number;
    longitude?: number;

    adminId?: string | null;
    culturas?: string[];
    solos?: string[];
}

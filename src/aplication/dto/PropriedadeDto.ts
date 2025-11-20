export interface CreatePropriedadeDTO {
    id?: string;
    nomePropriedade: string;
    nomeResponsavel: string;
    latitude: number;
    longitude: number;
    createdAt?: Date;
    updatedAt?: Date;
    adminId?: string;
}

export interface UpdatePropriedadeDTO {
    nomePropriedade?: string;
    nomeResponsavel?: string;
    latitude?: number;
    longitude?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
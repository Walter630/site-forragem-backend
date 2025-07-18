export interface CreatePropriedadeDTO {
    id?: number;
    nomePropriedade: string;
    nomeProprietario: string;
    latitude: number;
    longitude: number;
    altitude: number;
    simulacao?: string;
    createdAt?: Date;
    updatedAt?: Date;
    estimativas?: {
        id: number;
        valorTotal: number;
        descricao: string;
    }[];
    admin?: {
        id: number;
        nome: string;
    } | undefined;
    adminId?: number;
}
export interface UpdatePropriedadeDTO {
    nomePropriedade?: string;
    nomeProprietario?: string;
    latitude?: number;
    longitude?: number;
    altitude?: number;
    simulacao?: string;
    createdAt?: Date;
    updatedAt?: Date;
    estimativas?: {
        id: number;
        valorTotal: number;
        descricao: string;
    }[];
}
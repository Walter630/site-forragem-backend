export interface createEstimativa {
    id?: number;
    valorTotal: number;
    propriedade: {  
        id: number;
        nomePropriedade: string;
        nomeProprietario: string;
        latitude: number;
        longitude: number;
        altitude: number;
        admin?: { id: number; nome: string } | undefined;
        adminId?: number;
        simulacao?: string;
    };
    descricao: string;
    createdAt?: Date;
}

export interface UpdateEstimativaDTO {
    valorTotal?: number;
    propriedade?: {
        id?: number;
        nomePropriedade?: string;
        adminId?: number;
        simulacao?: string;
    };
    descricao?: string;
}
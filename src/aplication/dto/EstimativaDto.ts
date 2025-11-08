// src/application/dto/EstimativasDTO.ts

// DTO para criação
export interface CreateEstimativaDTO {
    valorTotal: number;

    propriedade: {
        id: string;
        nomePropriedade: string;
        nomeProprietario: string;
        latitude: number;
        longitude: number;
        altitude: number;
        admin?: { id: number; nome: string } | undefined;
        adminId?: string;
        simulacao?: string;
    };

    descricao: string | null;
    simulacaoId: string;

    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

// DTO para atualização
export interface UpdateEstimativaDTO {
    valorTotal?: number;

    propriedade?: {
        id?: string;
        nomePropriedade?: string;
        adminId?: string;
        simulacao?: string;
    };

    descricao?: string | null;
    simulacaoId?: string;
}

// DTO para retorno / listagem
export interface EstimativaDTO {
    id: string;
    valorTotal: number;

    propriedadeId: string;

    descricao: string | null;
    simulacaoId: string;

    createdAt: Date;
    updatedAt: Date | null;
    deletedAt?: Date | null;
}

// Caso você tenha estimativas mensais agregadas
export interface EstimativasPorMesDTO {
    id: string;
    mes: string;
    valor: number;
    propriedadeId: string;
    createdAt: Date;
    updatedAt: Date;
}

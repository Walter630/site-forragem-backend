// src/application/dto/EstimativasDTO.ts

// DTO para criação
export interface CreateEstimativaDTO {
    id?: string;
    valorTotal: number;
    propriedadeId: string;
    simulacaoId: string;
    descricao?: string | null;
    createdAt?: Date;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
}

// DTO para atualização
export interface UpdateEstimativaDTO {
    valorTotal?: number;
    descricao?: string | null;
    updatedAt?: Date;
}

// DTO para retorno / listagem
export interface EstimativaDTO {
    id: string;
    valorTotal: number;
    propriedadeId: string;
    simulacaoId: string;
    descricao: string | null;
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

// src/aplication/dto/EstimativasDTO.ts

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
    descricao: string | null; // já está ok
    createdAt?: Date;
    updatedAt?: Date | null; // <-- Adicione isso
    deletedAt?: Date | null; // <-- Se estiver usando também
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

export interface Estimativas {
  id: number;
  mes: string;
  valor: number;
  propriedadeId: number;
  createdAt: Date;
  updatedAt: Date;
}
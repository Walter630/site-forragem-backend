export interface CreateAdminDTO {
    nome: string;
    email: string;
    cpf: string;
    tipoUsuario: string;
    gerenteId?: string; // ID do gerente (quando funcionário é criado por um gerente)
}
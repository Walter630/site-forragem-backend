import { z } from "zod";

export const authenticateTipoUsuarioSchema = z.object({
    tipo: z.string().min(1, "Tipo de usuário é obrigatório"),
    descricao: z.string().optional(),
});

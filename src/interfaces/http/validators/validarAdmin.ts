import { z } from "zod";

// Função simples para validar CPF (aceita com ou sem máscara)
function isCPF(value: string) {
  return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || /^\d{11}$/.test(value);
}

// Função simples para validar email (regex básico)
function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const loginSchema = z.object({
  login: z.string().min(3, "O login deve ter pelo menos 3 caracteres").refine(
    (val) => isEmail(val) || isCPF(val),
    {
      message: "O login deve ser um email válido ou um CPF válido",
    }
  ),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const createAdminSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.email({ message: "E-mail inválido" }),
  role: z.enum(["admin", "user", "propriedade", "funcionario"]).optional(),
  propriedadeId: z.number().optional(),
  tipoUserId: z.number().optional(),
  cpf: z.string().min(11, "O CPF deve ter pelo menos 11 caracteres"),
});

export const updateAdminSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").optional(),
  email: z.email({ message: "E-mail inválido" }).optional(),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").optional(),
  role: z.enum(["admin", "user", "propriedade", "funcionario"]).optional(),
});

export const deleteAdminSchema = z.object({
  id: z.number().optional(),
});

export const findAdminSchema = z.object({
  id: z.number().optional(),
  email: z.email({ message: "E-mail inválido" }).optional(),
});


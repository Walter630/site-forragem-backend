import { PrismaClient } from "@prisma/client"


// Conexão com MongoDB via URL do .env
export const prisma = new PrismaClient();
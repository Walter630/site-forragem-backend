import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Token } from "../../../configs/utils/jwt/Token";

const tokenService = new Token();

export async function requireAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: "Token de autenticação ausente" });
      return;
    }

    const token = authHeader.split(" ")[1];
    const decoded = await tokenService.verifyAccessToken(token);

    const userId = decoded?.id;
    const role = decoded?.role;

    if (!userId || role !== "ADMIN") {
      res.status(403).json({ error: "Acesso permitido apenas para administradores" });
      return;
    }

    const user = await prisma.admin.findUnique({ where: { id: userId } });
    if (!user) {
      res.status(401).json({ error: "Administrador não encontrado" });
      return;
    }

    req.body.adminId = userId; // se quiser usar depois no controller
    next();
  } catch (err) {
    console.error("Erro ao verificar admin:", err);
    res.status(500).json({ error: "Falha na verificação de admin" });
  }
}

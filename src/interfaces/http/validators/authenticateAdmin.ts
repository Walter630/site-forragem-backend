import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";

export async function requireAdmin(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.body.user?.id;
    if (!userId) return res.status(401).json({ error: "Não autenticado" });

    const user = await prisma.admin.findFirst({
      where: { id: userId },
      include: { tipoUser: true },
    });

    if (!user || user.tipoUser?.tipo !== "ADMIN") {
      return res.status(403).json({ error: "Apenas administradores" });
    }

    next();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Falha na verificação de admin" });
  }
}
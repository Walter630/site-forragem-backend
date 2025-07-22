import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";

export async function requireAdmin(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const userId = req.body.user?.id;
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Token de autenticação ausente" });
      return;
    }

    if (!userId) {
      res.status(401).json({ error: "Não autenticado" });
      return; // ✅ encerra aqui
    }

    const user = await prisma.admin.findFirst({
      where: { id: userId },
      include: { tipoUser: true },
    });

    if (!user || user.tipoUser?.tipo !== "ADMIN" ) {
      res.status(403).json({ error: "Apenas administradores" });
      return; // ✅ encerra aqui
    }

    next(); // ✅ só continua se passou nos testes
  } catch (err) {
    console.error(err, "error");
    res.status(500).json({ error: "Falha na verificação de admin" });
  }
}

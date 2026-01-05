import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token ausente" });

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as any;
    (req as any).user = payload; // adiciona dados do usuário à request
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}

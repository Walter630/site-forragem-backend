import { Request, Response, NextFunction } from "express";
import { Token } from "../../../shared/utils/jwt/Token";

const token = new Token();

export async function verifyAccessToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const tokenValue = authHeader.split(" ")[1];
  try {
    const decoded = await token.verifyAccessToken(tokenValue);
    req.body.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ mensagem: "Token inválido" });
  }
}

export async function verifyRefreshToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const tokenValue = authHeader.split(" ")[1];
  try {
    const decoded = await token.verifyRefreshToken(tokenValue);
    req.body.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ mensagem: "Token inválido" });
  }
}
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export async function refreshTokenController(req: Request, res: Response) {
  const refreshToken = req.body.refreshToken; // ou via cookie seguro

  if (!refreshToken) {
    return res.status(401).json({ error: "Refresh token ausente" });
  }

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!);
    const newAccessToken = jwt.sign(
      { id: (payload as any).id, tipo: (payload as any).tipo },
      process.env.JWT_SECRET!,
      { expiresIn: "5m" }
    );

    res.json({ accessToken: newAccessToken });
  } catch (err) {
    res.status(401).json({ error: "Refresh token inválido ou expirado" });
  }
}

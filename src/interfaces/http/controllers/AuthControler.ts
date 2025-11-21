import { Request, Response } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import bcrypt from "bcrypt";
import { Token } from "../../../configs/utils/jwt/Token";
import { validarCPF } from "../../../configs/utils/CpfValidators"; // ajuste conforme seu projeto

const tokenService = new Token();

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    const { login, senha } = req.body;

    if (!login || !senha) {
      res.status(400).json({ error: "login e senha são obrigatórios" });
      return;
    }

    const somenteDigitos = login.replace(/[^^\d]/g, "");
    const isCPF = somenteDigitos.length === 11;
    if (isCPF && !validarCPF(somenteDigitos)) {
      res.status(400).json({ error: "CPF inválido" });
      return;
    }

    const admin = await prisma.admin.findFirst({
      where: { OR: [{ email: login }, { cpf: login }] },
    });

    if (!admin) {
      res.status(401).json({ error: "Usuário não encontrado" });
      return;
    }

    const senhaValida = await bcrypt.compare(senha, admin.senha);
    if (!senhaValida) {
      res.status(401).json({ error: "Senha inválida" });
      return;
    }

    const payload = {
      id: String(admin.id ?? ""),
      email: admin.email,
      role: admin.tipoUsuario ?? "ADMIN",
    };

    const tokens = tokenService.generateTokens(payload as any);

    console.log(tokens);
    const { senha: _, ...adminSemSenha } = (admin as any) || {};
    console.log(adminSemSenha);
    res.json({ admin: adminSemSenha, ...tokens });
    return;
  }

  async refresh(req: Request, res: Response): Promise<void> {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(401).json({ error: "Refresh token ausente" });
      return;
    }

    try {
      const tokens = await tokenService.renewTokens(refreshToken);
      res.json(tokens);
      return;
    } catch (err: any) {
      res.status(401).json({ error: err.message });
      return;
    }
  }

  async me(req: Request, res: Response): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: "Token ausente" });
      return;
    }

    try {
      const token = authHeader.split(" ")[1];
      const payload = await tokenService.verifyAccessToken(token);

      const admin = await prisma.admin.findUnique({
        where: { id: String(payload.id) },
        select: { id: true, nome: true, email: true, tipoUsuario: true },
      });

      if (!admin) {
        res.status(404).json({ error: "Usuário não encontrado" });
        return;
      }

      res.json({ user: admin });
      return;
    } catch (err) {
      res.status(401).json({ error: "Token inválido" });
      return;
    }
  }
}

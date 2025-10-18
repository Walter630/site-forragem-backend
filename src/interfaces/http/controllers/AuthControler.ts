import { Request, Response } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import bcrypt from "bcrypt";
import { Token } from "../../../configs/utils/jwt/Token";
import { validarCPF } from "../../../configs/utils/CpfValidators"; // ajuste conforme seu projeto

const tokenService = new Token();

export class AuthController {
  async login(req: Request, res: Response) {
    const { login, senha } = req.body;

    if (!login || !senha) {
      res.status(400).json({ error: "login e senha são obrigatórios" });
    } else {
      const somenteDigitos = login.replace(/[^\d]/g, '');
      const isCPF = somenteDigitos.length === 11;
      if (isCPF && !validarCPF(somenteDigitos)) {
        res.status(400).json({ error: "CPF inválido" });
      } else {
        const admin = await prisma.admin.findFirst({
          where: { OR: [{ email: login }, { cpf: login }] },
          include: { tipoUser: true },
        });

        if (!admin) {
          res.status(401).json({ error: "Usuário não encontrado" });
        } else {
          const senhaValida = await bcrypt.compare(senha, admin.senha);
          if (!senhaValida) {
            res.status(401).json({ error: "Senha inválida" });
          } else {
            const payload = {
              id: admin.id,
              email: admin.email,
              role: admin.tipoUser?.tipo || "ADMIN",
            };

            const tokens = tokenService.generateTokens(payload);
            const { senha: _, ...adminSemSenha } = admin;
            res.json({ admin: adminSemSenha, ...tokens });
          }
        }
      }
    }
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      res.status(401).json({ error: "Refresh token ausente" });
    } else {
      try {
        const tokens = await tokenService.renewTokens(refreshToken);
        res.json(tokens);
      } catch (err: any) {
        res.status(401).json({ error: err.message });
      }
    }
  }

  async me(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ error: "Token ausente" });
    } else {
      try {
        const token = authHeader.split(" ")[1];
        const payload = await tokenService.verifyAccessToken(token);

        const admin = await prisma.admin.findUnique({
          where: { id: payload.id },
          select: { id: true, nome: true, email: true, tipoUser: true },
        });

        if (!admin) {
          res.status(404).json({ error: "Usuário não encontrado" });
        } else {
          res.json({ user: admin });
        }
      } catch (err) {
        res.status(401).json({ error: "Token inválido" });
      }
    }
  }
}

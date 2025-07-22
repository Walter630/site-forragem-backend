import { Request, Response } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import bcrypt from "bcrypt";
import { Token } from "../../../configs/utils/jwt/Token";

const tokenService = new Token();

export class AuthController {
  async login(req: Request, res: Response) {
    console.log(req.body)
    const { login, senha } = req.body;
    console.log(login, senha)
    if (!login || !senha) {
      res.status(400).json({ error: "login e senha são obrigatórios" });
      return;
    }

    const admin = await prisma.admin.findFirst({
      where: {
        OR: [
          { email: login },
          { cpf: login },
        ],
      },
      include: { tipoUser: true },
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
      id: admin.id,
      email: admin.email,
      role: admin.tipoUser?.tipo || "ADMIN",
    };

    const tokens = tokenService.generateTokens(payload);

    // Opcional: remover a senha do objeto de retorno
    const { senha: _, ...adminSemSenha } = admin;

    res.json({ admin: adminSemSenha, ...tokens });
  }

  async refresh(req: Request, res: Response) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
       res.status(401).json({ error: "Refresh token ausente" });
    }

    try {
      const tokens = await tokenService.renewTokens(refreshToken);
      res.json(tokens);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }
}

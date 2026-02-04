import { Request, Response } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import bcrypt from "bcrypt";
import { Token } from "../../../configs/utils/jwt/Token";
import { validarCPF } from "../../../configs/utils/CpfValidators"; // ajuste conforme seu projeto

const tokenService = new Token();

export class AuthController {
    async login(req: Request, res: Response) {
        const { login, senha } = req.body;

        const usuario = await prisma.admin.findFirst({
            where: { OR: [{ email: login }, { cpf: login }] }
        });

        if (!usuario) {
             res.status(401).json({ error: "Usuário não encontrado" });
             return;
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if (!senhaValida) {
             res.status(401).json({ error: "Senha inválida" });
             return;
        }

        const payload = {
            id: usuario.id,
            email: usuario.email,
            cpf: usuario.cpf,
            role: usuario.tipoUsuario ?? "ADMIN"
        };

        const { accessToken, refreshToken } = tokenService.generateTokens(payload);

        // 🔥 ENVIA O REFRESH TOKEN EM COOKIE HTTPONLY
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // true em produção
            sameSite: "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        console.log("✅ Login bem sucedido, cookie de refresh token definido");

        const { senha: _, ...usuarioSemSenha } = usuario;

        res.json({
            admin: usuarioSemSenha,
            accessToken,
        });
    }



    async refresh(req: Request, res: Response) {
        console.log("🔄 Tentativa de refresh token");
        console.log("Cookies recebidos:", req.cookies);

        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            console.log("❌ Refresh token ausente nos cookies");
            res.status(401).json({ error: "Refresh token ausente" });
            return;
        }

        try {
            console.log("🔑 Validando refresh token...");
            const tokens = await tokenService.renewTokens(refreshToken);
            console.log("✅ Tokens renovados com sucesso");

            // 🔥 ATUALIZA O COOKIE COM O NOVO REFRESH TOKEN
            res.cookie("refreshToken", tokens.refreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production", // true em produção
                sameSite: "lax",
                path: "/",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.json({ accessToken: tokens.accessToken });
        } catch (error: any) {
            console.log("❌ Erro ao renovar token:", error.message);
            res.status(401).json({ error: "Refresh token inválido ou expirado" });
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
  async register(req: Request, res: Response): Promise<void> {

  }
}

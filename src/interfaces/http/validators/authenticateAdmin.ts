import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Token } from "../../../configs/utils/jwt/Token";

const tokenService = new Token();

export async function requireFuncionarioOrAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
             res.status(401).json({ error: "Token de autenticação ausente" });
            return;
        }

        const token = authHeader.split(" ")[1];
        const decoded = await tokenService.verifyAccessToken(token);

        if (!decoded?.id || !decoded.role) {
             res.status(403).json({ error: "Token inválido" });
            return;

        }

        // Permitindo apenas ADMIN ou FUNCIONARIO
        if (!["ADMIN", "USER"].includes(decoded.role)) {
             res.status(403).json({ error: "Acesso restrito a ADMIN ou FUNCIONARIO" });
            return;
        }

        // Verifica se o usuário realmente existe no banco
        const usuario = await prisma.admin.findUnique({ where: { id: String(decoded.id) } });

        if (!usuario) {
             res.status(401).json({ error: "Usuário não encontrado" });
            return;
        }

        // Adiciona o payload completo no request
        (req as any).user = decoded;
        next();

    } catch (err) {
        console.error("Erro ao verificar permissão:", err);
        res.status(500).json({ error: "Falha na verificação de permissões" });
        return;
    }
}

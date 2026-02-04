import { Request, Response, NextFunction } from "express";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Token } from "../../../configs/utils/jwt/Token";

const tokenService = new Token();

// Middleware genérico para verificar autenticação e roles permitidos
async function verifyAuth(
    req: Request,
    res: Response,
    next: NextFunction,
    allowedRoles: string[]
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
            res.status(401).json({ error: "Token inválido" });
            return;
        }

        // Verifica se o role do usuário está nos permitidos
        if (!allowedRoles.includes(decoded.role)) {
            res.status(403).json({ error: `Acesso restrito a: ${allowedRoles.join(", ")}` });
            return;
        }

        // Verifica se o usuário realmente existe no banco
        const usuario = await prisma.admin.findUnique({ where: { id: String(decoded.id) } });

        if (!usuario) {
            res.status(401).json({ error: "Usuário não encontrado" });
            return;
        }

        // Adiciona o payload completo no request
        (req as any).user = { ...decoded, gerenteId: usuario.gerenteId };
        next();

    } catch (err: any) {
        console.error("Erro ao verificar permissão:", err);

        // Se o erro for de token expirado/inválido, retorna 401 para o frontend fazer refresh
        if (err.message?.includes("Token") || err.message?.includes("token") || err.message?.includes("expirado") || err.message?.includes("inválido")) {
            res.status(401).json({ error: "Token expirado ou inválido. Faça refresh do token." });
            return;
        }

        res.status(500).json({ error: "Falha na verificação de permissões" });
        return;
    }
}

// ADMIN - Acesso total
export async function requireAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return verifyAuth(req, res, next, ["ADMIN"]);
}

// ADMIN ou GERENTE - Pode fazer simulações e cadastros
export async function requireAdminOrGerente(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return verifyAuth(req, res, next, ["ADMIN", "GERENTE"]);
}

// GERENTE - Pode gerenciar funcionários e fazer simulações
export async function requireGerente(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return verifyAuth(req, res, next, ["GERENTE"]);
}

// ADMIN, GERENTE ou FUNCIONARIO - Acesso a funcionalidades gerais
export async function requireFuncionarioOrAdmin(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return verifyAuth(req, res, next, ["ADMIN", "GERENTE", "FUNCIONARIO"]);
}

// Qualquer usuário autenticado
export async function requireAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    return verifyAuth(req, res, next, ["ADMIN", "GERENTE", "FUNCIONARIO", "USER"]);
}


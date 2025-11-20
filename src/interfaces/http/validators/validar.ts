import { Request, Response, NextFunction } from "express";
import { ZodType, z } from "zod";

export function validar(schema: ZodType<any>, fonte: "body" | "params" | "query" = "body") {
    return (req: Request, res: Response, next: NextFunction): void => {
        const dados = req[fonte];
        const resultado = schema.safeParse(dados);

        if (!resultado.success) {
            const erros = resultado.error.format();
            res.status(400).json({
                mensagem: "Erro de validação",
                erros,
            });
            return;
        }

        req[fonte] = resultado.data as any;
        next();
    };
}

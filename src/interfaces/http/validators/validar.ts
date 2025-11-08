import { Request, Response, NextFunction } from "express";
import { ZodType, z } from "zod";

export function validar(schema: ZodType<any>, fonte: "body" | "params" | "query" = "body") {
    return (req: Request, res: Response, next: NextFunction) => {
        const dados = req[fonte];
        const resultado = schema.safeParse(dados);

        if (!resultado.success) {
            const erros = resultado.error.format(); // mais legível
            return res.status(400).json({
                mensagem: "Erro de validação",
                erros,
            }); // <-- return aqui impede next()
        }

        req[fonte] = resultado.data as any;
        next(); // só é chamado se passou na validação
    };
}

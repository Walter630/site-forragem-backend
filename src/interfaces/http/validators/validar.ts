import { Request, Response, NextFunction } from "express";
import { ZodType, z } from "zod";

export function validar(schema: ZodType<any>, fonte: "body" | "params" | "query" = "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const dados = req[fonte];
    const resultado = schema.safeParse(dados);

    if (!resultado.success) {
      const erros = z.treeifyError(resultado.error);
       res.status(400).json({
        mensagem: "Erro de validação" + erros,
        erros,
      });
    }

    req[fonte] = resultado.data as any;
    next();
  };
}

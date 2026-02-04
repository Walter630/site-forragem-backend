import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { Request, Response } from "express";

export class PropriedadeController {
    constructor(private readonly service: PropriedadeServices) {}

    // Listar todas (para admin) ou listar sem autenticação
    async listar(req: Request, res: Response) {
        try {
            res.json(await this.service.findAll());
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    // Listar propriedades filtradas pelo usuário logado
    async listarPorUsuario(req: Request, res: Response) {
        try {
            const user = (req as any).user;

            if (!user?.id) {
                res.status(401).json({ erro: "Usuário não autenticado" });
                return;
            }

            const userContext = {
                id: user.id,
                role: user.role,
                gerenteId: user.gerenteId
            };

            const propriedades = await this.service.findByUser(userContext);
            res.json(propriedades);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const user = (req as any).user;
            const propriedade = await this.service.findById(req.params.id);

            if (!propriedade) {
                res.status(404).json({ erro: "Propriedade não encontrada" });
                return;
            }

            // Se usuário autenticado, verifica permissão
            if (user?.id) {
                const userContext = {
                    id: user.id,
                    role: user.role,
                    gerenteId: user.gerenteId
                };

                const canAccess = await this.service.userCanAccess(req.params.id, userContext);
                if (!canAccess) {
                    res.status(403).json({ erro: "Você não tem acesso a esta propriedade" });
                    return;
                }
            }

            res.json(propriedade);
        } catch (err: any) {
            res.status(404).json({ erro: err.message });
        }
    }

    async create(req: Request, res: Response) {
        try {
            const user = (req as any).user;

            if (!user?.id) {
                res.status(401).json({ erro: "Usuário não autenticado" });
                return;
            }

            const userContext = {
                id: user.id,
                role: user.role,
                gerenteId: user.gerenteId
            };

            // Usa o método que vincula ao usuário automaticamente
            const created = await this.service.createWithUser(req.body, userContext);
            res.status(201).json(created);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const user = (req as any).user;

            if (user?.id) {
                const userContext = {
                    id: user.id,
                    role: user.role,
                    gerenteId: user.gerenteId
                };

                const canAccess = await this.service.userCanAccess(req.params.id, userContext);
                if (!canAccess) {
                    res.status(403).json({ erro: "Você não tem permissão para editar esta propriedade" });
                    return;
                }
            }

            const updated = await this.service.update(req.params.id, req.body);
            res.json(updated);
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const user = (req as any).user;

            if (user?.id) {
                const userContext = {
                    id: user.id,
                    role: user.role,
                    gerenteId: user.gerenteId
                };

                const canAccess = await this.service.userCanAccess(req.params.id, userContext);
                if (!canAccess) {
                    res.status(403).json({ erro: "Você não tem permissão para excluir esta propriedade" });
                    return;
                }
            }

            await this.service.delete(req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(500).json({ erro: err.message });
        }
    }
}

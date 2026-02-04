import { CulturaController } from "../controllers/CulturaController";
import { CulturaServices } from "../../../aplication/services/CulturaServices";
import { Api } from "./Api";
import {CulturaRepositories} from "../../../infra/repositories/CulturaRepositores";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { requireFuncionarioOrAdmin, requireAdmin } from "../validators/authenticateAdmin";
import { PropriedadeRepository } from "../../../infra/repositories/PropriedadeRepositories";

export class CulturaRoutes {
    private readonly culturaController: CulturaController;
    constructor(private readonly api: Api) {
        const culturaRepo = CulturaRepositories.create(prisma);
        const propriedadeRepo = new PropriedadeRepository(prisma);
        this.culturaController = new CulturaController(new CulturaServices(culturaRepo, propriedadeRepo));
    }

    public static build(api: Api) {
        const culturaRoutes = new CulturaRoutes(api);
        culturaRoutes.addRotas();
    }

    private addRotas() {
        /**
         * @swagger
         * /cultura/minhas:
         *   get:
         *     summary: Lista culturas usadas nas propriedades do usuário logado
         *     tags: [Cultura]
         *     security:
         *       - bearerAuth: []
         *     responses:
         *       200:
         *         description: Lista de culturas do usuário
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/cultura/minhas", "GET", requireFuncionarioOrAdmin, this.culturaController.listarPorUsuario.bind(this.culturaController));

        /**
         * @swagger
         * /cultura:
         *   post:
         *     summary: Cria uma cultura
         *     tags: [Cultura]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               nome:
         *                 type: string
         *               descricao:
         *                 type: string
         *     responses:
         *       201:
         *         description: Cultura criada
         */
        this.api.addRotas("/cultura", "POST", this.culturaController.create.bind(this.culturaController));

        /**
         * @swagger
         * /cultura:
         *   get:
         *     summary: Lista todas as culturas
         *     tags: [Cultura]
         *     responses:
         *       200:
         *         description: Lista de culturas
         */
        this.api.addRotas("/cultura", "GET", this.culturaController.findAll.bind(this.culturaController));

        /**
         * @swagger
         * /cultura/{id}:
         *   get:
         *     summary: Busca cultura por ID
         *     tags: [Cultura]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Cultura encontrada
         *       404:
         *         description: Não encontrada
         */
        this.api.addRotas("/cultura/:id", "GET", this.culturaController.findById.bind(this.culturaController));

        /**
         * @swagger
         * /cultura:
         *   put:
         *     summary: Atualiza uma cultura
         *     tags: [Cultura]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               id:
         *                 type: string
         *               nome:
         *                 type: string
         *               descricao:
         *                 type: string
         *     responses:
         *       200:
         *         description: Cultura atualizada
         */
        this.api.addRotas("/cultura", "PUT", this.culturaController.update.bind(this.culturaController));

        /**
         * @swagger
         * /cultura/{id}:
         *   delete:
         *     summary: Deleta uma cultura
         *     tags: [Cultura]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Cultura deletada
         */
        this.api.addRotas("/cultura/:id", "DELETE", this.culturaController.delete.bind(this.culturaController));

    }
}


import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PrecipitacaoController } from "../controllers/PrecipitacaoController";
import { PrecipitacaoServices } from "../../../aplication/services/PrecipitacaoServices";
import { PrecipitacaoRepositories } from "../../../infra/repositories/PrecipitacaoRepositories";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";


export class PrecipitacaoRoutes {
    private readonly precipitacaoController: PrecipitacaoController;
    constructor(private readonly api: Api) {
        this.precipitacaoController = new PrecipitacaoController(new PrecipitacaoServices(new PrecipitacaoRepositories(prisma)));
    }

    static build(api: Api) {
        const instancia = new PrecipitacaoRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        /**
         * @swagger
         * /precipitacao:
         *   get:
         *     summary: Lista todas as precipitações
         *     tags: [Precipitação]
         *     responses:
         *       200:
         *         description: Lista de precipitações
         */
        this.api.addRotas("/precipitacao", "GET", this.precipitacaoController.findAll.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   get:
         *     summary: Busca precipitação por ID
         *     tags: [Precipitação]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Precipitação encontrada
         *       404:
         *         description: Não encontrada
         */
        this.api.addRotas("/precipitacao/:id", "GET", this.precipitacaoController.findById.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao:
         *   post:
         *     summary: Cria precipitação (Admin)
         *     tags: [Precipitação]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *     responses:
         *       201:
         *         description: Precipitação criada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/precipitacao", "POST", requireFuncionarioOrAdmin, this.precipitacaoController.create.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   put:
         *     summary: Atualiza precipitação (Admin)
         *     tags: [Precipitação]
         *     security:
         *       - bearerAuth: []
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *     responses:
         *       200:
         *         description: Precipitação atualizada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/precipitacao/:id", "PUT", requireFuncionarioOrAdmin, this.precipitacaoController.update.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   delete:
         *     summary: Deleta precipitação (Admin)
         *     tags: [Precipitação]
         *     security:
         *       - bearerAuth: []
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Precipitação deletada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/precipitacao/:id", "DELETE", requireFuncionarioOrAdmin, this.precipitacaoController.delete.bind(this.precipitacaoController));
    }
}
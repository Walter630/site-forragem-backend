import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PropriedadeController } from "../controllers/PropriedadeController";
import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { PropriedadeRepository } from "../../../infra/repositories/PropriedadeRepositories";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";

export class PropriedadeRoutes {
    private readonly controller: PropriedadeController;

    constructor(private readonly api: Api) {
        this.controller = new PropriedadeController(
            new PropriedadeServices(
                new PropriedadeRepository(prisma)
            )
        );
    }

    static build(api: Api) {
        const inst = new PropriedadeRoutes(api);
        inst.addRotas();
        return inst;
    }

    addRotas() {
        /**
         * @swagger
         * /propriedade:
         *   get:
         *     summary: Lista todas as propriedades
         *     tags: [Propriedade]
         *     responses:
         *       200:
         *         description: Lista de propriedades
         */
        this.api.addRotas("/propriedade", "GET", this.controller.listar.bind(this.controller));

        /**
         * @swagger
         * /propriedade/{id}:
         *   get:
         *     summary: Busca propriedade por ID
         *     tags: [Propriedade]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Propriedade encontrada
         *       404:
         *         description: Não encontrada
         */
        this.api.addRotas("/propriedade/:id", "GET", this.controller.findById.bind(this.controller));

        /**
         * @swagger
         * /propriedade:
         *   post:
         *     summary: Cria propriedade (Admin)
         *     tags: [Propriedade]
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
         *         description: Propriedade criada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/propriedade", "POST", requireFuncionarioOrAdmin, this.controller.create.bind(this.controller));

        /**
         * @swagger
         * /propriedade/{id}:
         *   put:
         *     summary: Atualiza propriedade (Admin)
         *     tags: [Propriedade]
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
         *         description: Propriedade atualizada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/propriedade/:id", "PUT", requireFuncionarioOrAdmin, this.controller.update.bind(this.controller));

        /**
         * @swagger
         * /propriedade/{id}:
         *   delete:
         *     summary: Deleta propriedade (Admin)
         *     tags: [Propriedade]
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
         *         description: Propriedade deletada
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/propriedade/:id", "DELETE", requireFuncionarioOrAdmin, this.controller.delete.bind(this.controller));
    }
}

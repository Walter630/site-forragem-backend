
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { SoloController } from "../controllers/SoloController";
import { SoloServices } from "../../../aplication/services/SoloServices";
import { SoloRepositories } from "../../../infra/repositories/SoloRepositories";

export class SoloRoutes {
    private readonly soloController: SoloController;
    constructor(private readonly api: Api) {
        this.soloController = new SoloController(new SoloServices(new SoloRepositories(prisma)));
    }

    static build(api: Api) {
        const instancia = new SoloRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        /**
         * @swagger
         * /solo:
         *   get:
         *     summary: Lista todos os solos cadastrados
         *     tags: [Solo]
         *     responses:
         *       200:
         *         description: Lista de solos
         */
        this.api.addRotas("/solo", "GET", this.soloController.findAll.bind(this.soloController));

        /**
         * @swagger
         * /solo/{id}:
         *   get:
         *     summary: Busca solo pelo ID
         *     tags: [Solo]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Solo encontrado
         *       404:
         *         description: Não encontrado
         */
        this.api.addRotas("/solo/:id", "GET", this.soloController.findById.bind(this.soloController));

        /**
         * @swagger
         * /solo:
         *   post:
         *     summary: Cria um tipo de solo
         *     tags: [Solo]
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
         *         description: Solo criado
         */
        this.api.addRotas("/solo", "POST", this.soloController.create.bind(this.soloController));

        /**
         * @swagger
         * /solo/{id}:
         *   put:
         *     summary: Atualiza um tipo de solo
         *     tags: [Solo]
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
         *         description: Solo atualizado
         */
        this.api.addRotas("/solo/:id", "PUT", this.soloController.update.bind(this.soloController));

        /**
         * @swagger
         * /solo/{id}:
         *   delete:
         *     summary: Remove um tipo de solo
         *     tags: [Solo]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Solo removido
         */
        this.api.addRotas("/solo/:id", "DELETE", this.soloController.delete.bind(this.soloController));
    }
}
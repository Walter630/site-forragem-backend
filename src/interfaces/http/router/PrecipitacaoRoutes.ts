import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PrecipitacaoController } from "../controllers/PrecipitacaoController";
import { PrecipitacaoServices } from "../../../aplication/services/PrecipitacaoServices";
import { PrecipitacaoRepositories } from "../../../infra/repositories/PrecipitacaoRepositories";
import { requireAdmin } from "../validators/authenticateAdmin";


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
         *     tags: [Precipitacao]
         *     responses:
         *       200:
         *         description: Lista retornada com sucesso
         */
        this.api.addRotas("/precipitacao", "GET", this.precipitacaoController.findAll.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   get:
         *     summary: Busca precipitação por ID
         *     tags: [Precipitacao]
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Retornado com sucesso
         */
        this.api.addRotas("/precipitacao/:id", "GET", this.precipitacaoController.findById.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao:
         *   post:
         *     summary: Cria precipitação (Admin)
         *     tags: [Precipitacao]
         *     responses:
         *       201:
         *         description: Criado com sucesso
         */
        this.api.addRotas("/precipitacao", "POST", requireAdmin, this.precipitacaoController.create.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   put:
         *     summary: Atualiza precipitação (Admin)
         *     tags: [Precipitacao]
         */
        this.api.addRotas("/precipitacao/:id", "PUT", requireAdmin, this.precipitacaoController.update.bind(this.precipitacaoController));

        /**
         * @swagger
         * /precipitacao/{id}:
         *   delete:
         *     summary: Deleta precipitação (Admin)
         *     tags: [Precipitacao]
         */
        this.api.addRotas("/precipitacao/:id", "DELETE", requireAdmin, this.precipitacaoController.delete.bind(this.precipitacaoController));
    }
}
import { EstimativaController } from "../controllers/EstimativaController";
import { EstimativaServices } from "../../../aplication/services/EstimativasServices";
import { EstimativasRepositories } from "../../../infra/repositories/EstimativasRepositories";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
export class EstimativaRoutes {
    private readonly estimativaController: EstimativaController

    constructor(private readonly api: Api) {
        this.estimativaController = new EstimativaController(new EstimativaServices(new EstimativasRepositories(prisma)));
    }

    static build(api: Api) {
        const routes = new EstimativaRoutes(api);
        routes.addRotas();
    }

    addRotas() {
        /**
         * @swagger
         * /api/estimativas/grafico:
         *   get:
         *     summary: Retorna gráfico das estimativas
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas/grafico", "GET", this.estimativaController.getGrafico.bind(this.estimativaController));

        /**
         * @swagger
         * /api/estimativas:
         *   get:
         *     summary: Lista todas as estimativas
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas", "GET", this.estimativaController.findAll.bind(this.estimativaController));

        /**
         * @swagger
         * /api/estimativas/{id}:
         *   get:
         *     summary: Busca estimativa por ID
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas/:id", "GET", this.estimativaController.findById.bind(this.estimativaController));

        /**
         * @swagger
         * /api/estimativas:
         *   post:
         *     summary: Cria uma estimativa
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas", "POST", this.estimativaController.criar.bind(this.estimativaController));

        /**
         * @swagger
         * /api/estimativas/{id}:
         *   put:
         *     summary: Atualiza uma estimativa
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas/:id", "PUT", this.estimativaController.update.bind(this.estimativaController));

        /**
         * @swagger
         * /api/estimativas/{id}:
         *   delete:
         *     summary: Deleta uma estimativa
         *     tags: [Estimativas]
         */
        this.api.addRotas("/estimativas/:id", "DELETE", this.estimativaController.delete.bind(this.estimativaController));

    }
}


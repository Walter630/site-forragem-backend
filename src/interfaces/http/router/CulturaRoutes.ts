import { CulturaController } from "../controllers/CulturaController";
import { CulturaServices } from "../../../aplication/services/CulturaServices";
import { Api } from "./Api";
import {CulturaRepositories} from "../../../infra/repositories/CulturaRepositores";
import { prisma } from "../../../infra/prisma/PrismaClient";

export class CulturaRoutes {
    private readonly culturaController: CulturaController;
    constructor(private readonly api: Api) {
        this.culturaController = new CulturaController(new CulturaServices(CulturaRepositories.create(prisma)));
    }

    public static build(api: Api) {
        const culturaRoutes = new CulturaRoutes(api);
        culturaRoutes.addRotas();
    }

    private addRotas() {
        /**
         * @swagger
         * /api/cultura:
         *   post:
         *     summary: Cria uma cultura
         *     tags: [Cultura]
         */
        this.api.addRotas("/cultura", "POST", this.culturaController.create.bind(this.culturaController));

        /**
         * @swagger
         * /api/cultura:
         *   get:
         *     summary: Lista todas as culturas
         *     tags: [Cultura]
         */
        this.api.addRotas("/cultura", "GET", this.culturaController.findAll.bind(this.culturaController));

        /**
         * @swagger
         * /api/cultura/{id}:
         *   get:
         *     summary: Busca cultura por ID
         *     tags: [Cultura]
         */
        this.api.addRotas("/cultura/:id", "GET", this.culturaController.findById.bind(this.culturaController));

        /**
         * @swagger
         * /api/cultura:
         *   put:
         *     summary: Atualiza uma cultura
         *     tags: [Cultura]
         */
        this.api.addRotas("/cultura", "PUT", this.culturaController.update.bind(this.culturaController));

        /**
         * @swagger
         * /api/cultura/{id}:
         *   delete:
         *     summary: Deleta uma cultura
         *     tags: [Cultura]
         */
        this.api.addRotas("/cultura/:id", "DELETE", this.culturaController.delete.bind(this.culturaController));

    }
}


import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PropriedadeController } from "../controllers/PropriedadeController";
import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { PropriedadeRepositories } from "../../../infra/repositories/PropriedadeRepositories";
import { requireAdmin } from "../validators/authenticateAdmin";

/**
 * @swagger
 * tags:
 *   name: Propriedade
 *   description: Gerenciamento de propriedades rurais
 */
export class PropriedadeRoutes {
    private readonly propriedadeController: PropriedadeController;
    constructor(private readonly api: Api) {
        this.propriedadeController = new PropriedadeController(new PropriedadeServices(new PropriedadeRepositories(prisma)));
    }

    static build(api: Api) {
        const instancia = new PropriedadeRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        /**
         * @swagger
         * /propriedade:
         *   get:
         *     summary: Lista todas as propriedades
         *     tags: [Propriedade]
         */
        this.api.addRotas("/propriedade", "GET", this.propriedadeController.listar.bind(this.propriedadeController));

        /**
         * @swagger
         * /propriedade/{id}:
         *   get:
         *     summary: Busca propriedade pelo ID
         *     tags: [Propriedade]
         */
        this.api.addRotas("/propriedade/:id", "GET", this.propriedadeController.findById.bind(this.propriedadeController));

        /**
         * @swagger
         * /propriedade:
         *   post:
         *     summary: Cria uma nova propriedade (ADMIN)
         *     tags: [Propriedade]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               nome:
         *                 type: string
         *               cpf:
         *                 type: string
         *               tipoUsuario:
         *                 type: string
         *             example:
         *               nome: "John Doe"
         *               cpf: "12345678901"
         *               tipoUsuario: "ADMIN"
         *     responses:
         *       200:
         *         description: Propriedade criada com sucesso
         *       401:
         *         description: Usuário não autenticado
         *       403:
         *         description: Usuário não autorizado
         *
         */
        this.api.addRotas("/propriedade", "POST", requireAdmin, this.propriedadeController.create.bind(this.propriedadeController));

        /**
         * @swagger
         * /propriedade/{id}:
         *   put:
         *     summary: Atualiza uma propriedade (ADMIN)
         *     tags: [Propriedade]
         *     security:
         *       - bearerAuth: []
         */
        this.api.addRotas("/propriedade/:id", "PUT", requireAdmin, this.propriedadeController.update.bind(this.propriedadeController));

        /**
         * @swagger
         * /propriedade/{id}:
         *   delete:
         *     summary: Remove uma propriedade (ADMIN)
         *     tags: [Propriedade]
         *     security:
         *       - bearerAuth: []
         */
        this.api.addRotas("/propriedade/:id", "DELETE", requireAdmin, this.propriedadeController.delete.bind(this.propriedadeController));
    }
}
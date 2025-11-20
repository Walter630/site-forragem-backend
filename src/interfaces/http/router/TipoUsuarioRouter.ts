import { TipoUsuarioServices } from "../../../aplication/services/TipoUsuarioServices";
import { TipoUsuarioController } from "../controllers/TipoUsuarioController";
import TipoUsuarioRepositoryPrisma from "../../../infra/repositories/TipoUsuarioRepositories";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { validar } from "../validators/validar";
import { authenticateTipoUsuarioSchema } from "../validators/AuthenticateTipoUsuario";

export class TipoUsuarioRouter {
    private readonly tipoUsuarioController: TipoUsuarioController;
    constructor(private readonly api: Api) {
        this.tipoUsuarioController = new TipoUsuarioController(new TipoUsuarioServices(TipoUsuarioRepositoryPrisma.create(prisma)));
    }

    static build(api: Api) {
        const instancia = new TipoUsuarioRouter(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        /**
         * @swagger
         * /tipos-usuarios:
         *   get:
         *     summary: Lista todos os tipos de usuário
         *     tags: [TipoUsuario]
         */
        this.api.addRotas("/tipos-usuarios", "GET", this.tipoUsuarioController.findAll.bind(this.tipoUsuarioController));

        /**
         * @swagger
         * /tipos-usuarios/{id}:
         *   get:
         *     summary: Busca tipo de usuário pelo ID
         *     tags: [TipoUsuario]
         */
        this.api.addRotas("/tipos-usuarios/:id", "GET", this.tipoUsuarioController.findById.bind(this.tipoUsuarioController));

        /**
         * @swagger
         * /tipos-usuarios:
         *   post:
         *     summary: Cria um tipo de usuário
         *     tags: [TipoUsuario]
         */
        this.api.addRotas("/tipos-usuarios", "POST", validar(authenticateTipoUsuarioSchema), this.tipoUsuarioController.create.bind(this.tipoUsuarioController));

        /**
         * @swagger
         * /tipos-usuarios/{id}:
         *   put:
         *     summary: Atualiza um tipo de usuário
         *     tags: [TipoUsuario]
         */
        this.api.addRotas("/tipos-usuarios/:id", "PUT", validar(authenticateTipoUsuarioSchema), this.tipoUsuarioController.update.bind(this.tipoUsuarioController));

        /**
         * @swagger
         * /tipos-usuarios/{id}:
         *   delete:
         *     summary: Remove um tipo de usuário
         *     tags: [TipoUsuario]
         */
        this.api.addRotas("/tipos-usuarios/:id", "DELETE", this.tipoUsuarioController.delete.bind(this.tipoUsuarioController));
    }
}
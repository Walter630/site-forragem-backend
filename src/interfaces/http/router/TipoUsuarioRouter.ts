import { TipoUsuarioServices } from "../../../aplication/services/TipoUsuarioServices";
import { TipoUsuarioController } from "../controllers/TipoUsuarioController";
import TipoUsuarioRepositoryPrisma from "../../../infra/repositories/TipoUsuarioRepositories";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { verifyAccessToken } from "../middlewares/VerifyToken";
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
        this.api.addRotas("/tipos-usuarios", "GET",  this.tipoUsuarioController.findAll.bind(this.tipoUsuarioController));
        this.api.addRotas("/tipos-usuarios/:id", "GET",  this.tipoUsuarioController.findById.bind(this.tipoUsuarioController));
        this.api.addRotas("/tipos-usuarios", "POST", validar(authenticateTipoUsuarioSchema), this.tipoUsuarioController.create.bind(this.tipoUsuarioController));
        this.api.addRotas("/tipos-usuarios/:id", "PUT",  validar(authenticateTipoUsuarioSchema), this.tipoUsuarioController.update.bind(this.tipoUsuarioController));
        this.api.addRotas("/tipos-usuarios/:id", "DELETE",  this.tipoUsuarioController.delete.bind(this.tipoUsuarioController));
    }
}
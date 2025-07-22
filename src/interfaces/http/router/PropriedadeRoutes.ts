import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PropriedadeController } from "../controllers/PropriedadeController";
import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { PropriedadeRepositories } from "../../../infra/repositories/PropriedadeRepositories";
import { requireAdmin } from "../validators/authenticateAdmin";


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
        this.api.addRotas("/propriedade", "GET",  this.propriedadeController.listar.bind(this.propriedadeController));
        this.api.addRotas("/propriedade/:id", "GET",  this.propriedadeController.findById.bind(this.propriedadeController));
        this.api.addRotas("/propriedade", "POST", requireAdmin, this.propriedadeController.create.bind(this.propriedadeController));
        this.api.addRotas("/propriedade/:id", "PUT", requireAdmin, this.propriedadeController.update.bind(this.propriedadeController));
        this.api.addRotas("/propriedade/:id", "DELETE", requireAdmin, this.propriedadeController.delete.bind(this.propriedadeController));
    }
}

import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { HistoricoController } from "../controllers/HistoricoController";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";

export class HistoricoRoutes {
    private readonly historicoController: HistoricoController;
    constructor(private readonly api: Api) {
        this.historicoController = new HistoricoController(new HistoricoServices(new HistoricoRepositories(prisma)));
    }

    static build(api: Api) {
        const instancia = new HistoricoRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        this.api.addRotas("/historico", "GET",  this.historicoController.historico.bind(this.historicoController));
        this.api.addRotas("/historico/:id", "GET",  this.historicoController.findById.bind(this.historicoController));
        this.api.addRotas("/historico", "POST", this.historicoController.create.bind(this.historicoController));
        this.api.addRotas("/historico/:id", "PUT",  this.historicoController.update.bind(this.historicoController));
        this.api.addRotas("/historico/:id", "DELETE",  this.historicoController.deleteByPropriedadeId.bind(this.historicoController));
    }
}
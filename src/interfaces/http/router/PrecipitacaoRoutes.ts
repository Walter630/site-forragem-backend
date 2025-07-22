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
        this.api.addRotas("/precipitacao", "GET",  this.precipitacaoController.findAll.bind(this.precipitacaoController));
        this.api.addRotas("/precipitacao/:id", "GET",  this.precipitacaoController.findById.bind(this.precipitacaoController));
        this.api.addRotas("/precipitacao", "POST", requireAdmin, this.precipitacaoController.create.bind(this.precipitacaoController));
        this.api.addRotas("/precipitacao/:id", "PUT", requireAdmin, this.precipitacaoController.update.bind(this.precipitacaoController));
        this.api.addRotas("/precipitacao/:id", "DELETE", requireAdmin, this.precipitacaoController.delete.bind(this.precipitacaoController));
    }
}
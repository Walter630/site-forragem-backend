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
        this.api.addRotas("/estimativas", "GET", this.estimativaController.findAll.bind(this.estimativaController));
        this.api.addRotas("/estimativas/:id", "GET", this.estimativaController.findById.bind(this.estimativaController));
        this.api.addRotas("/estimativas", "POST", this.estimativaController.criar.bind(this.estimativaController));
        this.api.addRotas("/estimativas/:id", "PUT", this.estimativaController.update.bind(this.estimativaController));
        this.api.addRotas("/estimativas/:id", "DELETE", this.estimativaController.delete.bind(this.estimativaController));
    }
}

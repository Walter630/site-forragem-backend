
import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { SoloController } from "../controllers/SoloController";
import { SoloServices } from "../../../aplication/services/SoloServices";
import { SoloRepositories } from "../../../infra/repositories/SoloRepositories";

export class SoloRoutes {
    private readonly soloController: SoloController;
    constructor(private readonly api: Api) {
        this.soloController = new SoloController(new SoloServices(new SoloRepositories(prisma)));
    }

    static build(api: Api) {
        const instancia = new SoloRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    addRotas() {
        this.api.addRotas("/solo", "GET",  this.soloController.getAll.bind(this.soloController));
        this.api.addRotas("/solo/:id", "GET",  this.soloController.findById.bind(this.soloController));
        this.api.addRotas("/solo", "POST", this.soloController.create.bind(this.soloController));
        this.api.addRotas("/solo/:id", "PUT",  this.soloController.update.bind(this.soloController));
        this.api.addRotas("/solo/:id", "DELETE",  this.soloController.delete.bind(this.soloController));
    }
}
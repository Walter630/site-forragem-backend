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
        this.api.addRotas("/cultura", "POST",  this.culturaController.create.bind(this.culturaController));
        this.api.addRotas("/cultura", "GET",  this.culturaController.findAll.bind(this.culturaController));
        this.api.addRotas("/cultura/:id", "GET",  this.culturaController.findById.bind(this.culturaController));
        this.api.addRotas("/cultura", "PUT",  this.culturaController.update.bind(this.culturaController));
        this.api.addRotas("/cultura/:id", "DELETE",  this.culturaController.delete.bind(this.culturaController));
    }
}


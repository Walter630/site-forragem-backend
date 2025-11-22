import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { PropriedadeController } from "../controllers/PropriedadeController";
import { PropriedadeServices } from "../../../aplication/services/PropriedadeServices";
import { PropriedadeRepository } from "../../../infra/repositories/PropriedadeRepositories";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";

export class PropriedadeRoutes {
    private readonly controller: PropriedadeController;

    constructor(private readonly api: Api) {
        this.controller = new PropriedadeController(
            new PropriedadeServices(
                new PropriedadeRepository(prisma)
            )
        );
    }

    static build(api: Api) {
        const inst = new PropriedadeRoutes(api);
        inst.addRotas();
        return inst;
    }

    addRotas() {
        this.api.addRotas("/propriedade", "GET", this.controller.listar.bind(this.controller));
        this.api.addRotas("/propriedade/:id", "GET", this.controller.findById.bind(this.controller));

        this.api.addRotas("/propriedade", "POST", requireFuncionarioOrAdmin, this.controller.create.bind(this.controller));
        this.api.addRotas("/propriedade/:id", "PUT", requireFuncionarioOrAdmin, this.controller.update.bind(this.controller));
        this.api.addRotas("/propriedade/:id", "DELETE", requireFuncionarioOrAdmin, this.controller.delete.bind(this.controller));
    }
}

import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimulacaoRepositories } from "../../../infra/repositories/SimulacaoRepositories";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { SimulacaoController } from "../controllers/SimulacaoController";
import { Api } from "./Api";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";

export class SimulacaoRoutes {
    private simulacaoController: SimulacaoController;

    constructor(private api: Api) {
        const simulacaoRepository = new SimulacaoRepositories(prisma);
        const simulacaoService = new SimulacaoServices(simulacaoRepository, new HistoricoServices( ), new HistoricoRepositories(prisma), new PrecipitacaoRepositories(prisma));

        this.simulacaoController = new SimulacaoController(simulacaoService);
    }

    static build(api: Api) {
        const instancia = new SimulacaoRoutes(api);
        instancia.addRoutes();
    }

    private addRoutes() {
        this.api.addRotas("/simulacao", "POST", this.simulacaoController.simular.bind(this.simulacaoController));
        this.api.addRotas("/simulacao/historico", "GET", this.simulacaoController.historico.bind(this.simulacaoController));
    }
}

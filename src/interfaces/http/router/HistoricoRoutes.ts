import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { HistoricoController } from "../controllers/HistoricoController";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";
import { requireAdmin } from "../validators/authenticateAdmin";
import { SimulacaoRepositories } from "../../../infra/repositories/SimulacaoRepositories";
import { PDFServices } from "../../../aplication/services/PdfServices";

export class HistoricoRoutes {
    private readonly historicoController: HistoricoController;

    constructor(private readonly api: Api) {
        const historicoRepo = new HistoricoRepositories(prisma);
        const pdfServices = new PDFServices();
        const historicoService = new HistoricoServices(pdfServices, historicoRepo);
        this.historicoController = new HistoricoController(historicoService);
    }


    static build(api: Api) {
        const instancia = new HistoricoRoutes(api);
        instancia.addRotas();
        return instancia;
    }

    private addRotas() {
        this.api.addRotas("/historico", "GET", this.historicoController.historico.bind(this.historicoController));

        this.api.addRotas("/historico/:id", "GET", this.historicoController.findById.bind(this.historicoController));

   

        this.api.addRotas("/historico/:id/relatorio", "GET", this.historicoController.gerarRelatorio.bind(this.historicoController));

        this.api.addRotas("/historico/:id", "PUT", this.historicoController.update.bind(this.historicoController));

        this.api.addRotas("/historico/:id", "DELETE", requireAdmin, this.historicoController.delete.bind(this.historicoController));
    }
}

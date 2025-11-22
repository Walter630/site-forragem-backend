import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { HistoricoController } from "../controllers/HistoricoController";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";
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
        /**
         * @swagger
         * /api/historico:
         *   get:
         *     summary: Retorna todo o histórico
         *     tags: [Histórico]
         */
        this.api.addRotas("/historico", "GET", this.historicoController.historico.bind(this.historicoController));

        /**
         * @swagger
         * /api/historico/{id}:
         *   get:
         *     summary: Busca histórico por ID
         *     tags: [Histórico]
         */
        this.api.addRotas("/historico/:id", "GET", this.historicoController.findById.bind(this.historicoController));

        /**
         * @swagger
         * /api/historico/{id}/relatorio:
         *   get:
         *     summary: Gera PDF do histórico
         *     tags: [Histórico]
         */
        this.api.addRotas("/historico/:id/relatorio", "GET", this.historicoController.gerarRelatorio.bind(this.historicoController));

        /**
         * @swagger
         * /api/historico/{id}:
         *   put:
         *     summary: Atualiza histórico
         *     tags: [Histórico]
         */
        this.api.addRotas("/historico/:id", "PUT", this.historicoController.update.bind(this.historicoController));

        /**
         * @swagger
         * /api/historico/{id}:
         *   delete:
         *     summary: Deleta histórico (Admin only)
         *     tags: [Histórico]
         */
        this.api.addRotas("/historico/:id", "DELETE", requireFuncionarioOrAdmin, this.historicoController.delete.bind(this.historicoController));

    }
}

import { prisma } from "../../../infra/prisma/PrismaClient";
import { Api } from "./Api";
import { HistoricoController } from "../controllers/HistoricoController";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";
import { requireFuncionarioOrAdmin, requireAdmin } from "../validators/authenticateAdmin";
import { SimulacaoRepositories } from "../../../infra/repositories/SimulacaoRepositories";
import { PDFServices } from "../../../aplication/services/PdfServices";
import { PropriedadeRepository } from "../../../infra/repositories/PropriedadeRepositories";

export class HistoricoRoutes {
    private readonly historicoController: HistoricoController;

    constructor(private readonly api: Api) {
        const historicoRepo = new HistoricoRepositories(prisma);
        const pdfServices = new PDFServices();
        const propriedadeRepo = new PropriedadeRepository(prisma);
        const historicoService = new HistoricoServices(pdfServices, historicoRepo, propriedadeRepo);
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
         * /historico/minhas:
         *   get:
         *     summary: Lista históricos do usuário logado (Gerente vê seus históricos, Funcionário vê do gerente)
         *     tags: [Histórico]
         *     security:
         *       - bearerAuth: []
         *     responses:
         *       200:
         *         description: Lista de históricos do usuário
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/historico/minhas", "GET", requireFuncionarioOrAdmin, this.historicoController.listarPorUsuario.bind(this.historicoController));

        /**
         * @swagger
         * /historico:
         *   get:
         *     summary: Retorna todo o histórico (apenas Admin)
         *     tags: [Histórico]
         *     security:
         *       - bearerAuth: []
         *     responses:
         *       200:
         *         description: Lista de históricos
         */
        this.api.addRotas("/historico", "GET", requireAdmin, this.historicoController.historico.bind(this.historicoController));

        /**
         * @swagger
         * /historico/{id}:
         *   get:
         *     summary: Busca histórico por ID
         *     tags: [Histórico]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Histórico encontrado
         *       404:
         *         description: Não encontrado
         */
        this.api.addRotas("/historico/:id", "GET", this.historicoController.findById.bind(this.historicoController));

        /**
         * @swagger
         * /historico/{id}/relatorio:
         *   get:
         *     summary: Gera PDF do histórico
         *     tags: [Histórico]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: PDF gerado
         *         content:
         *           application/pdf:
         *             schema:
         *               type: string
         *               format: binary
         */
        this.api.addRotas("/historico/:id/relatorio", "GET", this.historicoController.gerarRelatorio.bind(this.historicoController));

        /**
         * @swagger
         * /historico/{id}:
         *   put:
         *     summary: Atualiza histórico
         *     tags: [Histórico]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *     responses:
         *       200:
         *         description: Histórico atualizado
         */
        this.api.addRotas("/historico/:id", "PUT", this.historicoController.update.bind(this.historicoController));

        /**
         * @swagger
         * /historico/{id}:
         *   delete:
         *     summary: Deleta histórico (Admin only)
         *     tags: [Histórico]
         *     security:
         *       - bearerAuth: []
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Histórico deletado
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas("/historico/:id", "DELETE", requireFuncionarioOrAdmin, this.historicoController.delete.bind(this.historicoController));

    }
}


import { Api } from "./Api";
import { SimulacaoController } from "../controllers/SimulacaoController";
import { SimulacaoServices } from "../../../aplication/services/SimulacaoServices";
import { SimulacaoRepositories } from "../../../infra/repositories/SimulacaoRepositories";
import { HistoricoServices } from "../../../aplication/services/HistoricoServices";
import { PrecipitacaoRepositories } from "../../../infra/repositories/PrecipitacaoRepositories";
import { SoloRepositories } from "../../../infra/repositories/SoloRepositories";        
import { prisma } from "../../../infra/prisma/PrismaClient";
import { HistoricoRepositories } from "../../../infra/repositories/HistoricoRepositories";
import { EstimativaServices } from "../../../aplication/services/EstimativasServices";
import { EstimativasRepositories } from "../../../infra/repositories/EstimativasRepositories";
import { PropriedadeRepositories } from "../../../infra/repositories/PropriedadeRepositories";
import { SimulacaoPDFService } from "../../../aplication/services/PdfServices";
// src/interfaces/http/router/SimulacaoRoutes.ts
export class SimulacaoRoutes {
  private simulacaoController: SimulacaoController;

  constructor(private api: Api) {
    const simulacaoRepository = new SimulacaoRepositories(prisma);
    const soloRepository = new SoloRepositories(prisma);
    const historicoRepository = new HistoricoRepositories(prisma);
    const precipitacaoRepository = new PrecipitacaoRepositories(prisma);
    const estimativasRepositories = new EstimativasRepositories(prisma);
    const propriedadeRepositories = new PropriedadeRepositories(prisma);

    const simulacaoService = new SimulacaoServices(
      simulacaoRepository,
      historicoRepository,
      estimativasRepositories,
      propriedadeRepositories
    );

    const pdfService = new SimulacaoPDFService();

    // Agora com os dois serviços corretamente
    this.simulacaoController = new SimulacaoController(simulacaoService, pdfService);
  }

  static build(api: Api) {
    const instancia = new SimulacaoRoutes(api);
    instancia.addRoutes();
  }

  private addRoutes() {
    this.api.addRotas(
      "/simulacao",
      "POST",
      this.simulacaoController.simular.bind(this.simulacaoController)
    );

    this.api.addRotas(
      "/simulacao/historico",
      "GET",
      this.simulacaoController.historico.bind(this.simulacaoController)
    );

    this.api.addRotas(
      "/simulacao/pdf",
      "POST",
      this.simulacaoController.gerarRelatorioPDF.bind(this.simulacaoController)
    );
  }
}


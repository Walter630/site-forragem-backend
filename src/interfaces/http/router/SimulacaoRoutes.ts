
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
import { PropriedadeRepository } from "../../../infra/repositories/PropriedadeRepositories";
import {requireFuncionarioOrAdmin, requireAdmin, requireGerente} from "../validators/authenticateAdmin";
import path from "path";

// src/interfaces/http/router/SimulacaoRoutes.ts
export class SimulacaoRoutes {
  private simulacaoController: SimulacaoController;

  constructor(private api: Api) {
    const simulacaoRepository = new SimulacaoRepositories(prisma);
    const soloRepository = new SoloRepositories(prisma);
    const historicoRepository = new HistoricoRepositories(prisma);
    const precipitacaoRepository = new PrecipitacaoRepositories(prisma);
    const estimativasRepositories = new EstimativasRepositories(prisma);
    const propriedadeRepositories = new PropriedadeRepository(prisma);

    const simulacaoService = new SimulacaoServices(
      simulacaoRepository,
      historicoRepository,
      estimativasRepositories,
      propriedadeRepositories
    );


    // Agora com os dois serviços corretamente
    this.simulacaoController = new SimulacaoController(simulacaoService);
  }

  static build(api: Api) {
    const instancia = new SimulacaoRoutes(api);
    instancia.addRoutes();
  }

  private addRoutes() {
      /**
       * @swagger
       * /simulacao:
       *   post:
       *     summary: Executa uma simulação
       *     tags: [Simulação]
       *     security:
       *       - bearerAuth: []
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             type: object
       *     responses:
       *       200:
       *         description: Simulação realizada com sucesso
       */
      this.api.addRotas(
          "/simulacao",
          "POST",
          requireFuncionarioOrAdmin,
          this.simulacaoController.simular.bind(this.simulacaoController)
      );

      /**
       * @swagger
       * /simulacao/minhas:
       *   get:
       *     summary: Lista simulações do usuário logado (Gerente vê suas simulações, Funcionário vê do gerente)
       *     tags: [Simulação]
       *     security:
       *       - bearerAuth: []
       *     responses:
       *       200:
       *         description: Lista de simulações do usuário
       *       401:
       *         description: Não autenticado
       */
      this.api.addRotas(
          "/simulacao/minhas",
          "GET",
          requireFuncionarioOrAdmin,
          this.simulacaoController.listarPorUsuario.bind(this.simulacaoController)
      );

      /**
       * @swagger
       * /simulacao:
       *   get:
       *     summary: Lista todas as simulações (apenas Admin)
       *     tags: [Simulação]
       *     security:
       *       - bearerAuth: []
       *     responses:
       *       200:
       *         description: Lista de simulações
       */
      this.api.addRotas(
          "/simulacao",
          "GET",
          requireAdmin,
          this.simulacaoController.listar.bind(this.simulacaoController)
      );

      /**
       * @swagger
       * /simulacao/historico:
       *   get:
       *     summary: Lista o histórico de simulações realizadas
       *     tags: [Simulação]
       *     security:
       *       - bearerAuth: []
       *     responses:
       *       200:
       *         description: Lista de simulações
       */
      this.api.addRotas(
          "/simulacao/historico",
          "GET",
          requireFuncionarioOrAdmin,
          this.simulacaoController.historico.bind(this.simulacaoController)
      );

      /**
       * @swagger
       * /simulacao/{id}:
       *   get:
       *     summary: Busca uma simulação por ID
       *     tags: [Simulação]
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
       *         description: Simulação encontrada
       *       404:
       *         description: Simulação não encontrada
       */
      this.api.addRotas(
          `/simulacao/:id`,
          "GET",
          requireFuncionarioOrAdmin,
          this.simulacaoController.findById.bind(this.simulacaoController)
      )

      /**
       * @swagger
       * /simulacao/{id}:
       *   delete:
       *     summary: Deleta uma simulação por ID
       *     tags: [Simulação]
       *     security:
       *       - bearerAuth: []
       *     parameters:
       *       - name: id
       *         in: path
       *         required: true
       *         schema:
       *           type: string
       *         description: ID da simulação a ser deletada
       *     responses:
       *       200:
       *         description: Simulação deletada com sucesso
       *       401:
       *         description: Não autenticado
       *       403:
       *         description: Sem permissão para deletar
       *       404:
       *         description: Simulação não encontrada
       */
      this.api.addRotas(
          `/simulacao/:id`,
          "DELETE",
          requireFuncionarioOrAdmin,
          this.simulacaoController.delete.bind(this.simulacaoController)
      )
  }
}


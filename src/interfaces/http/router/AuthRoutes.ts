// routes/AuthRoutes.ts
import { Api } from "./Api";
import { AuthController } from "../controllers/AuthControler";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";

export class AuthRoutes {
    private static controller = new AuthController();

    static build(api: Api) {
        /**
         * @swagger
         * /auth/login:
         *   post:
         *     summary: Login de usuário
         *     tags: [Autenticação]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               email:
         *                 type: string
         *               senha:
         *                 type: string
         *     responses:
         *       200:
         *         description: Login bem-sucedido
         *       401:
         *         description: Credenciais inválidas
         */
        api.addRotas("/auth/login", "POST", this.controller.login.bind(this.controller));

        /**
         * @swagger
         * /auth/refresh-token:
         *   post:
         *     summary: Renovar token de acesso usando refresh token
         *     tags: [Autenticação]
         *     description: Use esta rota quando o access token expirar. O refresh token é enviado automaticamente via cookie.
         *     responses:
         *       200:
         *         description: Token renovado com sucesso
         *       401:
         *         description: Refresh token inválido ou ausente
         */
        api.addRotas("/auth/refresh-token", "POST", this.controller.refresh.bind(this.controller));

        /**
         * @swagger
         * /auth/me:
         *   get:
         *     summary: Retorna dados do usuário logado
         *     tags: [Autenticação]
         *     security:
         *       - bearerAuth: []
         *     responses:
         *       200:
         *         description: Dados do usuário
         *       401:
         *         description: Não autenticado
         */
        api.addRotas("/auth/me", "GET", requireFuncionarioOrAdmin, this.controller.me.bind(this.controller));
    }
}

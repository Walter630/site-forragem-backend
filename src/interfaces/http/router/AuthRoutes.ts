import { Api } from "./Api";
import { AuthController } from "../controllers/AuthControler"; // nome estava com erro

export class AuthRoutes {
  private static AuthController = new AuthController();

  static build(api: Api) {
        /**
         * @swagger
         * /auth/login:
         *   post:
         *     summary: Login
         *     tags: [Auth]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               login:
         *                 type: string
         *               senha:
         *                 type: string
         *             example:
         *               login: "admin@forragem.com"
         *               senha: "123456"
         *     responses:
         *       200:
         *         description: Login bem-sucedido
         *       401:
         *         description: Credenciais inválidas
         */
        api.addRotas("/auth/login", "POST", this.AuthController.login.bind(this.AuthController));

        /**
         * @swagger
         * /api/auth/refresh:
         *   post:
         *     summary: Gera um novo token de acesso
         *     tags: [Auth]
         */
        api.addRotas("/auth/refresh", "POST", this.AuthController.refresh.bind(this.AuthController));

        /**
         * @swagger
         * /api/auth/me:
         *   get:
         *     summary: Retorna dados do usuário autenticado
         *     tags: [Auth]
         */
        api.addRotas("/auth/me", "GET", this.AuthController.me.bind(this.AuthController));
    }
}

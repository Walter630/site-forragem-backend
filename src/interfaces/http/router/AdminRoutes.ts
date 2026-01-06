import { Api } from "./Api";
import { AdminController } from "../controllers/AdminController";
import { AdminServices } from "../../../aplication/services/AdminServices";
import { AdminRepository } from "../../../infra/repositories/AdminRepositories";
import {
    createAdminSchema,
    deleteAdminSchema,
    loginSchema,
    updateAdminSchema,
} from "../validators/validarAdmin";
import { validar } from "../validators/validar";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { requireFuncionarioOrAdmin, requireGerente } from "../validators/authenticateAdmin";

export class AdminRoutes {
    private readonly adminController: AdminController;

    constructor(private readonly api: Api) {
        this.adminController = new AdminController(
            new AdminServices(new AdminRepository(prisma))
        );
    }

    public static build(api: Api) {
        const adminRoutes = new AdminRoutes(api);
        adminRoutes.addRotas();
    }

    private addRotas() {
        /**
         * @swagger
         * /admin:
         *   post:
         *     summary: Criar administrador
         *     tags: [Admin]
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               nome:
         *                 type: string
         *               email:
         *                 type: string
         *               cpf:
         *                 type: string
         *               senha:
         *                 type: string
         *     responses:
         *       201:
         *         description: Admin criado com sucesso
         *       400:
         *         description: Dados inválidos
         */
        this.api.addRotas(
            "/admin",
            "POST",
            validar(createAdminSchema),
            this.adminController.create.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin:
         *   put:
         *     summary: Atualizar administrador
         *     tags: [Admin]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               id:
         *                 type: string
         *               nome:
         *                 type: string
         *               email:
         *                 type: string
         *     responses:
         *       200:
         *         description: Atualizado com sucesso
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas(
            "/admin",
            "PUT",
            requireFuncionarioOrAdmin,
            validar(updateAdminSchema),
            this.adminController.update.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin:
         *   delete:
         *     summary: Deletar administrador
         *     tags: [Admin]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               id:
         *                 type: string
         *     responses:
         *       200:
         *         description: Deletado com sucesso
         *       401:
         *         description: Não autenticado
         */
        this.api.addRotas(
            "/admin",
            "DELETE",
            requireFuncionarioOrAdmin,
            validar(deleteAdminSchema),
            this.adminController.delete.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin:
         *   get:
         *     summary: Listar administradores
         *     tags: [Admin]
         *     responses:
         *       200:
         *         description: Lista de administradores
         */
        this.api.addRotas(
            "/admin",
            "GET",
            this.adminController.findAll.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin/{id}:
         *   get:
         *     summary: Buscar admin por ID
         *     tags: [Admin]
         *     parameters:
         *       - name: id
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Admin encontrado
         *       404:
         *         description: Não encontrado
         */
        this.api.addRotas(
            "/admin/:id",
            "GET",
            this.adminController.findById.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin/email/{email}:
         *   get:
         *     summary: Buscar admin por email
         *     tags: [Admin]
         *     parameters:
         *       - name: email
         *         in: path
         *         required: true
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Admin encontrado
         *       404:
         *         description: Não encontrado
         */
        this.api.addRotas(
            "/admin/email/:email",
            "GET",
            this.adminController.findByEmail.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin/login:
         *   post:
         *     summary: Login de administrador
         *     tags: [Admin]
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
        this.api.addRotas(
            "/admin/login",
            "POST",
            validar(loginSchema),
            this.adminController.login.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin/funcionario:
         *   post:
         *     summary: Gerente cria funcionário vinculado a ele
         *     tags: [Admin]
         *     security:
         *       - bearerAuth: []
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               nome:
         *                 type: string
         *               email:
         *                 type: string
         *               cpf:
         *                 type: string
         *     responses:
         *       201:
         *         description: Funcionário criado com sucesso
         *       403:
         *         description: Apenas gerentes podem criar funcionários
         */
        this.api.addRotas(
            "/admin/funcionario",
            "POST",
            requireGerente,
            validar(createAdminSchema),
            this.adminController.createFuncionario.bind(this.adminController)
        );

        /**
         * @swagger
         * /admin/funcionarios:
         *   get:
         *     summary: Listar funcionários do gerente logado
         *     tags: [Admin]
         *     security:
         *       - bearerAuth: []
         *     responses:
         *       200:
         *         description: Lista de funcionários do gerente
         *       403:
         *         description: Acesso negado
         */
        this.api.addRotas(
            "/admin/funcionarios",
            "GET",
            requireGerente,
            this.adminController.findFuncionariosByGerente.bind(this.adminController)
        );
    }
}

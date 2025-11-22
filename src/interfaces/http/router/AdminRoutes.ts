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
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";

export class AdminRoutes {
    private readonly adminController: AdminController;

    constructor(private readonly api: Api) {
        this.adminController = new AdminController(
            new AdminServices(new AdminRepository(prisma))
        );
    }

    /**
     * @swagger
     * tags:
     *   name: Admin
     *   description: Gestão de administradores
     */

    /**
     * @swagger
     * components:
     *   schemas:
     *     Admin:
     *       type: object
     *       properties:
     *         id:
     *           type: string
     *         nome:
     *           type: string
     *         email:
     *           type: string
     *         cpf:
     *           type: string
     *         tipoUsuario:
     *           type: string
     *       example:
     *         id: "65f1be21c9d2193ac4bf11d1"
     *         nome: "Admin Master"
     *         email: "admin@forragem.com"
     *         cpf: "12345678901"
     *         tipoUsuario: "ADMIN"
     */

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
     *             $ref: '#/components/schemas/Admin'
     *     responses:
     *       201:
     *         description: Admin criado
     *       400:
     *         description: Dados inválidos
     *
     *   get:
     *     summary: Listar administradores
     *     tags: [Admin]
     *     responses:
     *       200:
     *         description: Lista de administradores
     *
     *   put:
     *     summary: Atualizar administrador
     *     tags: [Admin]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Atualizado com sucesso
     *       401:
     *         description: Não autenticado
     *
     *   delete:
     *     summary: Deletar administrador
     *     tags: [Admin]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: Deletado com sucesso
     *       401:
     *         description: Não autenticado
     */

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
     *             example:
     *               email: "admin@forragem.com"
     *               senha: "123456"
     *     responses:
     *       200:
     *         description: Login bem-sucedido
     *       401:
     *         description: Credenciais inválidas
     */

    public static build(api: Api) {
        const adminRoutes = new AdminRoutes(api);
        adminRoutes.addRotas();
    }

    private addRotas() {
        // Criar
        this.api.addRotas(
            "/admin",
            "POST",
            validar(createAdminSchema),
            this.adminController.create.bind(this.adminController)
        );

        // Atualizar
        this.api.addRotas(
            "/admin",
            "PUT",
            requireFuncionarioOrAdmin,
            validar(updateAdminSchema),
            this.adminController.update.bind(this.adminController)
        );

        // Deletar
        this.api.addRotas(
            "/admin",
            "DELETE",
            requireFuncionarioOrAdmin,
            validar(deleteAdminSchema),
            this.adminController.delete.bind(this.adminController)
        );

        // Listar e buscar
        this.api.addRotas(
            "/admin",
            "GET",
            this.adminController.findAll.bind(this.adminController)
        );

        this.api.addRotas(
            "/admin/:id",
            "GET",
            this.adminController.findById.bind(this.adminController)
        );

        this.api.addRotas(
            "/admin/email/:email",
            "GET",
            this.adminController.findByEmail.bind(this.adminController)
        );

        // Login
        this.api.addRotas(
            "/admin/login",
            "POST",
            validar(loginSchema),
            this.adminController.login.bind(this.adminController)
        );
    }
}

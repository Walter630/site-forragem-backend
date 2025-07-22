import { Api } from "./Api";
import { AdminController } from "../controllers/AdminController";
import { AdminServices } from "../../../aplication/services/AdminServices";
import { AdminRepositories } from "../../../infra/repositories/AdminRepositories";
import { createAdminSchema, deleteAdminSchema, loginSchema, updateAdminSchema } from "../validators/validarAdmin";
import { validar } from "../validators/validar";
import { prisma } from "../../../infra/prisma/PrismaClient";
import { requireAdmin } from "../validators/authenticateAdmin";

export class AdminRoutes {
    private readonly adminController: AdminController;
    constructor(private readonly api: Api) {
        this.adminController = new AdminController(new AdminServices(AdminRepositories.create(prisma)));   
    }

    public static build(api: Api) {
        const adminRoutes = new AdminRoutes(api);
        adminRoutes.addRotas();
    }

    private addRotas() {
        this.api.addRotas("/admin", "POST", validar(createAdminSchema), this.adminController.create.bind(this.adminController));
        this.api.addRotas("/admin", "PUT", requireAdmin, validar(updateAdminSchema), this.adminController.update.bind(this.adminController));
        this.api.addRotas("/admin", "DELETE", requireAdmin, validar(deleteAdminSchema), this.adminController.delete.bind(this.adminController));
        this.api.addRotas("/admin", "GET", this.adminController.findAll.bind(this.adminController));
        this.api.addRotas("/admin/:id", "GET", this.adminController.findById.bind(this.adminController));
        this.api.addRotas("/admin/email/:email", "GET", this.adminController.findByEmail.bind(this.adminController));
        this.api.addRotas("/admin/login", "POST", validar(loginSchema), this.adminController.login.bind(this.adminController));
    }
}


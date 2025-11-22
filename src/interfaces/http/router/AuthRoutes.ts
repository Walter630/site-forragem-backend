// routes/AuthRoutes.ts
import { Api } from "./Api";
import { AuthController } from "../controllers/AuthControler";
import { requireFuncionarioOrAdmin } from "../validators/authenticateAdmin";

export class AuthRoutes {
    private static controller = new AuthController();

    static build(api: Api) {
        api.addRotas("/auth/login", "POST", this.controller.login.bind(this.controller));

        api.addRotas("/auth/refresh", "POST", requireFuncionarioOrAdmin, this.controller.refresh.bind(this.controller));

        api.addRotas("/auth/me", "GET", requireFuncionarioOrAdmin, this.controller.me.bind(this.controller));
    }
}

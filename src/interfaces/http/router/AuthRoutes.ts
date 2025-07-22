import { Api } from "./Api";
import { AuthController } from "../controllers/AuthControler"; // nome estava com erro

export class AuthRoutes {
  private static AuthController = new AuthController();

  static build(api: Api) {
    api.addRotas("/auth/login", "POST", this.AuthController.login.bind(this.AuthController));
    api.addRotas("/auth/refresh", "POST", this.AuthController.refresh.bind(this.AuthController));
  }
}

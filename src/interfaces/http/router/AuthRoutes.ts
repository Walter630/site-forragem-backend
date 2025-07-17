import { Api } from "./Api";
import { AuthController } from "../controllers/AuthControler";

export class AuthRoutes {
  static build(api: Api) {
    const controller = new AuthController();
    api.addRotas("/login", "POST", controller.login.bind(controller));
  }
}

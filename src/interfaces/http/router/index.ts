import { Api } from "./Api";
import { AdminRoutes } from "./AdminRoutes";
import { TipoUsuarioRouter } from "./TipoUsuarioRouter";
import { AuthRoutes } from "./AuthRoutes";

export function loadAllRoutes(api: Api) {
  AuthRoutes.build(api);
  AdminRoutes.build(api);
  TipoUsuarioRouter.build(api);
}

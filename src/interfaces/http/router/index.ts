import { Api } from "./Api";
import { AdminRoutes } from "./AdminRoutes";
import { TipoUsuarioRouter } from "./TipoUsuarioRouter";
import { AuthRoutes } from "./AuthRoutes";
import { SimulacaoRoutes } from "./SimulacaoRoutes";
import { SoloRoutes } from "./SoloRoutes";
import { HistoricoRoutes } from "./HistoricoRoutes";
import { PrecipitacaoRoutes } from "./PrecipitacaoRoutes";


export function loadAllRoutes(api: Api) {
  AuthRoutes.build(api);
  AdminRoutes.build(api);
  TipoUsuarioRouter.build(api);
  SimulacaoRoutes.build(api);
  SoloRoutes.build(api);
  HistoricoRoutes.build(api);
  PrecipitacaoRoutes.build(api);
}

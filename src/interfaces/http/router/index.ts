import { Api } from "./Api";
import { AdminRoutes } from "./AdminRoutes";
// import { TipoUsuarioRouter } from "./TipoUsuarioRouter"; // Modelo TipoUser não existe mais no schema
import { AuthRoutes } from "./AuthRoutes";
import { SimulacaoRoutes } from "./SimulacaoRoutes";
import { SoloRoutes } from "./SoloRoutes";
import { HistoricoRoutes } from "./HistoricoRoutes";
import { PrecipitacaoRoutes } from "./PrecipitacaoRoutes";
import { PropriedadeRoutes } from "./PropriedadeRoutes";
import { EstimativaRoutes } from "./EstimativaRoutes";
import { CulturaRoutes } from "./CulturaRoutes";


export function loadAllRoutes(api: Api) {
  AuthRoutes.build(api);
  AdminRoutes.build(api);
  // TipoUsuarioRouter.build(api); // Modelo TipoUser não existe mais no schema
  SimulacaoRoutes.build(api);
  SoloRoutes.build(api);
  HistoricoRoutes.build(api);
  PrecipitacaoRoutes.build(api);
  PropriedadeRoutes.build(api);
  EstimativaRoutes.build(api);
  CulturaRoutes.build(api);
}

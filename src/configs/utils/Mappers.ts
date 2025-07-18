import { Historico as PrismaHistorico, Solo as PrismaSolo, Precipitacao as PrismaPrecipitacao } from "../../generated/prisma";

import { Historico } from "../../domain/entities/Historico";
import { Solo } from "../../domain/entities/Solo";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { Propriedade } from "../../domain/entities/Propriedade";

export function mapSolo(solo?: PrismaSolo | null): Solo | undefined {
  if (!solo) return undefined;

  return Solo.with({
    id: solo.id,
    profundidade: solo.profundidade,
    fator_rocha: solo.fatorRocha,
    condut_hidraulica_saturada: solo.condutHidraulicaSaturada,
    densidade_aparente: solo.densidadeAparente,
    agua_0_bar: solo.agua0Bar,
    agua_13_bar: solo.agua13Bar,
    agua_15_bar: solo.agua15Bar,
    createdAt: solo.createdAt,
  });
}

export function mapPrecipitacao(precipitacao?: PrismaPrecipitacao | null): Precipitacao | undefined {
  if (!precipitacao) return undefined;

  return Precipitacao.with({
    id: precipitacao.id,
    mm_ano: precipitacao.mmAno,
    chuvas: precipitacao.chuvas,
    mm_dia: precipitacao.mmDia,
    chuvas_dia: precipitacao.cvDia,
    mm_mes: precipitacao.mmMes,
    chuvas_mes: precipitacao.cvMes,
  });
}

export function mapPropriedade(propriedade: any): Propriedade {
  return Propriedade.with({
    id: propriedade.id,
    nomePropriedade: propriedade.nomePropriedade,
    nomeProprietario: propriedade.nomeProprietario,
    latitude: propriedade.latitude,
    longitude: propriedade.longitude,
    altitude: propriedade.altitude,
    simulacao: propriedade.simulacao || "",
    estimativas: propriedade.estimativas || [],
  });
}
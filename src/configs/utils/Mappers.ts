import { Historico as PrismaHistorico, Solo as PrismaSolo, Precipitacao as PrismaPrecipitacao } from "@prisma/client";
import { Solo } from "../../domain/entities/Solo";
import { Precipitacao } from "../../domain/entities/Precipitacao";
import { Propriedade } from "../../domain/entities/Propriedade";

export function mapSolo(solo?: PrismaSolo | null): Solo | undefined {
  if (!solo) return undefined;

  return Solo.with({
    id: solo.id,
    profundidade: solo.profundidade ?? undefined,
    fatorRocha: solo.fatorRocha ?? undefined,
    condutHidraulicaSaturada: solo.condutHidraulicaSaturada,
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
    propriedadeId: precipitacao.propriedadeId,
    mmAno: precipitacao.mmAno,
    chuvas: precipitacao.chuvas,
    mmDia: precipitacao.mmDia,
    cvDia: precipitacao.cvDia,
    mmMes: precipitacao.mmMes,
    cvMes: precipitacao.cvMes,
  });
}

export function mapPropriedade(propriedade: any): Propriedade {
  return Propriedade.with({
    id: propriedade.id,
    nomePropriedade: propriedade.nomePropriedade,
    nomeProprietario: propriedade.nomeProprietario,
    latitude: propriedade.latitude,
    longitude: propriedade.longitude,
    simulacao: propriedade.simulacao || "",
    estimativas: propriedade.estimativas || [],
  });
}
// Ajustado: Simulacao
import { SimularForragemInputDTO } from "../../aplication/dto/SimulacaoForragemDTO";

export class Simulacao {
  constructor(
    public id: number,
    public propriedadeId: number,
    public dadosJson: Record<string, any>, // ✅ Adicionado
    public resultado: number,
    public dataSimulacao: Date
  ) {}

  static with(data: Partial<Simulacao>): Simulacao {
    return new Simulacao(
      data.id!,
      data.propriedadeId!,
      data.dadosJson!,
      data.resultado!,
      data.dataSimulacao!
    );
  }
}

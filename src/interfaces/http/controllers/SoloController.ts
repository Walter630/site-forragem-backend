import { Request, Response } from 'express';
import { SoloServices } from '../../../aplication/services/SoloServices';
export class SoloController {
  constructor(private soloServices: SoloServices) {}

  async create(req: Request, res: Response) {
    try {
      const {
        propriedadeId,
        profundidade,
        condut_hidraulica_saturada,
        densidade_aparente,
        agua_0_bar,
        agua_13_bar,
        agua_15_bar,
        fator_rocha
      } = req.body;

      const novoSolo = await this.soloServices.create({
        propriedadeId,
        profundidade,
        condut_hidraulica_saturada,
        densidade_aparente,
        agua_0_bar,
        agua_13_bar,
        agua_15_bar,
        fator_rocha
      });

       res.status(201).json(novoSolo);
    } catch (error) {
      console.error('Erro ao criar solo:', error);
       res.status(500).json({ error: 'Erro ao criar solo' });
    }
  }

  async findAll(req: Request, res: Response) {
    const solos = await this.soloServices.findAll();
     res.status(200).json(solos);
  }

  async findById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const solo = await this.soloServices.findById(id);
    if (!solo)  res.status(404).json({ error: 'Solo não encontrado' });
     res.status(200).json(solo);
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const data = req.body;

    const soloAtualizado = await this.soloServices.update(id, data);
    if (!soloAtualizado)  res.status(404).json({ error: 'Solo não encontrado' });
     res.status(200).json(soloAtualizado);
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    await this.soloServices.delete(id);
     res.status(204).send();
  }
}

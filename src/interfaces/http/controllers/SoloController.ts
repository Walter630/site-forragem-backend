import { Request, Response } from 'express';
import { SoloServices } from '../../../aplication/services/SoloServices';
export class SoloController {
  constructor(private soloServices: SoloServices) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const {
        nomeClasse,
        profundidade,
        fatorRocha,
        condutHidraulicaSaturada,
        densidadeAparente,
        agua0Bar,
        agua13Bar,
        agua15Bar,
      } = req.body;

      const novoSolo = await this.soloServices.create({
        nomeClasse,
        profundidade,
        fatorRocha,
        condutHidraulicaSaturada,
        densidadeAparente,
        agua0Bar,
        agua13Bar,
        agua15Bar,
      });

       res.status(201).json(novoSolo);
       return;
    } catch (error) {
      console.error('Erro ao criar solo:', error);
       res.status(500).json({ error: 'Erro ao criar solo' });
       return;
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    const solos = await this.soloServices.findAll();
     res.status(200).json(solos);
     return;
  }

  // Listar solos usados nas propriedades do usuário logado
  async listarPorUsuario(req: Request, res: Response): Promise<void> {
    try {
      const user = (req as any).user;

      if (!user?.id) {
        res.status(401).json({ error: "Usuário não autenticado" });
        return;
      }

      const userContext = {
        id: user.id,
        role: user.role,
        gerenteId: user.gerenteId
      };

      const solos = await this.soloServices.findByUser(userContext);
      res.status(200).json(solos);
      return;
    } catch (error) {
      console.error('Erro ao buscar solos do usuário:', error);
      res.status(500).json({ error: 'Erro ao buscar solos do usuário' });
      return;
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);
    const solo = await this.soloServices.findById(id);
    if (!solo) { res.status(404).json({ error: 'Solo não encontrado' }); return; }
     res.status(200).json(solo);
     return;
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);
    const data = req.body;

    const soloAtualizado = await this.soloServices.update(id, data);
    if (!soloAtualizado) { res.status(404).json({ error: 'Solo não encontrado' }); return; }
     res.status(200).json(soloAtualizado);
     return;
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);
    await this.soloServices.delete(id);
     res.status(204).send();
     return;
  }
}

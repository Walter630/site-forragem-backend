import { PrecipitacaoServices } from "../../../aplication/services/PrecipitacaoServices";

export class PrecipitacaoController {
    constructor(private readonly service: PrecipitacaoServices) {}
    async findAll(req: any, res: any) {
        try {
            const precipitations = await this.service.findAll();
            return res.json(precipitations);
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
    async findById(req: any, res: any) {
        try {
            const id = req.params.id;
            const precipitation = await this.service.findById(Number(id));
            return res.json(precipitation);
        } catch (err: any) {
            return res.status(404).json({ error: err.message });
        }
    }
    async create(req: any, res: any) {
        try {
            const precipitation = req.body;
            const createdPrecipitation = await this.service.create(precipitation);
            return res.status(201).json(createdPrecipitation);
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
    async update(req: any, res: any) {
        try {
            const id = Number(req.params.id);
            const precipitation = req.body;
            const updatedPrecipitation = await this.service.update(id, precipitation);
            return res.json(updatedPrecipitation);
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
    async delete(req: any, res: any) {
        try {
            const id = req.params.id;
            await this.service.delete(id);
            return res.status(204).send();
        } catch (err: any) {
            return res.status(500).json({ error: err.message });
        }
    }
    
}
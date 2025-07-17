import { AuthService } from "../../../aplication/services/AuthServices";
import { Request, Response } from "express";

export class AuthController {
  private service = new AuthService();

  async login(req: Request, res: Response) {
    try {
      const { login, senha } = req.body;
      const resultado = await this.service.login(login, senha);
      return res.json(resultado);
    } catch (err: any) {
      return res.status(401).json({ erro: err.message });
    }
  }
}

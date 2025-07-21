import express, { Router, RequestHandler } from "express";

export class Api {
  private router: Router;

  constructor() {
    // ✅ Usa o Router do Express corretamente
    this.router = express.Router();

    // ✅ Aplica o middleware para leitura do body JSON


    // (opcional) Middleware de log
    this.router.use((req, _, next) => {
      console.log(`[${req.method}] ${req.originalUrl}`);
      next();
    });
  }

  addRotas(path: string, method: string, ...handlers: RequestHandler[]) {
    switch (method.toUpperCase()) {
      case "GET":
        this.router.get(path, ...handlers);
        break;
      case "POST":
        this.router.post(path, ...handlers);
        break;
      case "PUT":
        this.router.put(path, ...handlers);
        break;
      case "DELETE":
        this.router.delete(path, ...handlers);
        break;
      default:
        throw new Error(`Método ${method} não suportado`);
    }
  }

  get expressRouter() {
    return this.router;
  }
}

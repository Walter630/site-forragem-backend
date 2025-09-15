import express, { Router, RequestHandler } from "express";

export class Api {
    private router: Router;

    constructor() {
        this.router = express.Router();
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

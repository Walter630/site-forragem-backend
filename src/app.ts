import "dotenv/config";
import express from "express";
import cors from "cors";
import { Api } from "./interfaces/http/router/Api";
import { loadAllRoutes } from "./interfaces/http/router";

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000", // ou seu domínio frontend
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    }));

// Log global de requisições
app.use((req, _, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
});

// Rotas
const api = new Api();
loadAllRoutes(api);
app.use("/api", api.expressRouter); // prefixo global opcional

// Inicia o servidor
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
});

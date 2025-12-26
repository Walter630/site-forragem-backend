import "dotenv/config";
import express from "express";
import cors from "cors";
import { Api } from "./interfaces/http/router/Api";
import { loadAllRoutes } from "./interfaces/http/router";
import { setupSwagger } from "./configs/swagger";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser())

// CORS - permite múltiplas origens
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

// 🔥 Swagger DEVE vir ANTES das rotas para funcionar corretamente
setupSwagger(app);

// Log global
app.use((req, _, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
});

// 🔥 Rotas
const api = new Api();
loadAllRoutes(api);
app.use("/api", api.expressRouter);


// Servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

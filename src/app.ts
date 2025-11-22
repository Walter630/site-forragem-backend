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
// CORS
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

// Log global
app.use((req, _, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
});

// 🔥 Rotas
const api = new Api();
loadAllRoutes(api);
app.use("/api", api.expressRouter);

// 🔥 Swagger DEVE vir depois das rotas
setupSwagger(app);

// Servidor
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
});

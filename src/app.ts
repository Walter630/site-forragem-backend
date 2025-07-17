import "dotenv/config";
import express from "express";
import cors from "cors";
import { Api } from "./interfaces/http/router/Api";
import { loadAllRoutes } from "./interfaces/http/router/index";

const app = express();
app.use(express.json());
app.use(cors());

// log de requisições
app.use((req, _, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// carrega todas as rotas
const api = new Api();
loadAllRoutes(api); // <-- só uma linha pra todas as rotas
app.use(api.expressRouter);

// inicia o servidor
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

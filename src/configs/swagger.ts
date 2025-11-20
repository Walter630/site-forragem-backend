// src/interfaces/http/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export function setupSwagger(app: Express) {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "API InventPlus",
                version: "1.0.0",
                description: "Documentação da API usando Swagger JSDoc",
            },
            servers: [
                {
                    url: "http://localhost:3001/api",
                    description: "Servidor Local",
                },
            ],
        },

        apis: [
            "src/interfaces/http/router/**/*.ts", // ← TODAS AS ROTAS
            "src/interfaces/http/router/*.ts",
        ],
    };

    const swaggerSpec = swaggerJSDoc(options);

    // Disponibilizar o Swagger
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log("📘 Swagger disponível em: http://localhost:3001/api/docs");
}

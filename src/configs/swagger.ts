import { Express, Request, Response } from "express";

export function setupSwagger(app: Express) {
    console.log("Configurando Swagger UI...");

    // Especificação OpenAPI inline - mais confiável que swagger-jsdoc
    const swaggerSpec = {
        openapi: "3.0.0",
        info: {
            title: "API Forragem",
            version: "1.0.0",
            description: "Documentação da API Forragem - Sistema de simulação de forragem",
        },
        servers: [
            {
                url: "/api",
                description: "Servidor de desenvolvimento",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
            schemas: {},
        },
        tags: [
            { name: "Autenticação", description: "Endpoints de autenticação" },
            { name: "Admin", description: "Gerenciamento de administradores" },
            { name: "Propriedade", description: "Gerenciamento de propriedades" },
            { name: "Cultura", description: "Gerenciamento de culturas" },
            { name: "Solo", description: "Gerenciamento de solos" },
            { name: "Simulação", description: "Simulações de forragem" },
            { name: "Estimativas", description: "Estimativas de produção" },
            { name: "Histórico", description: "Histórico de simulações" },
            { name: "Precipitação", description: "Dados de precipitação" },
        ],
        paths: {
            "/auth/login": {
                post: {
                    summary: "Login de usuário",
                    tags: ["Autenticação"],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        email: { type: "string", example: "admin@teste.com" },
                                        senha: { type: "string", example: "00011122233" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "200": { description: "Login bem-sucedido" },
                        "401": { description: "Credenciais inválidas" },
                    },
                },
            },
            "/auth/refresh-token": {
                post: {
                    summary: "Renovar token de acesso",
                    tags: ["Autenticação"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Token renovado" },
                        "401": { description: "Token inválido" },
                    },
                },
            },
            "/auth/me": {
                get: {
                    summary: "Retorna dados do usuário logado",
                    tags: ["Autenticação"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Dados do usuário" },
                        "401": { description: "Não autenticado" },
                    },
                },
            },
            "/admin": {
                post: {
                    summary: "Criar administrador",
                    tags: ["Admin"],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        nome: { type: "string" },
                                        email: { type: "string" },
                                        cpf: { type: "string" },
                                        senha: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Admin criado com sucesso" },
                        "400": { description: "Dados inválidos" },
                    },
                },
                put: {
                    summary: "Atualizar administrador",
                    tags: ["Admin"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: { type: "string" },
                                        nome: { type: "string" },
                                        email: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "200": { description: "Atualizado com sucesso" },
                        "401": { description: "Não autenticado" },
                    },
                },
                get: {
                    summary: "Listar todos os administradores",
                    tags: ["Admin"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de administradores" },
                    },
                },
                delete: {
                    summary: "Excluir administrador",
                    tags: ["Admin"],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: "id",
                            in: "query",
                            required: true,
                            schema: { type: "string" },
                        },
                    ],
                    responses: {
                        "200": { description: "Admin excluído" },
                    },
                },
            },
            "/admin/{id}": {
                get: {
                    summary: "Buscar administrador por ID",
                    tags: ["Admin"],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: { type: "string" },
                        },
                    ],
                    responses: {
                        "200": { description: "Admin encontrado" },
                        "404": { description: "Admin não encontrado" },
                    },
                },
            },
            "/propriedade": {
                post: {
                    summary: "Criar propriedade",
                    tags: ["Propriedade"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        nomePropriedade: { type: "string" },
                                        nomeResponsavel: { type: "string" },
                                        latitude: { type: "number" },
                                        longitude: { type: "number" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Propriedade criada" },
                    },
                },
                get: {
                    summary: "Listar propriedades",
                    tags: ["Propriedade"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de propriedades" },
                    },
                },
            },
            "/cultura": {
                post: {
                    summary: "Criar cultura",
                    tags: ["Cultura"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        eua: { type: "number" },
                                        codigo: { type: "number" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Cultura criada" },
                    },
                },
                get: {
                    summary: "Listar culturas",
                    tags: ["Cultura"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de culturas" },
                    },
                },
            },
            "/solo": {
                post: {
                    summary: "Criar solo",
                    tags: ["Solo"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        nomeClasse: { type: "string" },
                                        profundidade: { type: "number" },
                                        densidadeAparente: { type: "number" },
                                        agua0Bar: { type: "number" },
                                        agua13Bar: { type: "number" },
                                        agua15Bar: { type: "number" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Solo criado" },
                    },
                },
                get: {
                    summary: "Listar solos",
                    tags: ["Solo"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de solos" },
                    },
                },
            },
            "/simulacao": {
                post: {
                    summary: "Criar simulação de forragem",
                    tags: ["Simulação"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        nomeSimulacao: { type: "string" },
                                        ano: { type: "number" },
                                        culturaId: { type: "string" },
                                        soloId: { type: "string" },
                                        propriedadeId: { type: "string" },
                                        eto: { type: "number" },
                                        indiceAridez: { type: "number" },
                                        precipitacaoMmAno: { type: "number" },
                                        numeroChuvas: { type: "number" },
                                        precipitacaoMmDia: { type: "number" },
                                        cvDia: { type: "number" },
                                        precipitacaoMmMes: { type: "number" },
                                        cvMes: { type: "number" },
                                        altitude: { type: "number" },
                                        temperaturaMed: { type: "number" },
                                        umidade: { type: "number" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Simulação criada" },
                    },
                },
                get: {
                    summary: "Listar simulações",
                    tags: ["Simulação"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de simulações" },
                    },
                },
            },
            "/simulacao/{id}/pdf": {
                get: {
                    summary: "Gerar PDF da simulação",
                    tags: ["Simulação"],
                    security: [{ bearerAuth: [] }],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            required: true,
                            schema: { type: "string" },
                        },
                    ],
                    responses: {
                        "200": { description: "PDF gerado com sucesso" },
                    },
                },
            },
            "/simulacao/historico": {
                get: {
                    summary: "Lista o histórico de simulações realizadas",
                    tags: ["Simulação"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de simulações com histórico" },
                    },
                },
            },
            "/estimativas": {
                post: {
                    summary: "Criar estimativa",
                    tags: ["Estimativas"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        valorTotal: { type: "number" },
                                        descricao: { type: "string" },
                                        simulacaoId: { type: "string" },
                                        propriedadeId: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Estimativa criada" },
                    },
                },
                get: {
                    summary: "Listar estimativas",
                    tags: ["Estimativas"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de estimativas" },
                    },
                },
            },
            "/historico": {
                get: {
                    summary: "Listar histórico",
                    tags: ["Histórico"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de histórico" },
                    },
                },
            },
            "/precipitacao": {
                post: {
                    summary: "Criar precipitação",
                    tags: ["Precipitação"],
                    security: [{ bearerAuth: [] }],
                    requestBody: {
                        required: true,
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        mmAno: { type: "number" },
                                        chuvas: { type: "number" },
                                        mmDia: { type: "number" },
                                        cvDia: { type: "number" },
                                        mmMes: { type: "number" },
                                        cvMes: { type: "number" },
                                        propriedadeId: { type: "string" },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        "201": { description: "Precipitação criada" },
                    },
                },
                get: {
                    summary: "Listar precipitações",
                    tags: ["Precipitação"],
                    security: [{ bearerAuth: [] }],
                    responses: {
                        "200": { description: "Lista de precipitações" },
                    },
                },
            },
        },
    };

    try {

        console.log("Swagger paths encontradas:", Object.keys(swaggerSpec.paths || {}));

        // Rota JSON
        app.get("/api/docs.json", (req: Request, res: Response) => {
            res.setHeader("Content-Type", "application/json");
            res.json(swaggerSpec);
        });

        // Swagger UI via CDN - compatível com Express 5
        app.get("/api/docs", (req: Request, res: Response) => {
            const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Forragem - Documentação</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui.css" />
</head>
<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-bundle.js"></script>
    <script src="https://unpkg.com/swagger-ui-dist@5.9.0/swagger-ui-standalone-preset.js"></script>
    <script>
        window.onload = function() {
            SwaggerUIBundle({
                url: "/api/docs.json",
                dom_id: '#swagger-ui',
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                layout: "StandaloneLayout"
            });
        };
    </script>
</body>
</html>`;
            res.setHeader("Content-Type", "text/html");
            res.send(html);
        });

        console.log("Swagger disponível em http://localhost:3000/api/docs");
    } catch (error) {
        console.error("Erro ao configurar Swagger:", error);
    }
}

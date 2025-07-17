import { PrismaClient } from "../../generated/prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const tipos = [
    { id: 1, tipo: "ADMIN", descricao: "Acesso total ao sistema" },
    { id: 2, tipo: "FUNCIONARIO", descricao: "Gerencia recursos internos" },
    { id: 3, tipo: "USUARIO", descricao: "Acesso limitado ao sistema" },
  ];

  for (const tipo of tipos) {
    await prisma.tipoUser.upsert({
      where: { id: tipo.id },
      update: {},
      create: {
        tipo: tipo.tipo,
        descricao: tipo.descricao,
      },
    });
  }

  const usuarios = [
    {
      nome: "Admin Master",
      email: "admin@email.com",
      cpf: "123.456.789-02",
      tipo: "ADMIN",
    },
    {
      nome: "João Funcionário",
      email: "funcionario@email.com",
      cpf: "234.567.890-12",
      tipo: "FUNCIONARIO",
    },
    {
      nome: "Maria Usuária",
      email: "usuario@email.com",
      cpf: "345.678.901-23",
      tipo: "USUARIO",
    },
  ];

  const tiposCadastrados = await prisma.tipoUser.findMany();

  for (const user of usuarios) {
    const tipo = tiposCadastrados.find((t: any) => t.nome === user.tipo);
    if (!tipo) continue;

    const senha = user.cpf.slice(0, 8);
    const senhaCriptografada = await bcrypt.hash(senha, 10);

    await prisma.admin.upsert({
      where: { email: user.email },
      update: {},
      create: {
        nome: user.nome,
        email: user.email,
        cpf: user.cpf,
        senha: senhaCriptografada,
        tipoUserId: tipo.id,
      },
    });
  }
  
  console.log("Seed finalizado com tipos e usuários.");
}

main().finally(() => prisma.$disconnect());

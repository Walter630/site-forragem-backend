import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  const tipos = ['ADMIN', 'FUNCIONARIO', 'USUARIO'];

  for (const tipo of tipos) {
    const exists = await prisma.tipoUser.findFirst({
      where: { tipo },
    });

    if (!exists) {
      await prisma.tipoUser.create({
        data: {
          tipo,
          descricao: `Perfil de ${tipo.toLowerCase()}`,
        },
      });
      console.log(`Tipo de usuário "${tipo}" criado.`);
    } else {
      console.log(`Tipo de usuário "${tipo}" já existe.`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });

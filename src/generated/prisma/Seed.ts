import { PrismaClient } from ".";

const prisma = new PrismaClient();

async function main() {
    const tipos = ["ADMIN", "FUNCIONARIO", "USUARIO"];

    for (const tipo of tipos) {
        const exists = await prisma.tipoUser.findFirst({ where: { tipo } });

        if (!exists) {
            await prisma.tipoUser.create({
                data: {
                    tipo,
                    descricao: `Perfil de ${tipo.toLowerCase()}`,
                },
            });
            console.log(`Tipo ${tipo} criado.`);
        }
    }

    // ADMIN padrão
    const adminEmail = "admin@forragem.com";

    const adminExists = await prisma.admin.findFirst({
        where: { email: adminEmail }
    });

    if (!adminExists) {
        await prisma.admin.create({
            data: {
                nome: "Administrador",
                email: adminEmail,
                cpf: "00000000000",
                senha: "admin123", // Você deve criptografar antes de usar
            }
        });
        console.log("Admin padrão criado.");
    }
}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());

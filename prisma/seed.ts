import { PrismaClient, TipoUsuarioEnum } from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

async function main() {
    await prisma.historico.deleteMany()
    await prisma.estimativas.deleteMany()
    await prisma.simulacao.deleteMany()
    await prisma.propriedadeSolo.deleteMany()
    await prisma.propriedadeCultura.deleteMany()
    await prisma.precipitacao.deleteMany()
    await prisma.propriedade.deleteMany()
    await prisma.cultura.deleteMany()
    await prisma.solo.deleteMany()

    // Deletar funcionários primeiro (que têm gerenteId), depois o resto
    await prisma.admin.deleteMany({ where: { tipoUsuario: TipoUsuarioEnum.FUNCIONARIO } })
    await prisma.admin.deleteMany({ where: { tipoUsuario: TipoUsuarioEnum.GERENTE } })
    await prisma.admin.deleteMany()

    const password = '00011122233'.replace(/\D/g, '')
    const hashPassword = await bcrypt.hash(password, 10)

    // 1. ADMIN - Manda em tudo
    const admin = await prisma.admin.create({
        data: {
            nome: 'Admin Principal',
            email: 'admin@teste.com',
            cpf: '00011122233',
            senha: hashPassword,
            tipoUsuario: TipoUsuarioEnum.ADMIN
        }
    })

    // 2. GERENTE - Pode fazer simulações e cadastros
    const gerentePassword = await bcrypt.hash('gerente123', 10)
    const gerente = await prisma.admin.create({
        data: {
            nome: 'Gerente Padrão',
            email: 'gerente@teste.com',
            cpf: '11122233344',
            senha: gerentePassword,
            tipoUsuario: TipoUsuarioEnum.GERENTE
        }
    })

    // 3. FUNCIONARIO - Cadastrado pelo gerente
    const funcionarioPassword = await bcrypt.hash('funcionario123', 10)
    const funcionario = await prisma.admin.create({
        data: {
            nome: 'Funcionário Padrão',
            email: 'funcionario@teste.com',
            cpf: '22233344455',
            senha: funcionarioPassword,
            tipoUsuario: TipoUsuarioEnum.FUNCIONARIO,
            gerenteId: gerente.id // Vinculado ao gerente
        }
    })

    console.log('Usuários criados:')
    console.log('- ADMIN:', admin.email, '| Senha: 00011122233')
    console.log('- GERENTE:', gerente.email, '| Senha: gerente123')
    console.log('- FUNCIONARIO:', funcionario.email, '| Senha: funcionario123 (vinculado ao gerente)')

    // Criar cultura ANTES da propriedade
    const cultura = await prisma.cultura.create({
        data: {
            name: 'Milho',
            eua: 1.45,
            codigo: 1
        }
    })

    // Criar solo ANTES da propriedade
    const solo = await prisma.solo.create({
        data: {
            nomeClasse: 'Cambissolo',
            profundidade: 1.2,
            densidadeAparente: 1.35,
            agua0Bar: 0.32,
            agua13Bar: 0.18,
            agua15Bar: 0.12
        }
    })

    const propriedade = await prisma.propriedade.create({
        data: {
            nomePropriedade: 'Fazenda Modelo',
            nomeResponsavel: 'José Walter',
            latitude: -3.7319,
            longitude: -38.5267,
            adminId: admin.id
        }
    })

    await prisma.propriedadeCultura.create({
        data: {
            propriedadeId: propriedade.id,
            culturaId: cultura.id
        }
    })

    await prisma.propriedadeSolo.create({
        data: {
            propriedadeId: propriedade.id,
            soloId: solo.id
        }
    })

    // Dados variáveis por mês para simular cenários diferentes
    const monthlyData = [
        { month: 1, eto: 1400, precipitacao: 150, umidade: 75 },
        { month: 2, eto: 1420, precipitacao: 180, umidade: 78 },
        { month: 3, eto: 1450, precipitacao: 200, umidade: 80 },
        { month: 4, eto: 1380, precipitacao: 120, umidade: 65 },
        { month: 5, eto: 1500, precipitacao: 80, umidade: 55 },
        { month: 6, eto: 1350, precipitacao: 50, umidade: 50 },
        { month: 7, eto: 1300, precipitacao: 30, umidade: 45 },
        { month: 8, eto: 1320, precipitacao: 40, umidade: 48 },
        { month: 9, eto: 1400, precipitacao: 60, umidade: 52 },
        { month: 10, eto: 1450, precipitacao: 100, umidade: 60 },
        { month: 11, eto: 1480, precipitacao: 140, umidade: 70 },
        { month: 12, eto: 1460, precipitacao: 160, umidade: 72 }
    ]

    let acumulado = 0 // Valor acumulado das simulações

    for (const data of monthlyData) {
        // Cálculo do resultado baseado nos parâmetros
        const resultado = (data.precipitacao * (cultura.eua ?? 1) * data.umidade) / data.eto

        // Acumula o resultado de cada simulação
        acumulado += resultado

        const simulacao = await prisma.simulacao.create({
            data: {
                nomeSimulacao: `Simulação Mês ${data.month}/2025`,
                ano: 2025,
                culturaId: cultura.id,
                soloId: solo.id,
                propriedadeId: propriedade.id,
                eto: data.eto,
                indiceAridez: 0.65,
                precipitacaoMmAno: 820,
                numeroChuvas: 78,
                precipitacaoMmDia: 2.2,
                cvDia: 0.35,
                precipitacaoMmMes: data.precipitacao,
                cvMes: 0.42,
                altitude: 520,
                temperaturaMed: 26.5,
                umidade: data.umidade,
                resultado: resultado
            }
        })

        // valorTotal usa o resultado da simulação (acumulado)
        await prisma.estimativas.create({
            data: {
                valorTotal: acumulado,
                descricao: `Estimativa baseada no resultado: ${resultado.toFixed(2)} kg/ha`,
                simulacaoId: simulacao.id,
                propriedadeId: propriedade.id
            }
        })
    }

    const precipitacao = await prisma.precipitacao.create({
        data: {
            mmAno: 820,
            chuvas: 78,
            mmDia: 2.2,
            cvDia: 0.35,
            mmMes: 68,
            cvMes: 0.42,
            propriedadeId: propriedade.id
        }
    })

    console.log('Seed executado com sucesso - 12 estimativas criadas com valores acumulados')
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `tipoUserId` INTEGER NULL,

    UNIQUE INDEX `admins_email_key`(`email`),
    UNIQUE INDEX `admins_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propriedades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeProprietario` VARCHAR(191) NOT NULL,
    `dadosPropriedades` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `simulacaos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `altitude` DOUBLE NOT NULL,
    `simuacao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `precipitacaos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mmAno` DOUBLE NOT NULL,
    `chuvas` DOUBLE NOT NULL,
    `mmDia` DOUBLE NOT NULL,
    `cvDia` DOUBLE NOT NULL,
    `mmMes` DOUBLE NOT NULL,
    `cvMes` DOUBLE NOT NULL,
    `simulacaoId` INTEGER NOT NULL,

    UNIQUE INDEX `precipitacaos_simulacaoId_key`(`simulacaoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `solos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `profundidade` DOUBLE NOT NULL,
    `fatorRocha` DOUBLE NOT NULL,
    `condutHidraulicaSaturada` DOUBLE NOT NULL,
    `densidadeAparente` DOUBLE NOT NULL,
    `agua0Bar` DOUBLE NOT NULL,
    `agua13ar` DOUBLE NOT NULL,
    `agua15Bar` DOUBLE NOT NULL,
    `simulacaoId` INTEGER NOT NULL,

    UNIQUE INDEX `solos_simulacaoId_key`(`simulacaoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_tipoUserId_fkey` FOREIGN KEY (`tipoUserId`) REFERENCES `tipo_users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `precipitacaos` ADD CONSTRAINT `precipitacaos_simulacaoId_fkey` FOREIGN KEY (`simulacaoId`) REFERENCES `simulacaos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solos` ADD CONSTRAINT `solos_simulacaoId_fkey` FOREIGN KEY (`simulacaoId`) REFERENCES `simulacaos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

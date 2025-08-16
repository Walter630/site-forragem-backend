-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `tipoUserId` INTEGER NULL,

    UNIQUE INDEX `admins_email_key`(`email`),
    UNIQUE INDEX `admins_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NOT NULL,
    `descricao` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `ativado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propriedades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeProprietario` VARCHAR(191) NOT NULL,
    `nomePropriedade` VARCHAR(191) NOT NULL,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `adminId` INTEGER NULL,

    UNIQUE INDEX `propriedades_adminId_key`(`adminId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propriedade_culturas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propriedadeId` INTEGER NOT NULL,
    `culturaId` INTEGER NOT NULL,

    UNIQUE INDEX `propriedade_culturas_propriedadeId_culturaId_key`(`propriedadeId`, `culturaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `propriedade_solos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `propriedadeId` INTEGER NOT NULL,
    `soloId` INTEGER NOT NULL,

    UNIQUE INDEX `propriedade_solos_propriedadeId_soloId_key`(`propriedadeId`, `soloId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NULL,
    `valorSimulacao` DOUBLE NOT NULL,
    `propriedadeId` INTEGER NOT NULL,
    `simulacaoId` INTEGER NOT NULL,
    `soloId` INTEGER NOT NULL,
    `precipitacaoId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `precipitacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mmAno` DOUBLE NOT NULL,
    `chuvas` DOUBLE NOT NULL,
    `mmDia` DOUBLE NOT NULL,
    `cvDia` DOUBLE NOT NULL,
    `mmMes` DOUBLE NOT NULL,
    `cvMes` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `propriedadeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `solos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeClasse` VARCHAR(191) NOT NULL,
    `profundidade` DOUBLE NOT NULL,
    `fatorRocha` DOUBLE NOT NULL,
    `condutHidraulicaSaturada` DOUBLE NOT NULL,
    `densidadeAparente` DOUBLE NOT NULL,
    `agua0Bar` DOUBLE NOT NULL,
    `agua13Bar` DOUBLE NOT NULL,
    `agua15Bar` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `propriedadeId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estimativas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valorTotal` DOUBLE NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `propriedadeId` INTEGER NOT NULL,
    `simulacaoId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `simulacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomeSimulacao` VARCHAR(191) NOT NULL,
    `dadosJson` JSON NULL,
    `culturaId` INTEGER NOT NULL,
    `soloId` INTEGER NOT NULL,
    `resultado` DOUBLE NOT NULL,
    `dataSimulacao` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,
    `propriedadeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `culturas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `eua` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME NULL,
    `deleted_at` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_tipoUserId_fkey` FOREIGN KEY (`tipoUserId`) REFERENCES `tipo_users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propriedades` ADD CONSTRAINT `propriedades_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propriedade_culturas` ADD CONSTRAINT `propriedade_culturas_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propriedade_culturas` ADD CONSTRAINT `propriedade_culturas_culturaId_fkey` FOREIGN KEY (`culturaId`) REFERENCES `culturas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propriedade_solos` ADD CONSTRAINT `propriedade_solos_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `propriedade_solos` ADD CONSTRAINT `propriedade_solos_soloId_fkey` FOREIGN KEY (`soloId`) REFERENCES `solos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_simulacaoId_fkey` FOREIGN KEY (`simulacaoId`) REFERENCES `simulacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_soloId_fkey` FOREIGN KEY (`soloId`) REFERENCES `solos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_precipitacaoId_fkey` FOREIGN KEY (`precipitacaoId`) REFERENCES `precipitacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `precipitacao` ADD CONSTRAINT `precipitacao_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solos` ADD CONSTRAINT `solos_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimativas` ADD CONSTRAINT `estimativas_simulacaoId_fkey` FOREIGN KEY (`simulacaoId`) REFERENCES `simulacoes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimativas` ADD CONSTRAINT `estimativas_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `simulacoes` ADD CONSTRAINT `simulacoes_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

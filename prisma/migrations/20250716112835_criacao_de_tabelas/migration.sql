/*
  Warnings:

  - You are about to drop the column `simulacaoId` on the `precipitacaos` table. All the data in the column will be lost.
  - You are about to drop the column `dadosPropriedades` on the `propriedades` table. All the data in the column will be lost.
  - You are about to drop the column `simulacaoId` on the `solos` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `tipo_users` table. All the data in the column will be lost.
  - You are about to drop the `simulacaos` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[historicoId]` on the table `precipitacaos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[adminId]` on the table `propriedades` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[historicoId]` on the table `solos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `historicoId` to the `precipitacaos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `altitude` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomePropriedade` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `simuacao` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historicoId` to the `solos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `tipo_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `precipitacaos` DROP FOREIGN KEY `precipitacaos_simulacaoId_fkey`;

-- DropForeignKey
ALTER TABLE `solos` DROP FOREIGN KEY `solos_simulacaoId_fkey`;

-- DropIndex
DROP INDEX `precipitacaos_simulacaoId_key` ON `precipitacaos`;

-- DropIndex
DROP INDEX `solos_simulacaoId_key` ON `solos`;

-- AlterTable
ALTER TABLE `precipitacaos` DROP COLUMN `simulacaoId`,
    ADD COLUMN `historicoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `propriedades` DROP COLUMN `dadosPropriedades`,
    ADD COLUMN `adminId` INTEGER NULL,
    ADD COLUMN `altitude` DOUBLE NOT NULL,
    ADD COLUMN `latitude` DOUBLE NOT NULL,
    ADD COLUMN `longitude` DOUBLE NOT NULL,
    ADD COLUMN `nomePropriedade` VARCHAR(191) NOT NULL,
    ADD COLUMN `simuacao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `solos` DROP COLUMN `simulacaoId`,
    ADD COLUMN `historicoId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tipo_users` DROP COLUMN `nome`,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `simulacaos`;

-- CreateTable
CREATE TABLE `historicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estimativas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valorTotal` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `propriedadeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `precipitacaos_historicoId_key` ON `precipitacaos`(`historicoId`);

-- CreateIndex
CREATE UNIQUE INDEX `propriedades_adminId_key` ON `propriedades`(`adminId`);

-- CreateIndex
CREATE UNIQUE INDEX `solos_historicoId_key` ON `solos`(`historicoId`);

-- AddForeignKey
ALTER TABLE `propriedades` ADD CONSTRAINT `propriedades_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admins`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `precipitacaos` ADD CONSTRAINT `precipitacaos_historicoId_fkey` FOREIGN KEY (`historicoId`) REFERENCES `historicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `solos` ADD CONSTRAINT `solos_historicoId_fkey` FOREIGN KEY (`historicoId`) REFERENCES `historicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimativas` ADD CONSTRAINT `estimativas_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

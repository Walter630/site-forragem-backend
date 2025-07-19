/*
  Warnings:

  - You are about to alter the column `deleted_at` on the `admins` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `admins` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `estimativas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `estimativas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `created_at` on the `historicos` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `historicos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `historicos` table. All the data in the column will be lost.
  - You are about to drop the column `historicoId` on the `precipitacaos` table. All the data in the column will be lost.
  - You are about to alter the column `deleted_at` on the `precipitacaos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `precipitacaos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `propriedades` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `propriedades` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `simulacoes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `simulacoes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the column `historicoId` on the `solos` table. All the data in the column will be lost.
  - You are about to alter the column `deleted_at` on the `solos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `solos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `tipo_users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `tipo_users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `propriedadeId` to the `historicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `historicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorSimulacao` to the `historicos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `precipitacaos` DROP FOREIGN KEY `precipitacaos_historicoId_fkey`;

-- DropForeignKey
ALTER TABLE `solos` DROP FOREIGN KEY `solos_historicoId_fkey`;

-- DropIndex
DROP INDEX `precipitacaos_historicoId_key` ON `precipitacaos`;

-- DropIndex
DROP INDEX `solos_historicoId_key` ON `solos`;

-- AlterTable
ALTER TABLE `admins` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `estimativas` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL,
    MODIFY `descricao` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `historicos` DROP COLUMN `created_at`,
    DROP COLUMN `deleted_at`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `propriedadeId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `valorSimulacao` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `precipitacaos` DROP COLUMN `historicoId`,
    MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `propriedades` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `simulacoes` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `solos` DROP COLUMN `historicoId`,
    MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `tipo_users` MODIFY `deleted_at` DATETIME NULL,
    MODIFY `updated_at` DATETIME NULL;

-- AddForeignKey
ALTER TABLE `historicos` ADD CONSTRAINT `historicos_propriedadeId_fkey` FOREIGN KEY (`propriedadeId`) REFERENCES `propriedades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

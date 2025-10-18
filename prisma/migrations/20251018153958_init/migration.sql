/*
  Warnings:

  - You are about to alter the column `updated_at` on the `admins` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `admins` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `culturas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `culturas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `estimativas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `estimativas` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `precipitacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `precipitacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `propriedades` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `propriedades` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `simulacoes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `simulacoes` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `solos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `solos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `updated_at` on the `tipo_users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `deleted_at` on the `tipo_users` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `culturaId` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `soloId` to the `propriedades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admins` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `culturas` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `estimativas` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `precipitacao` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `propriedades` ADD COLUMN `culturaId` INTEGER NOT NULL,
    ADD COLUMN `soloId` INTEGER NOT NULL,
    MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `simulacoes` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `solos` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `tipo_users` MODIFY `updated_at` DATETIME NULL,
    MODIFY `deleted_at` DATETIME NULL;

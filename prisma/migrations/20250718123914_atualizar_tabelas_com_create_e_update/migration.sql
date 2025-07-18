/*
  Warnings:

  - You are about to drop the column `createdAt` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `estimativas` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `estimativas` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `historicos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `historicos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `precipitacaos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `precipitacaos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `propriedades` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `propriedades` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `solos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `solos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tipo_users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tipo_users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `admins` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `estimativas` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `historicos` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `precipitacaos` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `propriedades` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `solos` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

-- AlterTable
ALTER TABLE `tipo_users` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `deleted_at` DATETIME NULL,
    ADD COLUMN `updated_at` DATETIME NULL;

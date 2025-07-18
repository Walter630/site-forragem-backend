/*
  Warnings:

  - Added the required column `updatedAt` to the `estimativas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `historicos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `precipitacaos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `solos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `estimativas` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `historicos` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `precipitacaos` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `solos` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

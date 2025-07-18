/*
  Warnings:

  - You are about to drop the column `simuacao` on the `propriedades` table. All the data in the column will be lost.
  - You are about to drop the column `agua13ar` on the `solos` table. All the data in the column will be lost.
  - Added the required column `simulacao` to the `propriedades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agua13Bar` to the `solos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `propriedades` DROP COLUMN `simuacao`,
    ADD COLUMN `simulacao` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `solos` DROP COLUMN `agua13ar`,
    ADD COLUMN `agua13Bar` DOUBLE NOT NULL;

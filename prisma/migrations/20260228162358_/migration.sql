/*
  Warnings:

  - Added the required column `updatedAt` to the `Tickets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "amountToPay" DROP NOT NULL;

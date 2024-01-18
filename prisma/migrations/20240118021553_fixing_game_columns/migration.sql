/*
  Warnings:

  - You are about to drop the column `balance` on the `games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "games" DROP COLUMN "balance",
ADD COLUMN     "isFinished" BOOLEAN NOT NULL DEFAULT false;

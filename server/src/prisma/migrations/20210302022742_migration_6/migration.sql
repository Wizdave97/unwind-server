/*
  Warnings:

  - Added the required column `peeks` to the `Peek` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Peek" ADD COLUMN     "peeks" INTEGER NOT NULL;

/*
  Warnings:

  - You are about to drop the column `creatorId` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `creatorId` on the `Cruise` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Cruise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Challenge" DROP CONSTRAINT "Challenge_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "Cruise" DROP CONSTRAINT "Cruise_creatorId_fkey";

-- AlterTable
ALTER TABLE "Challenge" DROP COLUMN "creatorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cruise" DROP COLUMN "creatorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cruise" ADD FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

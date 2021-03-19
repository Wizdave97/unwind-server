/*
  Warnings:

  - The migration will remove the values [CRUISE] on the enum `EntityType`. If these variants are still used in the database, the migration will fail.
  - You are about to drop the column `cruiseId` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `cruiseId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the `Cruise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CruiseFollowing` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EntityType_new" AS ENUM ('POST', 'CHALLENGE');
ALTER TABLE "Comment" ALTER COLUMN "entityType" TYPE "EntityType_new" USING ("entityType"::text::"EntityType_new");
ALTER TYPE "EntityType" RENAME TO "EntityType_old";
ALTER TYPE "EntityType_new" RENAME TO "EntityType";
DROP TYPE "EntityType_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Cruise" DROP CONSTRAINT "Cruise_postId_fkey";

-- DropForeignKey
ALTER TABLE "Cruise" DROP CONSTRAINT "Cruise_userId_fkey";

-- DropForeignKey
ALTER TABLE "Cruise" DROP CONSTRAINT "Cruise_userUserId_fkey";

-- DropForeignKey
ALTER TABLE "_CruiseFollowing" DROP CONSTRAINT "_CruiseFollowing_A_fkey";

-- DropForeignKey
ALTER TABLE "_CruiseFollowing" DROP CONSTRAINT "_CruiseFollowing_B_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_cruiseId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_cruiseId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "cruiseId";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "cruiseId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cruise" TEXT;

-- DropTable
DROP TABLE "Cruise";

-- DropTable
DROP TABLE "_CruiseFollowing";

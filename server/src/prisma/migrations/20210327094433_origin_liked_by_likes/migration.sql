/*
  Warnings:

  - You are about to drop the column `reaction` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `kisses` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `hearts` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `hot` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `reaction` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `kisses` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `hearts` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `hot` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `reaction` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `kisses` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `hearts` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `hot` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Challenge" DROP COLUMN "reaction",
DROP COLUMN "kisses",
DROP COLUMN "hearts",
DROP COLUMN "hot",
ADD COLUMN     "likedBy" TEXT[],
ADD COLUMN     "likes" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "reaction",
DROP COLUMN "kisses",
DROP COLUMN "hearts",
DROP COLUMN "hot",
ADD COLUMN     "likedBy" TEXT[],
ADD COLUMN     "likes" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "reaction",
DROP COLUMN "kisses",
DROP COLUMN "hearts",
DROP COLUMN "hot",
ADD COLUMN     "likedBy" TEXT[],
ADD COLUMN     "likes" BIGINT NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "ReactionType";

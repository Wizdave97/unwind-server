/*
  Warnings:

  - Added the required column `attachment_url` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachmentMeta` to the `Challenge` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachmentMeta` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachmentType` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachment_url` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachmentMeta` to the `Cruise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachment_url` to the `Cruise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attachmentMeta` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Challenge" ADD COLUMN     "attachment_url" TEXT NOT NULL,
ADD COLUMN     "attachmentMeta" JSONB NOT NULL,
ADD COLUMN     "hashtags" TEXT[];

-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "attachmentMeta" JSONB NOT NULL,
ADD COLUMN     "attachmentType" "AttahmentType" NOT NULL,
ADD COLUMN     "attachment_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cruise" ADD COLUMN     "attachmentMeta" JSONB NOT NULL,
ADD COLUMN     "attachment_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "attachmentMeta" JSONB NOT NULL;

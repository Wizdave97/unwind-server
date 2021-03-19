/*
  Warnings:

  - Made the column `content` on table `Post` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Challenge" ALTER COLUMN "attachmentType" DROP NOT NULL,
ALTER COLUMN "attachment_url" DROP NOT NULL,
ALTER COLUMN "attachmentMeta" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Cruise" ALTER COLUMN "attachmentType" DROP NOT NULL,
ALTER COLUMN "attachmentMeta" DROP NOT NULL,
ALTER COLUMN "attachment_url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "attachment_url" DROP NOT NULL,
ALTER COLUMN "attachmentMeta" DROP NOT NULL,
ALTER COLUMN "attachmentType" DROP NOT NULL,
ALTER COLUMN "content" SET NOT NULL;

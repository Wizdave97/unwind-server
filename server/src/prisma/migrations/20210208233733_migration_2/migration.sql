/*
  Warnings:

  - You are about to drop the column `img_url` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `video_url` on the `Post` table. All the data in the column will be lost.
  - Added the required column `attachment_url` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "img_url",
DROP COLUMN "video_url",
ADD COLUMN     "attachment_url" TEXT NOT NULL,
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "reaction" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "challengeId" DROP NOT NULL;

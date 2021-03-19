/*
  Warnings:

  - You are about to drop the column `uid` on the `Peek` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Peek` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Peek" DROP CONSTRAINT "Peek_uid_fkey";

-- AlterTable
ALTER TABLE "Peek" DROP COLUMN "uid",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Peek" ADD FOREIGN KEY ("user_id") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

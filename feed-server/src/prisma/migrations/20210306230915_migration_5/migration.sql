/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[user_id]` on the table `Peek`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Peek_user_id_unique" ON "Peek"("user_id");

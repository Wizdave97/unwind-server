-- CreateEnum
CREATE TYPE "PostOrigin" AS ENUM ('REGULAR', 'OGCHALLENGE');

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "origin" "PostOrigin" NOT NULL DEFAULT E'REGULAR';

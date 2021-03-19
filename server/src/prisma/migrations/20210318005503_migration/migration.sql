-- AlterTable
ALTER TABLE "Challenge" ALTER COLUMN "reaction" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "reaction" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Cruise" ALTER COLUMN "reaction" DROP NOT NULL;

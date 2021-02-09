-- CreateEnum
CREATE TYPE "AttahmentType" AS ENUM ('VIDEO', 'IMAGE');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "uid" TEXT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_name" TEXT,
    "email" TEXT NOT NULL,
    "img_url" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "location" JSONB,

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "img_url" TEXT[],
    "video_url" TEXT NOT NULL,
    "attachmentType" "AttahmentType" NOT NULL,
    "content" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "reaction" JSONB NOT NULL,
    "location" JSONB NOT NULL,
    "hashtags" TEXT[],
    "cruiseId" INTEGER[],
    "challengeId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cruise" (
    "id" SERIAL NOT NULL,
    "slogan" TEXT NOT NULL,
    "attachmentType" "AttahmentType" NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "followers" INTEGER[],
    "following" INTEGER[],
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "challenge" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "attachmentType" "AttahmentType" NOT NULL,
    "followers" INTEGER[],
    "following" INTEGER[],
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_User" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.uid_unique" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User.user_name_unique" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_User_AB_unique" ON "_User"("A", "B");

-- CreateIndex
CREATE INDEX "_User_B_index" ON "_User"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cruise" ADD FOREIGN KEY ("creatorId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("creatorId") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User" ADD FOREIGN KEY ("A") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User" ADD FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

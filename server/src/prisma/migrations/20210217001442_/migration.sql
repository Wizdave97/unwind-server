-- CreateEnum
CREATE TYPE "AttachmentType" AS ENUM ('VIDEO', 'IMAGE', 'AUDIO');

-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('KISS', 'HEART', 'HOT');

-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('POST', 'CRUISE', 'CHALLENGE');

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "cursor" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_name" TEXT,
    "bio" TEXT,
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
    "cursor" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "attachment_url" TEXT NOT NULL,
    "attachmentMeta" JSONB NOT NULL,
    "attachmentType" "AttachmentType" NOT NULL,
    "content" TEXT,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "reaction" JSONB,
    "location" JSONB,
    "hashtags" TEXT[],
    "kisses" TEXT[],
    "hearts" TEXT[],
    "hot" TEXT[],
    "challengeId" INTEGER,
    "cruiseId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cruise" (
    "id" SERIAL NOT NULL,
    "cursor" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "attachmentType" "AttachmentType" NOT NULL,
    "attachmentMeta" JSONB NOT NULL,
    "attachment_url" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "reaction" JSONB NOT NULL,
    "kisses" TEXT[],
    "hearts" TEXT[],
    "hot" TEXT[],
    "hashtags" TEXT[],
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "userUserId" INTEGER,
    "postId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "cursor" TEXT NOT NULL,
    "entityId" INTEGER NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "comment" TEXT NOT NULL,
    "attachmentMeta" JSONB,
    "attachmentType" "AttachmentType",
    "attachment_url" TEXT,
    "userId" TEXT NOT NULL,
    "reaction" JSONB NOT NULL,
    "kisses" TEXT[],
    "hearts" TEXT[],
    "hot" TEXT[],
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER,
    "challengeId" INTEGER,
    "cruiseId" INTEGER,
    "userUserId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "id" SERIAL NOT NULL,
    "cursor" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "attachmentType" "AttachmentType" NOT NULL,
    "attachment_url" TEXT NOT NULL,
    "attachmentMeta" JSONB NOT NULL,
    "reaction" JSONB NOT NULL,
    "hashtags" TEXT[],
    "kisses" TEXT[],
    "hearts" TEXT[],
    "hot" TEXT[],
    "start" TIMESTAMP(3),
    "end" TIMESTAMP(3),
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,
    "userUserId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_User" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CruiseFollowing" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ChallengeFollowing" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.uid_unique" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User.cursor_unique" ON "User"("cursor");

-- CreateIndex
CREATE UNIQUE INDEX "User.user_name_unique" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Post.cursor_unique" ON "Post"("cursor");

-- CreateIndex
CREATE UNIQUE INDEX "Cruise.cursor_unique" ON "Cruise"("cursor");

-- CreateIndex
CREATE UNIQUE INDEX "Comment.cursor_unique" ON "Comment"("cursor");

-- CreateIndex
CREATE UNIQUE INDEX "Challenge.cursor_unique" ON "Challenge"("cursor");

-- CreateIndex
CREATE UNIQUE INDEX "_User_AB_unique" ON "_User"("A", "B");

-- CreateIndex
CREATE INDEX "_User_B_index" ON "_User"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CruiseFollowing_AB_unique" ON "_CruiseFollowing"("A", "B");

-- CreateIndex
CREATE INDEX "_CruiseFollowing_B_index" ON "_CruiseFollowing"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ChallengeFollowing_AB_unique" ON "_ChallengeFollowing"("A", "B");

-- CreateIndex
CREATE INDEX "_ChallengeFollowing_B_index" ON "_ChallengeFollowing"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("user_id") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("cruiseId") REFERENCES "Cruise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cruise" ADD FOREIGN KEY ("creatorId") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cruise" ADD FOREIGN KEY ("userUserId") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cruise" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userId") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("challengeId") REFERENCES "Challenge"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("cruiseId") REFERENCES "Cruise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD FOREIGN KEY ("userUserId") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("creatorId") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD FOREIGN KEY ("userUserId") REFERENCES "User"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User" ADD FOREIGN KEY ("A") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_User" ADD FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CruiseFollowing" ADD FOREIGN KEY ("A") REFERENCES "Cruise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CruiseFollowing" ADD FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeFollowing" ADD FOREIGN KEY ("A") REFERENCES "Challenge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChallengeFollowing" ADD FOREIGN KEY ("B") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

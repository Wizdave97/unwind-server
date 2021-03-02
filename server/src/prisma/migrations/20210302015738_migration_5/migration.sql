-- CreateTable
CREATE TABLE "Peek" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "expiresUTC" BIGINT,
    "active" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Peek" ADD FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;

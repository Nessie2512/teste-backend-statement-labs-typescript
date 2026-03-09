-- CreateEnum
CREATE TYPE "status" AS ENUM ('Free', 'Occupied');

-- CreateTable
CREATE TABLE "Parking" (
    "id" TEXT NOT NULL,
    "parking" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Parking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spots" (
    "id" TEXT NOT NULL,
    "spot" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "parkingId" TEXT NOT NULL,
    "status" "status" NOT NULL DEFAULT 'Free',

    CONSTRAINT "Spots_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Spots" ADD CONSTRAINT "Spots_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "Parking" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Spots" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Tickets" (
    "id" TEXT NOT NULL,
    "plateNumber" TEXT NOT NULL,
    "spotId" TEXT NOT NULL,
    "isCheckedOut" BOOLEAN NOT NULL,
    "checkOutTime" TIMESTAMP(3) NOT NULL,
    "amountToPay" INTEGER NOT NULL,
    "parkingId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking"("id") ON DELETE SET NULL ON UPDATE CASCADE;

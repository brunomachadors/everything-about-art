/*
  Warnings:

  - Made the column `authorId` on table `artwork` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('MUSEUM', 'STREET_ART');

-- DropForeignKey
ALTER TABLE "artwork" DROP CONSTRAINT "artwork_authorId_fkey";

-- AlterTable
ALTER TABLE "artwork" ADD COLUMN     "locationId" TEXT,
ALTER COLUMN "authorId" SET NOT NULL;

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "LocationType" NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pricePolicy" JSONB NOT NULL,
    "description" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "artwork" ADD CONSTRAINT "artwork_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artwork" ADD CONSTRAINT "artwork_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

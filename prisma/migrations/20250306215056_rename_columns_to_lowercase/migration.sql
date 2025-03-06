/*
  Warnings:

  - You are about to drop the `Artwork` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Artwork";

-- CreateTable
CREATE TABLE "artwork" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,
    "style" TEXT,
    "technique" TEXT,
    "location" TEXT,
    "description" JSONB NOT NULL,
    "image" TEXT NOT NULL,
    "images" TEXT[],
    "tags" TEXT[],
    "curiosities" TEXT[],
    "quote" TEXT,
    "pricehistory" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "artwork_pkey" PRIMARY KEY ("id")
);

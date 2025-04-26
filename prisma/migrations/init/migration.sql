-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('MUSEUM', 'STREET_ART');

-- CreateTable
CREATE TABLE "artwork" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "origin" TEXT NOT NULL,
    "style" TEXT,
    "styleArray" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "technique" TEXT,
    "location" TEXT,
    "locationId" TEXT,
    "description" JSONB NOT NULL,
    "image" TEXT NOT NULL,
    "images" TEXT[],
    "tags" TEXT[],
    "curiosities" TEXT[],
    "quote" TEXT,
    "pricehistory" JSONB NOT NULL,
    "createdat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "artwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "bio" JSONB NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "deathDate" TEXT,
    "nationality" TEXT NOT NULL,
    "movements" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "occupations" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
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


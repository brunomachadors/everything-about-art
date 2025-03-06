/*
  Warnings:

  - The `description` column on the `Artwork` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Artwork" ADD COLUMN     "curiosities" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "location" TEXT,
ADD COLUMN     "priceHistory" JSONB,
ADD COLUMN     "quote" TEXT,
ADD COLUMN     "style" TEXT,
ADD COLUMN     "technique" TEXT,
DROP COLUMN "description",
ADD COLUMN     "description" JSONB;

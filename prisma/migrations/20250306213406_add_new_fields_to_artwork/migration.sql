/*
  Warnings:

  - Made the column `location` on table `Artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `priceHistory` on table `Artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `style` on table `Artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `technique` on table `Artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Artwork` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Artwork" ALTER COLUMN "curiosities" DROP DEFAULT,
ALTER COLUMN "images" DROP DEFAULT,
ALTER COLUMN "location" SET NOT NULL,
ALTER COLUMN "priceHistory" SET NOT NULL,
ALTER COLUMN "priceHistory" SET DATA TYPE TEXT,
ALTER COLUMN "style" SET NOT NULL,
ALTER COLUMN "technique" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;

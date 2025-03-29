/*
  Warnings:

  - Changed the type of `bio` on the `artist` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "artist" DROP COLUMN "bio",
ADD COLUMN     "bio" JSONB NOT NULL;

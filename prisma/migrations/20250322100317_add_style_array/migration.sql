-- AlterTable
ALTER TABLE "artwork" ADD COLUMN     "styleArray" TEXT[] DEFAULT ARRAY[]::TEXT[];

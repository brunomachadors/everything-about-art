-- AlterTable
ALTER TABLE "artwork" ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "artwork" ADD CONSTRAINT "artwork_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "artist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

import type { Artwork as ArtworkType } from '@/app/types/artworks';
import Image from 'next/image';

interface ArtworkProps {
  artworkInfo: ArtworkType;
}

function Artwork({ artworkInfo }: ArtworkProps) {
  return (
    <div className="flex items-start  justify-center gap-12 w-full max-w-5xl mx-auto">
      <div className="w-1/2 flex justify-end">
        <Image
          src={artworkInfo.image}
          width={1000}
          height={1000}
          alt={`Obra: ${artworkInfo.title}`}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">{artworkInfo.title}</h2>

        <p className="text-lg">{artworkInfo.description}</p>

        <p className="text-md font-semibold">Autor: {artworkInfo.author}</p>
        <p className="text-md">Ano: {artworkInfo.year}</p>

        <blockquote className="italic text-yellow-600 border-l-4 border-yellow-500 pl-4">
          {artworkInfo.quote}
        </blockquote>
      </div>
    </div>
  );
}

export default Artwork;

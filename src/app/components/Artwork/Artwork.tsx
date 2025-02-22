import type { Artwork as ArtworkType } from '@/app/types/artworks';
import Image from 'next/image';

interface ArtworkProps {
  artworkInfo: ArtworkType;
}

function Artwork({ artworkInfo }: ArtworkProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full max-w-5xl mx-auto">
      {/* Imagem da Obra */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={artworkInfo.image}
          width={1000}
          height={1000}
          alt={`Obra: ${artworkInfo.title}`}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Informações da Obra */}
      <div className="w-full md:w-1/2 space-y-4 ">
        <p className="text-lg">
          <strong>🎨 Autor:</strong> {artworkInfo.author}
        </p>
        <p className="text-lg">
          <strong>📅 Ano:</strong> {artworkInfo.year}
        </p>
        <p className="text-lg">
          <strong>🌍 País de Origem:</strong> {artworkInfo.country}
        </p>
        <p className="text-lg">
          <strong>🖌️ Técnica:</strong> {artworkInfo.technique}
        </p>
        <p className="text-lg">
          <strong>🏛️ Localização:</strong> {artworkInfo.location}
        </p>
        <p className="text-lg">
          <strong>💰 Primeira Venda:</strong>{' '}
          {artworkInfo.priceHistory.firstSale}
        </p>
        <p className="text-lg">
          <strong>📈 Última Revenda:</strong> {artworkInfo.priceHistory.resale}
        </p>

        <blockquote className="italic text-yellow-500 border-l-4 border-yellow-500 pl-4">
          "{artworkInfo.quote}"
        </blockquote>
      </div>
    </div>
  );
}

export default Artwork;

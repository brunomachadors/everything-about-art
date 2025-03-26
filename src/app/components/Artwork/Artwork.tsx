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
          <strong>🎨 Artista:</strong> {artworkInfo.artist}
        </p>
        <p className="text-lg">
          <strong>📅 Ano:</strong>{' '}
          {artworkInfo.year && artworkInfo.year !== 0
            ? artworkInfo.year
            : 'Desconhecido'}
        </p>
        <p className="text-lg">
          <strong>🌍 País de Origem:</strong> {artworkInfo.origin}
        </p>

        {/* Novo campo de estilos */}
        <p className="text-lg">
          <strong>🧩 Estilo:</strong>{' '}
          {artworkInfo.styleArray && artworkInfo.styleArray.length > 0
            ? artworkInfo.styleArray.join(', ')
            : 'Desconhecido'}
        </p>

        <p className="text-lg">
          <strong>🖌️ Técnica:</strong> {artworkInfo.technique || 'Desconhecida'}
        </p>
        <p className="text-lg">
          <strong>🏛️ Localização:</strong>{' '}
          {artworkInfo.location || 'Desconhecida'}
        </p>
        <p className="text-lg">
          <strong>💰 Primeira Venda:</strong>{' '}
          {artworkInfo.pricehistory?.firstSale || 'Desconhecido'}
        </p>
        <p className="text-lg">
          <strong>📈 Última Revenda:</strong>{' '}
          {artworkInfo.pricehistory?.resale || 'Desconhecido'}
        </p>

        <blockquote className="italic text-yellow-500 border-l-4 border-yellow-500 pl-4">
          "{artworkInfo.quote || 'Sem citação disponível'}"
        </blockquote>
      </div>
    </div>
  );
}

export default Artwork;

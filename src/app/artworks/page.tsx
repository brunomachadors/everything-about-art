import { artworks } from '@/app/data/artworks';
import Link from 'next/link';
import Image from 'next/image';

function ArtworksPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Obras de Arte</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {artworks.map((artwork) => (
          <Link
            key={artwork.id}
            href={`/artworks/${artwork.id}`}
            className="group"
          >
            <div className="shadow-md overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
              {/* Imagem */}
              <div className="w-full h-64 flex items-center justify-center ">
                <Image
                  src={artwork.image}
                  width={300}
                  height={400} // Mantemos um valor maior para suportar obras verticais
                  alt={artwork.title}
                  className="w-auto h-full max-h-64 object-contain"
                />
              </div>

              {/* Informações */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-yellow-500">
                  {artwork.title}
                </h2>
                <p className="text-sm ">{artwork.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtworksPage;

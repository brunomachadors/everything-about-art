'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number | null;
  origin: string;
  style: string | null;
  technique: string | null;
  location: string | null;
  image: string;
}

function ArtworksPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const response = await fetch('/api/artworks');
        if (!response.ok) {
          throw new Error('Erro ao buscar as obras de arte');
        }
        const data = await response.json();
        setArtworks(data);
      } catch (err) {
        setError('Falha ao carregar as obras de arte.');
        console.error('Erro ao buscar as obras:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchArtworks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-bold">Carregando obras de arte...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-bold text-red-500">{error}</p>
      </div>
    );
  }

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
              <div className="w-full h-64 flex items-center justify-center">
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
                <p className="text-sm">{artwork.artist}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtworksPage;

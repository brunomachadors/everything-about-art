'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Artwork from '@/app/components/Artwork/Artwork';
import LoadingSpinner from '@/app/components/Loading/Loading';
import { Artwork as ArtworkType } from '@/app/types/artworks';

export default function ArtworkPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const artworkId = Array.isArray(id) ? id[0] : id;

  const [artwork, setArtwork] = useState<ArtworkType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [author, setAuthor] = useState<{
    id: string;
    name: string;
    image?: string;
  } | null>(null);

  useEffect(() => {
    async function fetchArtwork() {
      try {
        setIsLoading(true);

        // ✅ Salva a página atual vinda da query string
        const pageFromQuery = searchParams.get('page');
        if (pageFromQuery) {
          sessionStorage.setItem('artworksPage', pageFromQuery);
        }

        const response = await fetch(`/api/artworks/${artworkId}`);
        if (!response.ok) {
          throw new Error('Obra de arte não encontrada.');
        }

        const data = await response.json();
        setArtwork(data);

        if (data.author?.id) {
          const authorResponse = await fetch(`/api/artists/${data.author.id}`);
          if (authorResponse.ok) {
            const authorData = await authorResponse.json();
            setAuthor(authorData);
          }
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    if (artworkId) {
      fetchArtwork();
    }
  }, [artworkId, searchParams]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !artwork) {
    return (
      <div className="text-center text-yellow-500">
        Obra de arte não encontrada.
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">
        {artwork.title}
      </h1>

      <Artwork artworkInfo={artwork} />

      <div className="w-full max-w-3xl p-6 md:p-8 lg:p-10 space-y-6">
        {Array.isArray(artwork.description) ? (
          artwork.description.map((section, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg">{section.text}</p>
              {section.image && (
                <Image
                  src={section.image}
                  alt={`Imagem de ${artwork.title}`}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-md"
                />
              )}
            </div>
          ))
        ) : (
          <p className="text-lg">Nenhuma descrição disponível.</p>
        )}
      </div>

      {author && (
        <div className="relative mt-16 w-full max-w-5xl flex flex-col items-center text-center">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mb-4">
            <Image
              src={author.image || ''}
              alt={`Foto de ${author.name}`}
              fill
              className="object-cover rounded-full border-4 border-yellow-500 shadow-md"
            />
          </div>

          <p className="text-white text-lg">Veja mais sobre o artista:</p>
          <Link
            href={`/artist/${author.id}`}
            className="text-yellow-400 text-2xl font-bold hover:underline"
          >
            {author.name}
          </Link>
        </div>
      )}

      <button
        onClick={() => window.history.back()}
        className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
      >
        Voltar para Obras
      </button>
    </main>
  );
}

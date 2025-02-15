'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { artworks } from '@/app/data/artworks';
import Artwork from '@/app/components/Artwork/Artwork';
import LoadingSpinner from '@/app/components/Loading/Loading';
import { Artwork as ArtworkType } from '@/app/types/artworks'; // Ajuste conforme sua estrutura de tipos

export default function ArtworkPage() {
  const params = useParams();
  const artworkId = params.id;

  const [artwork, setArtwork] = useState<ArtworkType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const foundArtwork = artworks.find((art) => art.id === artworkId);
      setArtwork(foundArtwork || null);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [artworkId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!artwork) {
    return (
      <div className="text-center text-yellow-500">Artwork not found.</div>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8">
        {artwork.title}
      </h1>
      <Artwork artworkInfo={artwork} />
      <p className="text-lg text-gray-300">
        <strong>Author:</strong> {artwork.author}
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-8 text-yellow-500 border border-yellow-500 rounded-full px-4 py-2 hover:bg-yellow-500 hover:text-gray-900 transition"
      >
        Back to Artworks
      </button>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: { text: string }[];
}

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch('/api/artists');
        const data = await response.json();
        setArtists(data.artists);
      } catch (err) {
        console.error('Erro ao buscar artistas:', err);
      }
    }

    fetchArtists();
  }, []);

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Artistas</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-center">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artist/${artist.id}`}
            className="group flex justify-center"
          >
            <div className="shadow-md overflow-hidden transition-transform transform hover:scale-105 rounded-lg flex flex-col items-center">
              <div className="w-72 h-80 flex items-center justify-center">
                <Image
                  src={artist.image}
                  width={300}
                  height={300}
                  alt={artist.name}
                  className="rounded-md object-contain max-h-72"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold text-yellow-500">
                  {artist.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {artist.bio[0]?.text}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

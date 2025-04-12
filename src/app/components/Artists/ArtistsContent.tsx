'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import LoadingSpinner from '@/app/components/Loading/Loading';
import StyleBadge from '../Style';
import Pagination from '../Pagination';

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: { text: string }[];
  movements: string[];
}

export default function ArtistsContent() {
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') || '1', 10);

  const [artists, setArtists] = useState<Artist[]>([]);
  const [filteredArtists, setFilteredArtists] = useState<Artist[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const artistsPerPage = 6;

  useEffect(() => {
    async function fetchArtists() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/artists');
        const data = await response.json();
        setArtists(data.artists || []);
        setFilteredArtists(data.artists || []);
        setIsLoading(false);
      } catch (err) {
        console.error('Erro ao buscar artistas:', err);
      }
    }

    fetchArtists();
  }, []);

  useEffect(() => {
    const filtered = artists.filter((artist) =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredArtists(filtered);
    setCurrentPage(1); // Reinicia para a primeira página ao aplicar um filtro
  }, [searchQuery, artists]);

  const totalPages = Math.ceil(filteredArtists.length / artistsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * artistsPerPage;
  const displayedArtists = filteredArtists.slice(
    startIndex,
    startIndex + artistsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Atualiza a URL com o número da página atual
    const url = new URL(window.location.href);
    url.searchParams.set('page', String(page));
    window.history.pushState({}, '', url.toString());
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <div className="w-full flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar artista..."
          className="px-4 py-2 border rounded bg-[var(--background)] text-[var(--foreground)] bg-opacity-50 placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-center m-6">
        {displayedArtists.length > 0 ? (
          displayedArtists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artist/${artist.id}?page=${currentPage}`}
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
                    priority
                  />
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-yellow-500">
                    {artist.name}
                  </h2>
                  <p className="text-sm line-clamp-3">
                    {artist.bio?.[0]?.text}
                  </p>
                  <div className="flex flex-wrap gap-2 m-4 items-center justify-center">
                    {artist.movements.map((movement) => (
                      <StyleBadge key={movement} label={movement} />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-lg">Nenhum artista encontrado.</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

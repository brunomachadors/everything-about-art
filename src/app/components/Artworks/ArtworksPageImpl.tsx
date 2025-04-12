'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoadingSpinner from '../Loading/Loading';
import Filter from '../Filters';
import StyleBadge from '../Style';
import Pagination from '../Pagination';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  origin: string;
  technique: string | null;
  image: string;
  styleArray: string[];
}

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

function ArtworksPage({ currentPage, onPageChange }: Props) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const artworksPerPage = 6;

  useEffect(() => {
    async function fetchArtworks() {
      setLoading(true);
      try {
        const response = await fetch('/api/artworks');
        if (!response.ok) throw new Error('Erro ao buscar obras');
        const data = await response.json();
        setArtworks(data.artworks || []);
        setFilteredArtworks(data.artworks || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchArtworks();
  }, []);

  useEffect(() => {
    let filtered = artworks;
    if (searchQuery) {
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artwork.artist.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCountry) {
      filtered = filtered.filter(
        (artwork) => artwork.origin === selectedCountry
      );
    }

    setFilteredArtworks(filtered);
  }, [searchQuery, selectedCountry, artworks]);

  const startIndex = (currentPage - 1) * artworksPerPage;
  const displayedArtworks = filteredArtworks.slice(
    startIndex,
    startIndex + artworksPerPage
  );
  const totalPages = Math.ceil(filteredArtworks.length / artworksPerPage);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Obras de Arte</h1>

      <Filter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        artworks={artworks}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-center">
        {displayedArtworks.length > 0 ? (
          displayedArtworks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/artworks/${artwork.id}?page=${currentPage}`}
              className="group flex justify-center"
            >
              <div className="shadow-md overflow-hidden transition-transform transform hover:scale-105 rounded-lg flex flex-col items-center">
                <div className="w-72 h-96 flex items-center justify-center">
                  <Image
                    src={artwork.image}
                    width={300}
                    height={400}
                    alt={artwork.title}
                    className="w-auto h-full max-h-96 object-contain"
                    priority
                  />
                </div>

                <h2 className="text-lg font-bold">{artwork.title}</h2>
                <p className="text-sm">{artwork.artist}</p>
                <div className="p-4 text-center">
                  {artwork.styleArray.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-1">
                      {artwork.styleArray.map((style) => (
                        <StyleBadge key={style} label={style} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-lg font-bold">Nenhuma obra encontrada.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ArtworksPage;

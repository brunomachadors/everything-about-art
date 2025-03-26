'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '../components/Pagination';
import Filter from '../components/Filters';
import StyleBadge from '../components/Style';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  origin: string;
  technique: string | null;
  image: string;
  styleArray: string[];
}

function ArtworksPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const artworksPerPage = 6;

  useEffect(() => {
    async function fetchArtworks() {
      try {
        const response = await fetch('/api/artworks');
        if (!response.ok) {
          throw new Error('Erro ao buscar as obras de arte');
        }
        const data = await response.json();
        setArtworks(data.artworks || []);
        setFilteredArtworks(data.artworks || []);
      } catch (err) {
        console.error('Erro ao buscar as obras:', err);
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
    setCurrentPage(1);
  }, [searchQuery, selectedCountry, artworks]);

  const startIndex = (currentPage - 1) * artworksPerPage;
  const displayedArtworks = filteredArtworks.slice(
    startIndex,
    startIndex + artworksPerPage
  );
  const totalPages = Math.ceil(filteredArtworks.length / artworksPerPage);

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
              href={`/artworks/${artwork.id}`}
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
                  />
                </div>

                <div className="p-4 text-center">
                  {artwork.styleArray && artwork.styleArray.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-1">
                      {artwork.styleArray.map((style) => (
                        <StyleBadge key={style} label={style} />
                      ))}
                    </div>
                  )}
                </div>
                <h2 className="text-lg font-bold">{artwork.title}</h2>
                <p className="text-sm">{artwork.artist}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-lg font-bold text-gray-500">
            Nenhuma obra encontrada.
          </p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default ArtworksPage;

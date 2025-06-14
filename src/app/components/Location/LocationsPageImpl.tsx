'use client';

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../Loading/Loading';
import Pagination from '../Pagination';

interface Location {
  id: string;
  name: string;
  type: 'MUSEUM' | 'STREET_ART';
  city: string;
  country: string;
  description: { text: string; image?: string }[];
  image: string;
}

interface Props {
  type: 'MUSEUM' | 'STREET_ART';
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function LocationsPageImpl({
  type,
  currentPage,
  onPageChange,
}: Props) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const perPage = 6;

  useEffect(() => {
    async function fetchLocations() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/location');
        const data = await response.json();
        const all = data.locations || [];
        const filteredByType = all.filter((loc: Location) => loc.type === type);

        setLocations(filteredByType);
        setFilteredLocations(filteredByType);
        setIsLoading(false);
      } catch (err) {
        console.error('Erro ao buscar locais:', err);
      }
    }

    fetchLocations();
  }, [type]);

  useEffect(() => {
    const filtered = locations.filter((loc) =>
      loc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredLocations(filtered);
  }, [searchQuery, locations]);

  const displayedLocations = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return filteredLocations.slice(start, start + perPage);
  }, [filteredLocations, currentPage]);

  const totalPages = Math.ceil(filteredLocations.length / perPage);

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
          placeholder={`Buscar ${type === 'MUSEUM' ? 'museu' : 'local'}...`}
          className="px-4 py-2 border rounded bg-[var(--background)] text-[var(--foreground)] bg-opacity-50 placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl justify-center m-6">
        {displayedLocations.length > 0 ? (
          displayedLocations.map((location) => (
            <Link
              key={location.id}
              href={`/${type === 'MUSEUM' ? 'museum' : 'street-art'}/${
                location.id
              }?page=${currentPage}`}
              className="group flex justify-center"
            >
              <div className="shadow-md overflow-hidden transition-transform transform hover:scale-105 rounded-lg flex flex-col items-center">
                <div className="w-72 h-80 flex items-center justify-center">
                  {location.image ? (
                    <Image
                      src={location.image}
                      width={300}
                      height={300}
                      alt={location.name}
                      className="rounded-md object-cover max-h-72"
                      priority
                    />
                  ) : (
                    <p className="text-gray-400">Sem imagem</p>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-yellow-500">
                    {location.name}
                  </h2>
                  <p className="text-sm text-gray-100 dark:text-gray-100">
                    {location.city}, {location.country}
                  </p>
                  <p className="text-xs mt-2 font-medium text-black bg-yellow-500 rounded-full px-3 py-1">
                    {type === 'MUSEUM' ? 'Museu' : 'Arte Urbana'}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-lg">Nenhuma localização encontrada.</p>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </main>
  );
}

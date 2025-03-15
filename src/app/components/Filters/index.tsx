import React from 'react';

interface FilterProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  artworks: { origin: string }[];
}

const Filter: React.FC<FilterProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  artworks,
}) => {
  return (
    <div className="mb-6 flex flex-wrap justify-center gap-4">
      {/* 🔍 Campo de pesquisa */}
      <input
        type="text"
        placeholder="Buscar por título ou artista..."
        className="px-4 py-2 border rounded bg-[var(--background)] text-[var(--foreground)] bg-opacity-50 placeholder-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition min-w-[250px] sm:min-w-[300px] flex-grow"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* 🌍 Filtro por país */}
      <select
        className="px-4 py-2 border rounded bg-[var(--background)] text-[var(--foreground)] bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition min-w-[250px] text-center"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="" className="text-center">
          Países
        </option>
        {[...new Set(artworks.map((a) => a.origin || 'Desconhecido'))].map(
          (country) => (
            <option key={country} value={country} className="text-center">
              {country}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default Filter;

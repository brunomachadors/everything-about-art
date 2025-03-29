'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import StyleBadge from '@/app/components/Style';
import LoadingSpinner from '@/app/components/Loading/Loading';

interface Artwork {
  id: string;
  title: string;
  image: string;
}

interface BioSection {
  text: string;
  image?: string;
}

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: BioSection[];
  fullName: string;
  birthDate: string;
  deathDate?: string;
  nationality: string;
  movements: string[];
  occupations: string[];
  artworks: Artwork[];
}

export default function ArtistDetailPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtist() {
      try {
        const response = await fetch(`/api/artists/${id}`);
        const data = await response.json();
        setArtist(data);
      } catch (err) {
        console.error('Erro ao buscar artista:', err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchArtist();
    }
  }, [id]);

  if (loading || !artist) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">{artist.name}</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={artist.image}
            width={400}
            height={400}
            alt={`Foto de ${artist.name}`}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3 text-base text-gray-700 dark:text-gray-300">
          <p>
            <strong>Nome completo:</strong> {artist.fullName}
          </p>
          <p>
            <strong>Nascimento:</strong> {artist.birthDate}
          </p>
          {artist.deathDate && (
            <p>
              <strong>Falecimento:</strong> {artist.deathDate}
            </p>
          )}
          <p>
            <strong>Nacionalidade:</strong> {artist.nationality}
          </p>
          <p className="flex gap-2 flex-wrap">
            <strong>Movimentos:</strong>
            {artist.movements.map((style) => (
              <StyleBadge key={style} label={style} />
            ))}
          </p>
          <p>
            <strong>Ocupações:</strong> {artist.occupations.join(', ')}
          </p>
        </div>
      </div>

      {/* Bio como descrição com imagem e texto */}
      <div className="w-full max-w-3xl p-6 md:p-8 lg:p-10 space-y-6">
        {artist.bio.map((section, index) => (
          <div key={index} className="space-y-3">
            <p className="text-lg text-justify text-gray-800 dark:text-gray-200">
              {section.text}
            </p>
            {section.image && (
              <Image
                src={section.image}
                alt={`Imagem ${index + 1} sobre ${artist.name}`}
                width={800}
                height={500}
                className="rounded-lg shadow-md mx-auto"
              />
            )}
          </div>
        ))}
      </div>

      {/* Obras */}
      {artist.artworks.length > 0 && (
        <div className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4">Obras conhecidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artist.artworks.map((work) => (
              <Link
                key={work.id}
                href={`/artworks/${work.id}`}
                className="shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={300}
                  height={400}
                  className="object-cover w-full h-72"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-yellow-500">
                    {work.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link
        href="/artist"
        className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
      >
        Voltar para Artistas
      </Link>
    </main>
  );
}

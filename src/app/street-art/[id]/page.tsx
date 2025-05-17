'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface DescriptionSection {
  text?: string;
  items?: string[];
  image?: string;
  caption?: string;
}

interface PricePolicy {
  servicos?: string[];
  entradaGeral?: {
    adultos?: string;
    membros?: string;
    residentesDeChicago?: string;
    residentesDeIllinois?: string;
    criancasMenoresDe14Anos?: string;
    estudantesEMaioresDe65Anos?: string;
  };
}

interface Artwork {
  id: string;
  title: string;
  artist: string;
  image: string;
}

interface MuseumData {
  name: string;
  image: string;
  city: string;
  country: string;
  address: string;
  pricePolicy: PricePolicy;
  description: DescriptionSection[];
  artworks: Artwork[];
}

export default function Museum() {
  const { id } = useParams();
  const [museum, setMuseum] = useState<MuseumData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  function formatCamelCase(text: string) {
    return text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([a-zA-Z])/g, '$1 $2')
      .replace(/^./, (str) => str.toUpperCase());
  }

  useEffect(() => {
    if (!id) return;

    const fetchMuseum = async () => {
      try {
        const response = await fetch(`/api/location/${id}`);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do museu');
        }
        const data = await response.json();
        setMuseum(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMuseum();
  }, [id]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!museum) {
    return <div>Museu não encontrado.</div>;
  }

  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-yellow-500">{museum.name}</h1>

      {/* Imagem e Informações Gerais */}
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={museum.image}
            alt={`Imagem principal do museu ${museum.name}`}
            width={400}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3 text-base">
          <p>
            <strong>📍 Localização:</strong> {museum.city}, {museum.country}
          </p>
          <p>
            <strong>📬 Endereço:</strong> {museum.address}
          </p>

          {/* Serviços */}
          {museum.pricePolicy.servicos &&
            museum.pricePolicy.servicos.length > 0 && (
              <div>
                <strong>🛎️ Serviços:</strong>
                <ul className="list-disc list-inside">
                  {museum.pricePolicy.servicos.map((servico, index) => (
                    <li key={index}>{servico}</li>
                  ))}
                </ul>
              </div>
            )}

          {/* Entrada Geral */}
          {museum.pricePolicy.entradaGeral && (
            <div>
              <strong>💰 Entrada Geral:</strong>
              <ul className="list-disc list-inside">
                {Object.entries(museum.pricePolicy.entradaGeral).map(
                  ([categoria, valor], index) => (
                    <li key={index}>
                      <strong>{formatCamelCase(categoria)}:</strong> {valor}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Descrição com Imagens e Curiosidades */}
      <div className="w-full max-w-3xl p-6 md:p-8 lg:p-10 space-y-6">
        {museum.description.map((section, index) => (
          <div key={index} className="space-y-3">
            {section.text && (
              <p className="text-lg text-justify">{section.text}</p>
            )}

            {section.items && section.items.length > 0 && (
              <ul className="list-disc list-inside">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {section.image && (
              <div className="flex flex-col items-center">
                <Image
                  src={section.image}
                  alt={`Imagem ${index + 1} de ${museum.name}`}
                  width={800}
                  height={500}
                  className="rounded-lg shadow-md"
                />
                {section.caption && (
                  <p className="text-sm text-center mt-2">{section.caption}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Obras Relacionadas */}
      {museum.artworks && museum.artworks.length > 0 && (
        <div className="mt-12 w-full max-w-5xl">
          <h2 className="text-2xl font-semibold mb-4">🖼️ Obras em exibição</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {museum.artworks.map((artwork) => (
              <Link
                key={artwork.id}
                href={`/artworks/${artwork.id}`}
                className="shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition"
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={300}
                  height={400}
                  className="object-cover w-full h-72"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-yellow-500">
                    {artwork.title}
                  </h3>
                  <p className="text-sm text-gray-600">{artwork.artist}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/street-art`}
        className="mt-12 text-yellow-500 border border-yellow-500 rounded-full px-6 py-3 hover:bg-yellow-500 hover:text-black transition"
      >
        Voltar para Arte Urbana
      </Link>
    </main>
  );
}

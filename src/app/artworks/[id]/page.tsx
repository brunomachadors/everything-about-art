import Artwork from '@/app/components/Artwork/Artwork';
import { artworks } from '@/app/data/artworks';

import { notFound } from 'next/navigation';

interface ArtworkPageProps {
  params: { id: string };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((art) => art.id === params.id);

  if (!artwork) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8">
      <Artwork artworkInfo={artwork!} />
    </main>
  );
}

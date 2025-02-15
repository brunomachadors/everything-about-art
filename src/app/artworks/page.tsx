import { artworks } from '@/app/data/artworks';
import Link from 'next/link';

function ArtworksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center space-y-4">
      <h1 className="text-3xl font-bold mb-4">Obras de Arte</h1>
      {artworks.map((artwork) => (
        <Link
          key={artwork.id}
          href={`/artworks/${artwork.id}`}
          className="text-lg hover:underline"
        >
          {artwork.title} - {artwork.author}
        </Link>
      ))}
    </div>
  );
}

export default ArtworksPage;

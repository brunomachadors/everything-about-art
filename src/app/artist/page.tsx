import { Suspense } from 'react';
import ArtistsClient from '../components/Artists/ArtistsClient';

export default function ArtistsPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Artistas</h1>
      <Suspense fallback={<p className="text-white">Carregando artistas...</p>}>
        <ArtistsClient />
      </Suspense>
    </main>
  );
}

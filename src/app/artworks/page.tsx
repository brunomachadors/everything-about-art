import { Suspense } from 'react';
import ArtworksClient from '../components/Artworks/ArtworksClient';

export default function ArtworksPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center p-12">Carregando obras...</div>
      }
    >
      <ArtworksClient />
    </Suspense>
  );
}

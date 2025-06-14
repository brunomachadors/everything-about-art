import { Suspense } from 'react';

import LocationsClient from '../components/Location/LocationsClient';

export default function StreetArtPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Arte Urbana</h1>
      <Suspense fallback={<p className="text-white">Carregando locais...</p>}>
        <LocationsClient type="STREET_ART" />
      </Suspense>
    </main>
  );
}

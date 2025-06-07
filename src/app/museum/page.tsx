import { Suspense } from 'react';
import LocationsClient from '../components/Location/LocationsClient';

export default function MuseumsPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Museus</h1>
      <Suspense fallback={<p className="text-white">Carregando museus...</p>}>
        <LocationsClient type="MUSEUM" />
      </Suspense>
    </main>
  );
}

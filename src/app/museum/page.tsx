import { Suspense } from 'react';
import LocationsContent from '../components/Location';

export default function MuseumsPage() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Museus</h1>
      <Suspense fallback={<p className="text-white">Carregando museus...</p>}>
        <LocationsContent />
      </Suspense>
    </main>
  );
}

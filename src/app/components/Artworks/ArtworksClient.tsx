'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArtworksPage from './ArtworksPageImpl';

export default function ArtworksClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageFromQuery = searchParams.get('page');
    const pageFromSession = sessionStorage.getItem('artworksPage');
    const resolvedPage = pageFromQuery
      ? parseInt(pageFromQuery)
      : pageFromSession
      ? parseInt(pageFromSession)
      : 1;

    setCurrentPage(resolvedPage);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('artworksPage', String(page));
    router.push(`/artworks?page=${page}`);
  };

  return (
    <ArtworksPage currentPage={currentPage} onPageChange={handlePageChange} />
  );
}

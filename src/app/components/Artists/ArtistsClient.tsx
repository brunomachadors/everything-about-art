'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ArtistsPageImpl from './ArtistsPageImpl';

export default function ArtistsClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageFromQuery = searchParams.get('page');
    const pageFromSession = sessionStorage.getItem('artistsPage');
    const resolvedPage = pageFromQuery
      ? parseInt(pageFromQuery)
      : pageFromSession
      ? parseInt(pageFromSession)
      : 1;

    setCurrentPage(resolvedPage);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem('artistsPage', String(page));
    router.push(`/artist?page=${page}`);
  };

  return (
    <ArtistsPageImpl
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LocationsPageImpl from './LocationsPageImpl';

interface Props {
  type: 'MUSEUM' | 'STREET_ART';
}

export default function LocationsClient({ type }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageFromQuery = searchParams.get('page');
    const pageFromSession = sessionStorage.getItem(`${type.toLowerCase()}Page`);
    const resolvedPage = pageFromQuery
      ? parseInt(pageFromQuery)
      : pageFromSession
      ? parseInt(pageFromSession)
      : 1;

    setCurrentPage(resolvedPage);
  }, [searchParams, type]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    sessionStorage.setItem(`${type.toLowerCase()}Page`, String(page));
    router.push(`/${type === 'MUSEUM' ? 'museum' : 'street-art'}?page=${page}`);
  };

  return (
    <LocationsPageImpl
      type={type}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
}

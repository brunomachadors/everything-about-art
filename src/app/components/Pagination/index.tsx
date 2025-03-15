import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Gerar os números de páginas a serem exibidos
  const getPages = () => {
    const pages = [];
    const maxPagesToShow = 5; // Número máximo de páginas visíveis

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {/* Botão Anterior */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="px-3 py-2 text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
        >
          &lt;
        </button>
      )}

      {/* Números das páginas */}
      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded border border-[var(--foreground)] transition ${
            page === currentPage
              ? 'bg-[var(--foreground)] text-[var(--background)] font-bold'
              : 'bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Botão Próxima */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-3 py-2 text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;

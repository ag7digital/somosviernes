"use client";

import Link from "next/link";
import { useMemo } from "react";

// Gera um range [start, end]
function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
};

export const Pagination = ({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) => {
  // Limita o número de páginas exibidas ao redor da atual (ex: sempre mostra 7 páginas)
  const visiblePages = useMemo(() => {
    const delta = 3;
    let start = Math.max(currentPage - delta, 1);
    let end = Math.min(currentPage + delta, totalPages);

    if (currentPage <= delta) {
      end = Math.min(2 * delta + 1, totalPages);
    }
    if (currentPage > totalPages - delta) {
      start = Math.max(totalPages - 2 * delta, 1);
    }
    return range(start, end);
  }, [currentPage, totalPages]);

  return (
    <nav aria-label="Pagination" className="flex justify-center mt-10">
      <ul className="flex items-center gap-2 bg-[#f6f8fc] rounded-2xl px-6 py-4 shadow">
        {/* Prev */}
        <li>
          <Link
            href={`${baseUrl}?page=${currentPage - 1}`}
            aria-disabled={currentPage === 1}
            className={`text-2xl px-2 rounded transition hover:bg-violet-100 ${
              currentPage === 1
                ? "pointer-events-none opacity-30"
                : "text-emerald-600"
            }`}
          >
            &#60;
          </Link>
        </li>
        {/* Pages */}
        {visiblePages.map((page) => (
          <li key={page}>
            <Link
              href={`${baseUrl}?page=${page}`}
              aria-current={page === currentPage ? "page" : undefined}
              className={`
                w-8 h-8 flex items-center justify-center rounded 
                ${
                  page === currentPage
                    ? "text-emerald-600 font-bold underline underline-offset-4 bg-transparent"
                    : "text-emerald-300 hover:bg-violet-100"
                }
                transition
              `}
            >
              {page}
            </Link>
          </li>
        ))}
        {/* Next */}
        <li>
          <Link
            href={`${baseUrl}?page=${currentPage + 1}`}
            aria-disabled={currentPage === totalPages}
            className={`text-2xl px-2 rounded transition hover:bg-violet-100 ${
              currentPage === totalPages
                ? "pointer-events-none opacity-30"
                : "text-emerald-600"
            }`}
          >
            &#62;
          </Link>
        </li>
      </ul>
    </nav>
  );
};

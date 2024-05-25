import Link from "next/link";
import React from "react";

type ProductsPaginationProps = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
};

export default function ProductsPagination({
  currentPage,
  totalPages,
}: ProductsPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


  return (
    <nav className="flex justify-center py-10">
      {currentPage > 1 && (
        <Link
          href={`/admin/products?page=${currentPage - 1}`}
          className="pg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-900 
            ring-gray-300 focusz-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
            "
        >
          &laquo;
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/admin/products?page=${page}`}
          className={`px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-900 
            ring-gray-300 focusz-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
            ${currentPage === page ? "bg-gray-900 text-white" : ""}`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`/admin/products?page=${currentPage + 1}`}
          className="pg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-900 
          ring-gray-300 focusz-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
          "
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}

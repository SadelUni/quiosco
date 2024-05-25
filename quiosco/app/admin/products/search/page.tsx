import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";
import ProductsTable from "@/components/products/ProductsTable";
import ProductsSearch from "@/components/products/ProductsSearch";
import Link from "next/link";
import GoBackButton from "@/components/ui/GoBackButton";

async function searchProducts(search: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });

  return products;
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const search = searchParams.search;
  const products = await searchProducts(search);
  return (
    <>
      <Heading>Resultados de busqueda: {search}</Heading>

      <div
        className="flex flex-col gap-5  lg:flex-row lg:justify-between lg:items-center mt-10

        "
      >
<GoBackButton/>
        <ProductsSearch />
      </div>

      <ProductsTable products={products} />
    </>
  );
}

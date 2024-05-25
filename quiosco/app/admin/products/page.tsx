import ProductsPagination from "@/components/products/ProductsPagination";
import ProductsSearch from "@/components/products/ProductsSearch";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function productsCount() {
  const count = await prisma.product.count();
  return count;
}

async function getProducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;

  const products = await prisma.product.findMany({
    take: pageSize,
    skip,
    include: {
      category: true,
    },
  });

  return products;
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const currentPage = +searchParams.page || 1;
  const pageSize = 10;

  if (currentPage < 0) {
    redirect(`/admin/products`);
  }
  const products = await getProducts(currentPage, pageSize);
  const count = await productsCount();

  const totalPages = Math.ceil(count / pageSize);

  if (currentPage > totalPages) {
    redirect(`/admin/products/new`);
  }

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div
        className="flex flex-col gap-5  lg:flex-row lg:justify-between lg:items-center mt-10

        "
      >
        <Link
          href="/admin/products/new"
          className="
          bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer
          hover:bg-amber-500 transition-colors duration-300 ease-in-out rounded-lg
          "
        >
          Crear Producto
        </Link>
        <ProductsSearch />
      </div>

      <ProductsTable products={products} />

      <ProductsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </>
  );
}

import EditProducts from "@/components/products/EditProduct";
import ProductForm from "@/components/products/ProductForm";
import ProductsSearch from "@/components/products/ProductsSearch";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

async function getProductById(id: number) {
  const response = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!response) {
    notFound();
  }

  return response;
}

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(+params.id));

  console.log(product);

  return (
    <div>
      <Heading>Editar Producto: {product.name}</Heading>
      <div
        className="flex flex-col gap-5  lg:flex-row lg:justify-between lg:items-center mt-10

        "
      >
        <GoBackButton />
      </div>

      <EditProducts>
        <ProductForm product={product} />
      </EditProducts>
    </div>
  );
}

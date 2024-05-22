import { Product } from "@prisma/client";
import React from "react";
import { formatCurrency } from "../../src/utils/index";
import Image from "next/image";
import AddProductsButton from "./AddProductsButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-lg">
      <Image
        src={`/products/${product.image}.jpg`}
        alt={product.name}
        width={300}
        height={300}
        className="rounded-t-lg"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(product.price)}
        </p>
        <AddProductsButton product={product} />
      </div>
    </div>
  );
}

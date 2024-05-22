"use client"
import { Product } from "@prisma/client";
import React from "react";
import { useStore } from "@/src/utils/store";

type AddProductsButtonProps = {
    product: Product;
}


export default function AddProductsButton({ product }: AddProductsButtonProps) {
    const { addToOrder } = useStore((state) => state);

  return (
    <button
      type="button"
          className="w-full mt-5 bg-amber-500 text-white font-bold py-3 rounded-lg
            hover:bg-amber-600 transition duration-200 text-center
          "
            onClick={() => addToOrder(product)}
    >
      Agregar al Carrito
    </button>
  );
}

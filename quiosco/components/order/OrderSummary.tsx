"use client";
import { useStore } from "@/src/utils/store";
import React from "react";
import ProductsDetails from "./ProductsDetails";

export default function OrderSummary() {
  const { order } = useStore((state) => state);

  console.log(order);

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-4xl text-center font-black text-gray-800 mb-5">
        Mi pedido
      </h1>

      {order.length === 0 ? (
        <p className="text-center text-gray-800">
          No hay productos en tu pedido
        </p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <ProductsDetails key={item.id} item={item} />
          ))}
        </div>
      )}
    </aside>
  );
}

"use client";
import LatestOrdersItem from "@/components/order/LatestOrdersItem";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import React from "react";
import useSWR from "swr";

export default function OrdersPages() {
  const url = "/orders/api";

  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-6xl font-black text-gray-800">
          Ordenes Listas
        </h1>

        <Logo />

        {data.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-5">
            {data.map((order) => (
                <LatestOrdersItem key={order.id}
                order={order} 
                 />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">
            No hay ordenes pendientes
          </p>
        )}
      </>
    );
}

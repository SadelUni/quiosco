import OrderCard from "@/components/order/OrderCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import React from "react";

async function getPedingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return orders;
}

export default async function OrdersPage() {
  const ordersPeding = await getPedingOrders();
  console.log(ordersPeding);

  return (
    <>
      <Heading>Orders</Heading>

      {ordersPeding.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3  mt-5">
          {ordersPeding.map((order) => (
            <OrderCard key={order.id} order={order} />
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



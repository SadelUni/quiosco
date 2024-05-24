"use client";
import { useStore } from "@/src/utils/store";
import React, { useMemo } from "react";
import ProductsDetails from "./ProductsDetails";
import { formatCurrency } from "@/src/utils";
import { OrderSchema } from "@/src/schema";
import { createOrderAction } from "@/actions/create-order-actions";
import { toast } from "react-toastify";

export default function OrderSummary() {
  const { order, orderClear } = useStore((state) => state);
  const total = useMemo(
    () => formatCurrency(order.reduce((acc, item) => acc + item.subtotal, 0)),
    [order]
  );

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total: order.reduce((acc, item) => acc + item.subtotal, 0),
      order,
    };

    const response = await createOrderAction(data);
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message);
      });
    }

    toast.success("Orden creada con éxito");

    orderClear();
  };

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

          <p className="text-2xl text-amber-500 font-black mt-5">
            <span className="font-bold">Total:</span> {total}
          </p>

          <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              className="w-full bg-gray-100 p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-amber-500
                border border-gray-500
              "
            />

            <input
              type="submit"
              className="w-full bg-amber-500 text-white font-bold py-3 rounded-lg hover:bg-amber-600 transition duration-200 text-center"
              value={"Pagar " + total}
            />
          </form>
        </div>
      )}
    </aside>
  );
}

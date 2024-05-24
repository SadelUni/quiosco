"use server";
import { prisma } from "@/src/lib/prisma";
import { OrderIdSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function completeOrderServer(formdata: FormData) {
  const orderId = formdata.get("orderId_");
  console.log(orderId);

  const data = {
    orderId: orderId,
  };

  const result = OrderIdSchema.safeParse(data);

  if (result.success) {
    try {
      await prisma.order.update({
        where: {
          id: result.data.orderId,
        },
        data: {
          status: true,
          orderReadyAt: new Date(Date.now()),
        },
      });
        
        revalidatePath("/admin/orders");
    } catch (error) {
      console.log("Error al completar la orden");
    }
  }

  console.log("Orden completada");
}

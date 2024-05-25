"use server"

import { prisma } from "@/src/lib/prisma";
import { CreateProductSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateProductAction(data: unknown, id: number) {
    const result = CreateProductSchema.safeParse(data);

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.product.update({
            where: {
                id
            },
            data: result.data
        })

        revalidatePath('/admin/products')
    } catch (error) {
        return {
            errors: [{ message: "Error al crear el producto" }]
        }
    }
    

    }
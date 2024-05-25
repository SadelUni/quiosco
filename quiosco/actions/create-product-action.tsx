"use server"

import { prisma } from "@/src/lib/prisma";
import { CreateProductSchema } from "@/src/schema";


export async function createProductAction(data: unknown) {
    const result = CreateProductSchema.safeParse(data);

    if (!result.success) {
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.product.create({
            data: result.data
        })
    } catch (error) {
        return {
            errors: [{ message: "Error al crear el producto" }]
        }
    }
    
}

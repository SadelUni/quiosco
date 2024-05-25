import { z } from "zod"

export const OrderSchema = z.object({
    name: z.string().min(1, "Tu nombre no puede estar vacío"),
    total: z.number().min(1, "Error en el total"),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number(),


    })),


})

export const OrderIdSchema = z.object({
    orderId: z.string().transform((value =>
        parseInt(value)
    )).refine(value => value > 0, {
        message: "El id de la orden debe ser mayor a 0"
    })

})

export const SearchProductSchema = z.object({
    search: z.string().min(1, "La búsqueda no puede estar vacía")
    .trim()
    
})

export const CreateProductSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío"),
    price: z.string().transform((value =>
        parseInt(value)
    )).refine(value => value > 0, {
        message: "El precio debe ser mayor a 0"
    }),
    categoryId:z.string().transform((value =>
        parseInt(value)
    )).refine(value => value > 0, {
        message: "La categoría es obligaroia"
    }),
    image: z.string().min(1, "La imagen es obligatoria")
})
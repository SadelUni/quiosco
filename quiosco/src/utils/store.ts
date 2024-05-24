import { create } from "zustand"
import { OrderItem } from "../types"
import { Product } from "@prisma/client";

interface Store {
    order: OrderItem[];
    addToOrder: (product: Product) => void;
    increaseQuantity: (id: Product["id"]) => void;
    decreaseQuantity: (id: Product["id"]) => void;
    removeItem: (id: Product["id"]) => void;
    orderClear: () => void;

}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToOrder: (product) => {

        const { categoryId, image, ...data } = product
        let order: OrderItem[] = []


        if (get().order.find(item => item.id === product.id)) {

            order = get().order.map(item => {

                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        subtotal: (item.quantity + 1) * item.price
                    }
                } else {
                    return item
                }
            })


        } else {

            order = [...get().order, {
                ...data,
                quantity: 1,
                subtotal: 1 * data.price
            }]
        }

        set({ order })
    },
    increaseQuantity: (id) => {

        const order = get().order.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1,
                    subtotal: (item.quantity + 1) * item.price
                }
            } else {
                return item
            }
        })

        set({ order })


    },

    decreaseQuantity: (id) => {

        const order = get().order.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: (item.quantity - 1) * item.price
        } : item)

        set({ order })

    },

    removeItem: (id) => {

        const order = get().order.filter(item => item.id !== id)

        set({ order })

    },

    orderClear: () => {
        set({ order: [] })
    }

})) 

import { OrderWithProducts } from '@/src/types';
import React from 'react'

type LatestOrdersItemProps = {
    order: OrderWithProducts;
};
export default function LatestOrdersItem1({order}: LatestOrdersItemProps) {
  return (
    <div
        className="p-4 bg-white rounded-lg shadow-md space-y-5"       
    >
        <p
        className='text-lg font-bold text-slate-600'
        >
            Cliente: {order.name}
        </p>

        <ul
        className='dive-y divide-gray-200 border-t border-gray-200 text-sm font-medium ttext-gray-500'
        role='list'
        >
            {order.orderProducts.map((orderProduct) => (
                <li
                key={orderProduct.id}
                className='flex justify-between items-center py-2'
                >
                    <span>{orderProduct.product.name}</span>
                    <span>({orderProduct.quantity})</span>
                </li>
            ))}
        </ul>

    </div>
  )
}

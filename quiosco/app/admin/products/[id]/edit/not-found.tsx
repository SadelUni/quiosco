import Heading from '@/components/ui/Heading'
import Link from 'next/link'
import React from 'react'


export default function notFound() {
  return (
    <div>
        <Heading>Producto no encontrado</Heading>
        <Link href="/admin/products"
        className="bg-amber-400 text-black px-10 py-3 text-xl text-center rounded-lg font-bold cursor-pointer lg:w-auto"
        >Ir a Productos </Link>

      
    </div>
  )
}

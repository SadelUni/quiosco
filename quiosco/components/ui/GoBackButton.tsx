import Link from 'next/link'
import React from 'react'

export default function GoBackButton() {
  return (

        <Link
          href="/admin/products"
          className="
          bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer
          hover:bg-amber-500 transition-colors duration-300 ease-in-out rounded-lg
          "
        >
          Volver a productos
        </Link>

  )
}


"use client"
import React from 'react'
import ProductForm from './ProductForm'
import {CreateProductSchema} from '@/src/schema/index'
import { toast } from 'react-toastify'
import {createProductAction } from "@/actions/create-product-action"
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation'
import { updateProductAction } from '@/actions/update-product-action'



export default function EditProducts({children}: {children?: React.ReactNode}) {
    const params = useParams()

  const router = useRouter()

  const id = +params.id



  const  handleSubmit = async (formdata: FormData) => {
    const data = {
      name: formdata.get('name'),
      price: formdata.get('price'),
      categoryId: formdata.get('categoryId'),
      image: formdata.get('imageUrl')
    }


    const result = CreateProductSchema.safeParse(data)

    if (!result.success) {
      result.error.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }

    const response = await updateProductAction(data, id)

    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }
    
    

    toast.success("Producto actualizado con éxito")
    router.push('/admin/products')





  }

  return (
    <div
    className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 max-w-3xl mx-auto '

    >
        
      <form
      className='space-y-5'
      action={handleSubmit}
      >
        {children}

        <input
        type='submit'
        className='border rounded-md p-2
        bg-blue-500 text-white hover:bg-blue-600
        cursor-pointer w-full mt-5'
        value='Guardar Cambios'
      
        />

      </form>
    </div>
  )
}

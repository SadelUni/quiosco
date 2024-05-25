"use client"
import { SearchProductSchema } from "@/src/schema";
import React from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProductsSearch() {
    const router = useRouter();
  const handleProductSearch = (formData: FormData) => {
    const data = {
      search: formData.get("search"),
    };

    const result = SearchProductSchema.safeParse(data);
    console.log(result);

    if(!result.success) {
        result.error.errors.forEach((error) => {
            toast.error(error.message);
        });
      return;
    }

    redirect(`/admin/products/search?search=${data.search}`);


  };

  return (
    <form className="flex items-center" action={handleProductSearch}>
      <input
        type="text"
        placeholder="Buscar productos"
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
        name="search"
      />
      <input
        type="submit"
        value="Buscar"
        className="bg-gray-900 text-white px-4 py-2 rounded-lg ml-2 cursor-pointer"
      />
    </form>
  );
}

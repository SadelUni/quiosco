import AddProducts from "@/components/products/AddProducts";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import React from "react";

export default function CreateProduct() {
  return (
    <>
      <Heading>Crear Producto</Heading>
      <AddProducts>
        <ProductForm />
      </AddProducts>
    </>
  );
}

"use client";
import Image from "next/image";
import { Category } from "@prisma/client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
type CategoriIconProps = {
  category: Category;
};

export default function CategorieIcon({ category }: CategoriIconProps) {
  const params = useParams<{ category: string }>();
  return (
    <div
      className={`
          ${params.category === category.slug ? "bg-amber-500" : "bg-white"}
      flex items-center gap-4 w-full border-t border-gray-200 p-3 px-6 hover:bg-gray-100 cursor-pointer`}
    >
      <div className="w-16 h-16 relative">
        <Image
          width={64}
          height={64}
          src={`/icon_${category.slug}.svg`}
          alt={category.name}
        />
      </div>
      <Link className="text-xl font-bold" href={`/order/${category.slug}`}>
        {category.name}
      </Link>
    </div>
  );
}

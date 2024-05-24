"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminRoutesProps = {
  navItem: {
    url: string;
    text: string;
    blank: boolean;
  };
};

export default function AdminRoutes({ navItem }: AdminRoutesProps) {
    const pathname = usePathname();
    const isActive = pathname.startsWith(navItem.url);
    return (
      
    <Link
      className={`${isActive ? "bg-amber-400" : ""} font-bold text-lg border-t border-gray-200 p-3 last-of-type:border-b`}
          href={navItem.url}
            target={navItem.blank ? "_blank" : ""}
          
    >
      {navItem.text}
    </Link>
  );
}

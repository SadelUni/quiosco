import { PrismaClient } from "@prisma/client";
import { prisma } from "@/src/lib/prisma";
import CategorieIcon from "../ui/CategorieIcon";
import Logo from "../ui/Logo";

async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

export default async function OrderSidebar() {
  const categories = await getCategories();

  await getCategories();
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <Logo />
      <nav className="mt-10">
        {categories.map((category) => (
          <CategorieIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}

import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {

        await prisma.category.createMany({
            data: categories
        });

        await prisma.product.createMany({
            data: products
        });
    } catch (error) {
        throw error;

    }
}

main()
    .then(() => {
        console.log("Seed completed successfully");
    })
    .catch(async (error) => {
        throw error;
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

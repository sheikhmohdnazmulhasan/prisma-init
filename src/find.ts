import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function find() {
    const result = await prisma.post.findFirst({
        where: {
            id: 1
        }
    });

    return result;
}
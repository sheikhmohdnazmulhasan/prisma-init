import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function find() {
    const result = await prisma.post.findMany({
        select: {
        }

    });

    return result;
}

export async function findUnique() {
    const result = await prisma.post.findUniqueOrThrow({
        where: {
            id: 10
        }
    });

    return result
}


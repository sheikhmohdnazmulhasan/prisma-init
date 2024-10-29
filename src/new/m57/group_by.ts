import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function groupBy() {
    const result = await prisma.post.groupBy({
        by: ['published'],
        _count: {
            id: true
        }
    });

    return result
}
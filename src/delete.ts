import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function deleteOne() {
    const result = await prisma.post.delete({
        where: {
            id: 1
        }
    });
    return result
}
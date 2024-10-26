import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function updateOne() {
    const result = await prisma.post.update({
        where: {
            id: 1
        },
        data: {
            title: 'title updated',
            content: 'content updated'
        }
    });

    return result
}
import { PrismaClient } from '@prisma/client';
import { title } from 'process';
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
};

export async function updatedMany() {
    const result = await prisma.post.updateMany({
        where: {
            title: 'hello title'
        },
        data: {
            title: 'title updated from hello title'
        }
    });
    return result
}
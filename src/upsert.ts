import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function upsert() {
    const result = await prisma.post.upsert({
        where: {
            id: 10
        },
        update: {
            title: 'xxxxx'
        },
        create: {
            title: 'hssss',
            content: 'ssss',
            author: 'sss'
        }
    });

    return result
}
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createOne() {
    const result = await prisma.post.create({
        data: {
            title: 'hello title',
            content: 'this is content',
            author: 'nazmul'
        }
    });

    return result
};

export async function createMeany() {
    const result = await prisma.post.createMany({
        data: [
            {
                title: 'hello title xx',
                content: 'this is content',
                author: 'nazmul'
            },
            {
                title: 'hello title xxxx',
                content: 'this is content',
                author: 'nazmul'
            },
        ]
    });

    return result
}
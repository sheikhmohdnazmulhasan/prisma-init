import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.post.create({
        data: {
            title: 'this is title',
            content: 'this is content',
            author: 'nafisa'
        }
    });

    console.log(result);
}

main()
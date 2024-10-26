import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'this is title',
    //         content: 'this is content',
    //         author: 'nafisa'
    //     }
    // });

    const result = await prisma.post.findMany()

    console.log(result);
}

main()
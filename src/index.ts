import { PrismaClient } from '@prisma/client';
import { find } from './find';

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

    console.log(await find());
}

main()


// console.log(await find());
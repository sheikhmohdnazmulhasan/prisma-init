import { PrismaClient } from '@prisma/client';
import { find, findUnique } from './find';

const prisma = new PrismaClient();

async function main() {
    // const result = await prisma.post.create({
    //     data: {
    //         title: 'this is title',
    //         content: 'this is content',
    //         author: 'nafisa'
    //     }
    // });

    // const result = await prisma.post.findMany()

    // console.log(await find());
    console.log(await findUnique());
}

main()


// console.log(await find());
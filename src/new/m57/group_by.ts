import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function groupBy() {
    // const result = await prisma.post.groupBy({
    //     by: ['published'],
    //     _count: {
    //         id: true
    //     },
    // });

    const result = await prisma.user.groupBy({
        by: ['age'],
        having: {
            age: {
                _avg: {
                    lte: 20
                }
            }
        }
    })

    return result
}
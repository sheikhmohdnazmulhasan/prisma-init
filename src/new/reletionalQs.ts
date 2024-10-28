import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function relationalQs() {
    //! fluent api
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).post();

    // ! populate
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         profile: true
    //     }
    // })

    // ! relational filter

    const result = await prisma.user.findMany({
        include: {
            post: true
        }
    })

    console.dir(result, { depth: Infinity });
    return result

}
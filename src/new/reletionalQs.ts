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
    const result = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            profile: true
        }
    })


    return result

}
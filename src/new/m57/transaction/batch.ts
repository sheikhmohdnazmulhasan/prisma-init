import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function batch() {
    const creteNewUser = prisma.user.create({
        data: {
            email: 'xxxx@zz.com',
            role: "admin",
            username: 'ssss'
        }
    });

    const updatePrevUser = prisma.user.update({
        where: {
            id: 3
        },
        data: {
            username: 'updated'
        }
    });

    const [create, update] = await prisma.$transaction([creteNewUser, updatePrevUser]);

    return { create, update }
}
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
};


// creating new user and updating another existing user
export async function batch2() {

    const [create, update] = await prisma.$transaction([

        // creating brand new user 
        prisma.user.create({
            data: {
                email: 'hijibiji@mail.com',
                role: 'admin',
                username: 'hijibiji'
            }
        }),

        // updating existing user
        prisma.user.update({
            where: {
                id: 7,
            },
            data: {
                username: 'hijibiji updated'
            }
        })
    ]);

    return { create, update }
};

// creating brand new user and update that user after successful creation

export async function batch3() {
    const result = await prisma.$transaction(async (prisma) => {

        // creating new user
        const create = await prisma.user.create({
            data: {
                email: 'rony@gmail.com',
                role: 'admin',
                username: 'rony'
            }
        });
        // update the same user
        const update = await prisma.user.update({
            where: {
                id: create.id
            },
            data: {
                age: 2000
            }
        });

        return { create, update }
    });

    return result
}
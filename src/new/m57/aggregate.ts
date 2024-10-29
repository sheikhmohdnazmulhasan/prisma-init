import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function avgAge() {
    const result = await prisma.user.aggregate({
        _avg: {
            age: true
        }
    });

    return result
};

export async function sumOfAge() {
    const result = await prisma.user.aggregate({
        _sum: {
            age: true
        }
    });

    return result
}
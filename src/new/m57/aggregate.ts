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
};

export async function count() {
    const result = await prisma.user.aggregate({
        _count: {
            age: true,
        },
    });

    const result2 = await prisma.user.count()

    return result2
};

export async function getOldestUser() {
    const result = await prisma.user.aggregate({
        _max: {
            age: true,
        }
    });
    return result
};

export async function getYoungestUser() {
    const result = await prisma.user.aggregate({
        _min: {
            age: true,
        }
    });

    return result
}
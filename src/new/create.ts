import { PrismaClient, user_role } from "@prisma/client";

const prisma = new PrismaClient();

export async function creteUser() {
    const result = await prisma.user.createMany({
        data: [
            { username: "john_doe", email: "john@example.com", role: user_role.admin },
            { username: "jane_smith", email: "jane@example.com", role: user_role.user },
            { username: "samuel_lee", email: "samuel@example.com", role: user_role.user },
            { username: "alice_jones", email: "alice@example.com", role: user_role.admin },
            { username: "michael_brown", email: "michael@example.com", role: user_role.user }
        ]
    });
    return result
};

export async function creteUserProfile() {
    const result = await prisma.profile.create({
        data: {
            userId: 1,
            bio: 'this is bio'
        }
    });

    return result
}
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
};

export async function creteCategories() {
    const result = await prisma.category.createMany({
        data: [
            { name: "Web Development" },
            { name: "Artificial Intelligence" },
            { name: "Data Science" },
            { name: "Cybersecurity" },
            { name: "Cloud Computing" },
            { name: "Blockchain" },
            { name: "Mobile Development" },
            { name: "DevOps" },
            { name: "Programming Languages" },
            { name: "Internet of Things (IoT)" },
            { name: "Software Engineering" },
            { name: "Tech News" },
            { name: "Gadgets" },
            { name: "AR/VR" },
            { name: "Gaming" }
        ]
    });

    return result
};

export async function cretePost() {
    const result = await prisma.post.create({
        data: {
            title: 'this is title',
            content: 'this is post content',
            authorId: 1,
            postCategory: {
                create: {
                    // categoryId: 1
                    category: {
                        connect: {
                            id: 1
                        }
                    }
                }
            }
        },
        include: {
            postCategory: true
        }
    });

    return result
}
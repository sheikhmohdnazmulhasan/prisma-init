import { PrismaClient } from '@prisma/client';
import { find, findUnique } from './find';
import { createMeany, createOne } from './create';
import { updateOne } from './update';

const prisma = new PrismaClient();

(async function () {

    // console.log(await find());
    // console.log(await findUnique());
    // console.log(await createOne());
    // console.log(await createMeany());
    console.log(await updateOne());
})()

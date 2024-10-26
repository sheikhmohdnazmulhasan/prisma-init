// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
import { find, findUnique } from './find';
import { createMeany, createOne } from './create';
import { updatedMany, updateOne } from './update';


(async function () {

    // console.log(await find());
    // console.log(await findUnique());
    // console.log(await createOne());
    // console.log(await createMeany());
    // console.log(await updateOne());
    console.log(await updatedMany());
})()

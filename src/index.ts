// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
import { find, findUnique } from './find';
import { createMeany, createOne } from './create';
import { updatedMany, updateOne } from './update';
import { deleteMany, deleteOne } from './delete';
import { upsert } from './upsert';


(async function () {

    // console.log(await find());
    // console.log(await findUnique());
    // console.log(await createOne());
    // console.log(await createMeany());
    // console.log(await updateOne());
    // console.log(await updatedMany());
    // console.log(await deleteOne());
    // console.log(await deleteMany());

    console.log(await upsert());
})()

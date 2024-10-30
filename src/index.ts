// import { creteUser } from "./new/create";

import { creteCategories, cretePost, creteUserProfile } from "./new/create";
import { avgAge, count, getOldestUser, getYoungestUser, sumOfAge } from "./new/m57/aggregate";
import { groupBy } from "./new/m57/group_by";
import { batch, batch2, batch3 } from "./new/m57/transaction/batch";
import { relationalQs } from "./new/reletionalQs";

(async function () {
    // console.log(await creteUser());
    // console.log(await creteUserProfile());
    // console.log(await creteCategories());
    // console.log(await cretePost());
    // console.log(await relationalQs());
    // console.log(await avgAge());
    // console.log(await sumOfAge());
    // console.log(await count());
    // console.log(await getOldestUser());
    // console.log(await getYoungestUser());
    // console.log(await groupBy());

    // console.log(await batch());
    // console.log(await batch2());
    console.log(await batch3());
})()
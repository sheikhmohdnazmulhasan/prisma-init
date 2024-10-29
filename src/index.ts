// import { creteUser } from "./new/create";

import { creteCategories, cretePost, creteUserProfile } from "./new/create";
import { avgAge, count, getOldestUser, sumOfAge } from "./new/m57/aggregate";
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
    console.log(await getOldestUser());
})()
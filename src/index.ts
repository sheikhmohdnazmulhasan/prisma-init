// import { creteUser } from "./new/create";

import { creteCategories, cretePost, creteUserProfile } from "./new/create";
import { relationalQs } from "./new/reletionalQs";

(async function () {
    // console.log(await creteUser());
    // console.log(await creteUserProfile());
    // console.log(await creteCategories());
    // console.log(await cretePost());
    console.log(await relationalQs());
})()

// //! default import
// import a from "./index.js"
// a(4,5)

//! Named import
// import {multiply,add} from "./index.js";
// multiply(2,4);
// add(60,12);

//! Named function in another way
// import {multi,addition} from "./index.js"
// multi(4,5);
// addition(2,9)

//! import at a time
import * as data from "./index.js"
console.log(data);
data.add(4,5);
data.multiply(6,5);
data.default(3,4)

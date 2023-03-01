// look like globals but are module-scoped
// cannot be referrenced using globals
console.log(__dirname);
console.log(__filename);
console.log(global.__dirname); // returns undefined
console.log(global.__filename); // returns undefined

// importing package: path using require()
// should be imported on the top
const path = require("path");
console.log(`\nThe file name is ${path.basename(__filename)}`);

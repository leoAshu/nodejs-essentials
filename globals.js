// console is a global object
// can be referenced either ways
console.log("Hello World!");
global.console.log("Hello Again!");

// use of template strings
// back ticks (`) are used
let hello = "Hello World from Node.js";
let justNode = hello.slice(17);
console.log(`\nWho let the ${justNode} out!\n`);

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

// list all the keys for the global objects
console.log("\nAll Globals:");
for(let key in global) {
    console.log(key);
}
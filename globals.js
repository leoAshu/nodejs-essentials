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

// process object
console.log("\nProcess Arguments:")
console.log(process.argv);

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);

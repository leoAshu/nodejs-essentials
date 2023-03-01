// console is a global object
// can be referenced either ways
console.log("Hello World!");
global.console.log("Hello Again!");

// use of template strings
// back ticks (`) are used
let hello = "Hello World from Node.js";
let justNode = hello.slice(17);
console.log(`\nWho let the ${justNode} out!\n`);

const myModule = require("./my-module");

console.log(myModule.anything);
console.log(myModule.who);
console.log(myModule.inc());
console.log(myModule.getCount());
console.log(myModule.dec());
console.log(myModule.getCount());

// alternate way of importing modules
const {inc, dec, getCount} = require("./my-module");

inc();
inc();
inc();

console.log(`the count is ${getCount()}`);
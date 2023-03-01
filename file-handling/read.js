const fs = require("fs");

// Synchronous
let text = fs.readFileSync("./sample.txt", "UTF-8");
console.log(`Synchronous read: ${text}`);

// Asynchronous
fs.readFile("./sample.txt", "UTF-8", (err, text) => {
    if(err) {
        throw err;
    }
    console.log(`Asynchronous read: ${text}`);
});

console.log("reading file...");

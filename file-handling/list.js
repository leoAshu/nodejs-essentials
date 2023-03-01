const fs = require("fs");

// synchronous read
let files = fs.readdirSync("./");
console.log(`Synchronous read: ${files}`);

// asynchronous read
fs.readdir("./", function (err, files) {
    if(err) {
        throw err;
    }
    console.log(`Asynchronous read: ${files}`);
});

console.log("reading files...");

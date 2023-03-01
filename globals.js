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
console.log("\nprocess.argv:")
console.log(process.argv);

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting);
console.log(user);


console.log("\nprocess.stdout:");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

const answers = [];

function ask(i=0) {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.on("data", function (data) {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", function () {
    process.stdout.write("\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]}. You can finish writing ${answers[2]} later.\n`
    );
});

ask();
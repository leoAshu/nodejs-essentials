console.log("process.stdout:");

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

const fs = require("fs");

let answerStream;

let questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?"
];

let answers = [];

function ask(i=0) {
    process.stdout.write(`\n\n${questions[i]}`);
    process.stdout.write(` > `);
}

process.stdin.once("data", (data) => {
    let name = data.toString().trim();
    let fileName = `./${name}.md`;
    
    if(fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
    }

    answerStream = fs.createWriteStream(fileName);
    
    answerStream.write(
        `Question Answers for ${name}\n======\n`
    );
})

process.stdin.on("data", function (data) {
    let answer = data.toString().trim();
    
    answerStream.write(
        `Question: ${questions[answers.length]}\n`
    );

    answerStream.write(
        `Answer: ${answer}\n\n`,
        () => {
            if(answers.length < questions.length) {
                ask(answers.length);
            } else {
                process.exit();
            }
        }
    );

    answers.push(answer);
});

process.on("exit", function () {
    answerStream.close();
    process.stdout.write("\n");
    process.stdout.write(
        `Go ${answers[1]} ${answers[0]}. You can finish writing ${answers[2]} later.\n\n`
    );
});

ask();

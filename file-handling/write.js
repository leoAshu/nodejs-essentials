const fs = require("fs");

let text = "This is a New File created using fs module."

fs.writeFile("new-file.txt", text.trim(), (err) => {
    if(err) {
        throw err;
    }
    
    console.log("File created");
    
    fs.appendFileSync(
        "new-file.txt",
        "\nThis line is appended to the file."
    );
    console.log("File appended");

});



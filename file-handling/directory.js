const fs = require("fs");

const directoryName = "new-folder";

if(fs.existsSync(directoryName)) {
    console.log("directory already exists");
} else {
    fs.mkdir(directoryName, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Directory created");
        }
    });
}

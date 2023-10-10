const fs = require("fs");
const path = require("path");

//create folder
fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
  if (err) throw err;
  console.log("folder created");
});

//create and write file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("file written into...");
    //create and write file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "Hello World",
      (err) => {
        if (err) throw err;
        console.log("file written into...");
      }
    );
  }
);

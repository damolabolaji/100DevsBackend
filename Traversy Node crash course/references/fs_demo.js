const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, function (err) {
//   if (err) throw err;
//   console.log("folder created");
// });

//create and write file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("file written into...");
//     //create and write file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "Hello World",
//       (err) => {
//         if (err) throw err;
//         console.log("file written into...");
//       }
//     );
//   }
// );

//read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "utf8",
//   function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//renamefile

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hellotoyou.txt"),
  function (err) {
    if (err) throw err;
    console.log("rename file...");
  }
);

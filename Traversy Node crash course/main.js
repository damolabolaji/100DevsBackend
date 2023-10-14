// const mainLogger = new Logger();
// mainLogger.on("message", (data) => {
//   fs.appendFile(
//     path.join(__dirname, "./references/mytest", "uuids.txt"),
//     `${data.id}:${data.msg}\n`,
//     (err) => {
//       if (err) throw err;
//       console.log("file written into...");
//     }
//   );
// });

// mainLogger.log("suck it");
// mainLogger.log("suck");

const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("<h1>This is homepage changed</h1>");
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on ${PORT}`));

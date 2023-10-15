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
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(content);
      }
    );
  }
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on ${PORT}`));

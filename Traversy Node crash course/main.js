const Logger = require("./logger");
const fs = require("fs");
const path = require("path");

const mainLogger = new Logger();
mainLogger.on("message", (data) => {
  fs.appendFile(
    path.join(__dirname, "./references/mytest", "uuids.txt"),
    `${data.id}:${data.msg}\n`,
    (err) => {
      if (err) throw err;
      console.log("file written into...");
    }
  );
});

mainLogger.log("suck it");
mainLogger.log("suck");

const Logger = require("./logger");

const mainLogger = new Logger();
mainLogger.on("message", (data) => console.log("called listener", data));

mainLogger.log("suck it");

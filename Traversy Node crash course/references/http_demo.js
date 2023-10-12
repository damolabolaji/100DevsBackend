const http = require("http");

//creatye server
http
  .createServer((req, res) => {
    res.write("hello World, it is my birthday next week");
    res.end();
  })
  .listen(5000, () => console.log("server running..."));

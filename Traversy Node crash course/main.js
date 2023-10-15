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

// const server = http.createServer((req, res) => {
//   //   console.log(req.url);
//   if (req.url === "/") {
//     fs.readFile(
//       path.join(__dirname, "public", "index.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-type": "text/html" });
//         res.end(content);
//       }
//     );
//   }
// });

//IF IT WAS AN API
const users = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(users)); //it outputs the json contents on the webpage
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`server running on ${PORT}`));

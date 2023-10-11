const url = require("url");

const myUrl = new URL(
  "https://100devsfollowalong.netlify.app/classes/class-33.html?id=2345&status=active"
);

// console.log(myUrl.href);
// console.log(myUrl.toString());
console.log(myUrl.host); //rootdomain
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((key,value)=> console.log(`${key} : ${value}`));

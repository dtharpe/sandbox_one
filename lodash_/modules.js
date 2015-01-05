var fs = require("fs");

var profile = fs.readFileSync("./file.txt", "utf8");
console.log(profile);
var fs = require('fs');

var text = fs.readFileSync(process.argv[2], "utf-8");

var linesArray = text.split("\n");

var lines = linesArray.length;

console.log(lines);

var fs = require('fs');

for (var x=0; x <=500; x++) {
	var text = fs.readFileSync(process.argv[2], "utf-8");

	var linesArray = text.split("\n");

	var lines = linesArray.length;
}

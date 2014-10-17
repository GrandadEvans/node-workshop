var fs = require('fs');

var text = fs.readFile(process.argv[2], function(err, data) {
	var linesArray = data.toString().split("\n");

	var lines = linesArray.length;

	console.log(lines);

});


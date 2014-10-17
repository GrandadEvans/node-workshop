var fs = require('fs');

for (var x=0; x <= 500; x++) {
	var text = fs.readFile(process.argv[2], 'utf-8', function (err, data) {
		var linesArray = data.split("\n");

		var lines = linesArray.length;
	});
}

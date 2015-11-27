var fs = require('fs');
var stream = require('stream');
var Stream = stream.Stream;

var trumpet = require('trumpet');
var tr = trumpet();
tr.pipe(process.stdout);

var ws = tr.select('#main-links').createWriteStream();
ws.end(fs.readFileSync('links.html'));

fs.createReadStream(__dirname + '/templates/chapters.html').pipe(tr);


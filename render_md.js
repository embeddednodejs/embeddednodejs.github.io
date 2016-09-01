var marked = require('marked');
var fs = require('fs');

var hyperstream = require('hyperstream');
var fs = require('fs');

// template as readable stream
var rs = fs.createReadStream(__dirname + '/templates/index.html');

var ch1Md = fs.readFileSync('content/ch_1.md');
var hs = hyperstream({
      '#links': marked(ch1Md.toString()) 
});

var ch1 = fs.createWriteStream(__dirname + '/static/worlds/index.html');
rs.pipe(hs).pipe(ch1);

var ch8Md = fs.readFileSync('content/ch_8_nodejs_libraries_for_hardware.md');
var hs = hyperstream({
      '#links': marked(ch8Md.toString()) 
});

var ch8 = fs.createWriteStream(__dirname + '/static/libs/index.html');
rs.pipe(hs).pipe(ch8);


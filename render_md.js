var marked = require('marked');
var fs = require('fs');

var hyperstream = require('hyperstream');
var fs = require('fs');


// markdown for ToC
var tocMd = fs.readFileSync('content/toc.md');

function renderPage(src, dest, track) {
   // template as readable stream
   var rs = fs.createReadStream(__dirname + '/templates/index.html');

   var md = fs.readFileSync(src);
   var hs = hyperstream({
         '#toc': marked(tocMd.toString()),
         '#links': marked(md.toString()) ,
         '#track': 'mixpanel.track("' + track + '")'
   });
   
   var page = fs.createWriteStream(dest);
   rs.pipe(hs).pipe(page);
}


// ch1
renderPage('content/ch_1.md',
           __dirname + '/static/worlds/index.html',
           'worlds');

// ch2
renderPage('content/ch_2.md',
           __dirname + '/static/blinkarduino/index.html',
           'arduino');
 
// ch3
renderPage('content/ch_3.md',
           __dirname + '/static/espruino/index.html',
           'espruino');
 
// ch4
renderPage('content/ch_4.md',
           __dirname + '/static/tessel2/index.html',
           'tessel2');
 
// ch5
renderPage('content/ch_5.md',
           __dirname + '/static/photon/index.html',
           'photon');
 
// ch6
renderPage('content/ch_6.md',
           __dirname + '/static/sbc/index.html',
           'sbc');

// ch7
renderPage('content/ch_7.md',
           __dirname + '/static/components/index.html',
           'components');


// ch8
renderPage('content/ch_8_nodejs_libraries_for_hardware.md',
           __dirname + '/static/libs/index.html',
           'libs');

// ch9
renderPage('content/ch_9.md',
           __dirname + '/static/http/index.html',
           'http');
           
// ch10
renderPage('content/ch_10.md',
           __dirname + '/static/webinterfaces/index.html',
           'webintefaces');
          
// ch12
renderPage('content/ch_12.md',
           __dirname + '/static/nodebots/index.html',
           'nodebots');
           
// ch13
renderPage('content/ch_13.md',
           __dirname + '/static/wireless/index.html',
           'wireless');
          
// ch14
renderPage('content/ch_14.md',
           __dirname + '/static/toward/index.html',
           'toward');
          
// ch15
renderPage('content/ch_15.md',
           __dirname + '/static/products/index.html',
           'products');

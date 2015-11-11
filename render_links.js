var fs = require('fs');
var findit = require('findit');
var _ = require('underscore');

var resourceTemplate = _.template(' \
<h1><%= name %></h1> \n\
  <% resources.forEach(function(resource) { %> \
  <section class="addinfo">  \n\
    <h3><%= resource.name %>  </h3>\n\
    <ul> \n\
    <% resource.links.forEach(function(link) { %> \
      <% if (!link.link) { %>\
        <li><%= link.name %></li> \n \
        <% } else { %>  \
        <li><a href="<%= link.link %>"><%= link.name %></a></li> \n \
      <% } %> \
    <% }); %>  \
    </ul> \n\
  </section>   \n\
  <% }); %>  \
');

var renderLinks = function(file) {
  var raw = fs.readFileSync(file);
  var chapter = JSON.parse(raw.toString());
  console.log(resourceTemplate({
    name: chapter.name,
    resources: chapter.resources
  }));
}

console.log('<article class="overview chapter">');
renderLinks('./links/ch_1_connecting_worlds.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_2_arduino_and_javascript.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_3_nodejs_on_embedded_linux.json');
console.log('</article>');

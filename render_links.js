var fs = require('fs');
var findit = require('findit');
var _ = require('underscore');


function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

var resourceTemplate = _.template(' \
<h1 id="<%= slug %>"><%= name %></h1> \n\
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
    slug: slugify(chapter.name),
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

console.log('<article class="overview chapter">');
renderLinks('./links/ch_4_components_for_prototyping.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_5_nodejs_libraries_for_hardware.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_6_building_servers.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_7_web_interfaces_for_things.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_8_motion_with_javascript.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_9_entering_the_cloud.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_10_advanced_connectivity.json');
console.log('</article>');

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
  <p><%= description %></p> \n\
  <% resources.forEach(function(resource) { %> \
  <section class="addinfo">  \n\
    <h3><%= resource.name %>  </h3>\n\
    <p><%= resource.description %></p> \n\
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
  try {
  var raw = fs.readFileSync(file);
  var chapter = JSON.parse(raw.toString());
  console.log(resourceTemplate({
    slug: slugify(chapter.name),
    name: chapter.name,
    description: chapter.description,
    resources: chapter.resources
  }));
  } catch (ex) {
    console.log(file);
    console.log(ex);
    process.exit(0);
  }
}

console.log('<article class="overview chapter">');
renderLinks('./links/ch_1_connecting_worlds.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_2_arduino_and_javascript.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_3_espruino.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_4_tessel2.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_5_internet_enabled_microcontrollers.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_6_single_board_computers.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_7_components_for_prototyping.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_8_nodejs_libraries_for_hardware.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_9_network_protocols.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_10_web_interfaces_for_things.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_11_entering_the_cloud.json');
console.log('</article>');

console.log('<article class="overview chapter">');
renderLinks('./links/ch_12_motion_with_javascript.json');
console.log('</article>');


console.log('<article class="overview chapter">');
renderLinks('./links/ch_13_wireless_data_with_bluetooth.json');
console.log('</article>');



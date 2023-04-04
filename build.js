var fs = require("fs");
var path = require("path");
var pako = require("./pako");

var srcPath = path.join(__dirname, 'Font-Awesome/svgs/solid');
var distPath = path.join(__dirname, 'dist');

var mxGraphXml = fs.readFileSync(path.join(__dirname, 'wrapper.xml'), 'utf-8').replace(/>\s+</g, '><');
var svgIcons = fs.readdirSync(srcPath).map(function (p) {
  return { name: p, contents: fs.readFileSync(path.join(srcPath, p), "utf-8") };
});

function mxLibraryEntry(svg, color) {
  // Create a color lookup table to convert web standard color names to hex values
  // Color names work, but show up incorrectly in the Draw.io interface
  colorLookup = {
    black: '#000000',
    white: '#ffffff',
    red: '#FF0000',
    green: '#008000',
    blue: '#0000FF',
    navy: '#000080',
    teal: '#008080',
    olive: '#808000',
    purple: '#800080',
    orange: '#FFA500',
    brown: '#A52A2A',
    gray: '#808080',
  };
  
  var xml = svg.contents;
  if (color)
    // Modify the path to insert a CSS definition for the path element 
    // This will later be picked up in Draw.io with the help of the "editableCssRules=path;" style property hack
    xml = svg.contents.replace('<path d', '<style type="text/css">path {fill:' + colorLookup[color.slice(color.indexOf('=') + 1)] + ';}</style><path d');
  var b64EncodedSvg = Buffer.from(xml).toString("base64");

  // Unlike the btoa method in web browsers, the Buffer.toString method can be fed an int array, and
  // doesn't require a bytesToString conversion
  var xml = Buffer.from(
    pako.deflateRaw(encodeURIComponent(mxGraphXml.replace('%xml%', b64EncodedSvg)))
  ).toString("base64");

  return {
    xml,
    w: 16,
    h: 16,
    aspect: "fixed",
    title: path.basename(svg.name, ".svg")
  };
}

function mxLibrary(entries) {
  return ["<mxlibrary>", JSON.stringify(entries), "</mxlibrary>"].join("");
}

function output(color) {
  fs.writeFileSync(
    // add the file extention to make it easier to open the file
    path.join(distPath, 'FontAwesome' + (color ? ' - ' + color : '')),
    mxLibrary(svgIcons.map((file, index, arr) => {
      process.stdout.write(" ");
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`Processing icons "${path.basename(file.name, '.svg')}" - ${index + 1} / ${arr.length}`)
      return mxLibraryEntry(file, color);
    })),
    "utf-8"
  );
}

if (process.argv[2] === 'all')
  // Now that colors can be assigned directly in Draw.io this part may not be needed
  // Still, someone may want to generate a library with a default color other than black
  [
    'black',
    'white',
    'red',
    'green',
    'blue',
    'navy',
    'teal',
    'olive',
    'purple',
    'orange',
    'brown',
    'gray',
  ].forEach(function (color) {
    output(color);
  });
else
  // Provide a backstop color value since color values not in the lookup table will cause issues
  output('black');
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
  var xml = svg.contents;
  if (color)
    xml = svg.contents.replace('<path d', '<path fill="' + color.slice(color.indexOf('=') + 1) + '" d');
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
  [
    '',
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
  output(color);
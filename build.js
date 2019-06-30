var fs = require("fs");
var path = require("path");
var pako = require("./pako");

var srcPath = path.join(__dirname, 'Font-Awesome/svgs/solid');

var wrapper = fs.readFileSync(path.join(__dirname, 'wrapper.xml'), 'utf-8').replace(/>\s+</g, '><');

function wrap(main) {
  var result = wrapper.replace('%xml%', main);
  return result
}

function mxLibraryEntry(svg) {
  var b64EncodedSvg = Buffer.from(
    fs.readFileSync(path.join(srcPath, svg), "utf-8")
  ).toString("base64");

  // Unlike the btoa method in web browsers, the Buffer.toString method can be fed an int array, and
  // doesn't require a bytesToString conversion
  xml = Buffer.from(
    pako.deflateRaw(encodeURIComponent(wrap(b64EncodedSvg)))
  ).toString("base64");

  return {
    xml,
    w: 16,
    h: 16,
    aspect: "fixed",
    title: path.basename(svg, ".svg")
  };
}

function mxLibraryXML(entries) {
  return ["<mxlibrary>", JSON.stringify(entries), "</mxlibrary>"].join("");
}

var svgFiles = fs.readdirSync(srcPath);
var distPath = path.join(__dirname, 'dist');

if (!fs.statSync(distPath).isDirectory())
  fs.mkdirSync(distPath)

fs.writeFileSync(
  path.join(distPath, 'Font Awesome'),
  mxLibraryXML(svgFiles.map((file, index, arr) => {
    process.stdout.write("Hello, World");
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Processing icons "${path.basename(file, '.svg')}" - ${index + 1} / ${arr.length}`)
    return mxLibraryEntry(file);
  })),
  "utf-8"
);

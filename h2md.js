const fs = require("fs");
const path = require("path");
const minimist = require('minimist');

const tokenizer = require("./lib/tokenizer.js");
const generator = require("./lib/generator.js");

const args = minimist(process.argv.slice(2), {
    boolean: ["help", "line", "file"],
    alias: {
        "h": "help",
        "p": "pattern",
        "o": "output",
        "l": "line",
        "f": "file"
    }
});

if (args.help) {
    console.log(fs.readFileSync(__dirname + "/help.txt").toString().trim());
    return;
}

if (args._.length != 1) {
    console.error("No file.");
    return;
}

var text = fs.readFileSync(args._[0]).toString();

var tokens = tokenizer.parseCode(text);

var g = new generator.Generator({
    addLineNumber: args.line,
    addFileHeader: args.file,
    file: path.basename(args._[0])
});

if (args.pattern === undefined) {
    args.pattern = "cpp"; // default pattern
}

require(`./lib/patterns/${args.pattern}.js`).applyToGenerator(g);

g.generate(tokens);

var md = g.doc.join("\n");

if (args.o) {
    fs.writeFileSync(args.o, md);
} else {
    console.log(md);
}

//console.log(tokens);


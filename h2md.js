const fs = require("fs");
const minimist = require('minimist');

const tokenizer = require("./lib/tokenizer.js");
const generator = require("./lib/generator.js");

const args = minimist(process.argv.slice(2), {
    boolean: ["h"],
    alias: {
    }
});

console.log(args);

if (args._.length != 1) {
    console.log("No file.");
    return;
}

var text = fs.readFileSync(args._[0]).toString();

var tokens = tokenizer.parseCode(text);

var g = new generator.Generator();

// detect new class
g.addCodePattern(/^class/, (t) => {
    //g.level = 1;
    t.header = t.code.substr(6);
});

g.generate(tokens);

var md = g.doc.join("\n");

if (args.o) {
    fs.writeFileSync(args.o, md);
} else {
    console.log(md);
}

console.log(tokens);


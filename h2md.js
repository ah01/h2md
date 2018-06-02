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

var className = "";

// detect new class
g.addCodePattern(/^class/, (t) => {
    className = t.code.substr(6);
    t.header = className;
});

g.addCodePattern(/\(/, (t) => {
    if (t.code.contains(className)) {
        t.header = "🎇 " + t.code;
        return;
    }
    console.log("Method");
    t.header = "Ⓜ️ " + t.code;
});

g.addCodePattern(/^typedef/, (t) => {
    console.log("Typedef");
});

g.addCodePattern(/^[^\(]*$/, (t) => {
    console.log("Property");
    t.header = "🔧 " + t.code;
});

g.generate(tokens);

var md = g.doc.join("\n");

if (args.o) {
    fs.writeFileSync(args.o, md);
} else {
    console.log(md);
}

//console.log(tokens);


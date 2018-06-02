const s = require("string").extendPrototype();

function parseCode(text)
{
    var lines = text.split('\n');

    var line;
    var blocks = [];
    
    while(line = lines.shift())
    {
        var l = line.trim();
        
        if (!l.startsWith("/**")) {
            continue;
        }
    
        var text = [];
    
        while(line = lines.shift()) {
            l = line.trim();
            if (l.startsWith("*/") || l.startsWith("**/")) break;
            text.push(trimText(l));
        }
    
        var code = trimCode(lines.shift());
    
        blocks.push({text: text, code: code});
    
    }

    return blocks;
}

    
function trimCode(code) {
    if (!code) return code;

    return code.trim().stripRight(";");
}

function trimText(text) {
    if (!text) return text;

    text = text.trim();

    if (text.startsWith("* ")) {
        text = text.substr(2);
    }

    if (text == "*") {
        text = "";
    }

    return text;
}

exports.parseCode = parseCode;

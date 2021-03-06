const s = require("string").extendPrototype();

class Generator
{
    constructor(options)
    {
        this.options = options;

        this.level = 0;
        this.codeBlock = false;
        this.doc = [];
        this.codePatterns = [];
    }

    generate(tokens) 
    {
        if (this.options.addFileHeader) 
        {
            this.addLine(`> This document was generated from file \`${this.options.file}\` at ${new Date().toLocaleString()}`);
        }

        for (const t of tokens) 
        {
            this.addToken(t);
        }
    }

    addCodePattern(pattern, fn) {
        this.codePatterns.push({
            pattern: pattern,
            callback: fn
        });
    }

    applyCodePattern(token) {
        for (const p of this.codePatterns) {
            if (p.pattern.test(token.code)) {
                p.callback.call(this, token);
                return;
            }
        }
    }

    addToken(token) 
    {
        let anchors = getHtmlAnchor("line-" + token.textLine);

        if (token.anchor) 
        {
            anchors += getHtmlAnchor(token.anchor);
        }

        this.addLine(anchors);

        if (token.code != "") 
        {
            this.applyCodePattern(token);
            this.addSubHeader(token.header || token.code);
            this.addCodeLine(token);
            this.addLines(token.text, true);
        }
        else
        {
            this.addLines(token.text);

        }

        this.addLine("");
    }

    addHeader(text) {
        this.addLine("#".times(this.level) + " " + text);
    }

    addSubHeader(text) {
        this.addLine("#".times(this.level + 1) + " " + text);
    }

    addLine(line) {
        this.doc.push(line);
    }

    addCodeLine(token) {
        this.addLine("");
        this.addLine("```cpp");

        if (this.options.addLineNumber) 
        {
            this.addLine(token.code + ` /* line ${token.codeLine} */`);
        }
        else
        {
            this.addLine(token.code);
        }
        
        this.addLine("```");
        this.addLine("");
    }

    addTextLine(text, relative) {

        if (text.startsWith("```")) {
            this.codeBlock = ! this.codeBlock;
        }

        if (this.codeBlock) {
            this.addLine(text);
            return;
        }

        if (text.startsWith("#")) 
        {
            if (relative){
                this.addLine("#".times(this.level + 1) + text);
            } else {
                var prefix = text.left(text.indexOf(" "));
                this.level = prefix.length;
                this.addLine(text);
            }
        }
        else
        {
            this.addLine(text);
        }
    }

    addLines(lines, relative) 
    {
        for (const l of lines) 
        {
            this.addTextLine(l, relative);
        }
    }
}

function getHtmlAnchor(anchor)
{
    return `<a name="${anchor}"></a>`;
}

exports.Generator = Generator;

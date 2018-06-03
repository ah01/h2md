# Header to Markdown (*h2md*)

Small utility for generating markdown file from block comments in C/C++ source code. 

```
library.h  →  [m2md]  →  documentation.md
```

Basic idea is that you have markdown text in block comment of your code and you want to take them and put them in to separate file.

*This tool is far away from doxygen or other proper documentation generators. I want small tool for documenting trivial Arduino library. I realize that I unintentionally already writing markdown into comments in header file. So, I need to just take them out…*

## Examples

See example header file **[timer.h](https://github.com/ah01/h2md/blob/master/examples/timer.h)** and corresponding  generated markdown **[timer.md](https://github.com/ah01/h2md/blob/master/examples/timer.md)**.

There are more [examples…](https://github.com/ah01/h2md/tree/master/examples)

## Usage

Get application. Requires *node.js* and *npm* to be installed on computer.

```bash
git clone https://github.com/ah01/h2md.git
cd h2md
npm install
```

Run it

```bash
node h2md -p cpp -o documentation.md library.h
```

## Theory of operation

h2md works in 3 steps:

1. Take all block comment (beginning with `/**`) from file and take also one following line of code after block.
2. Apply patterns to block according to that one line of code (if not empty). Patterns are in [libs](https://github.com/ah01/h2md/tree/master/lib/patterns).
3. Go block by block and
    - If code line is empty, just put content of block to output file.
    - If code line is not empty, make md header from it and then put content of block.


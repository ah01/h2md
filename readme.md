# C/C++ Header to Markdown converter (*h2md*)

Small utility for generating markdown file from block comments in C/C++ source code. 

```
library.h  →  [h2md]  →  documentation.md
```

Basic idea is that you already have markdown text in block comment of your code and you want to take them into separate file.

*This tool is far away from doxygen or other proper documentation generators. I want small tool for documenting trivial Arduino library. I realize that I unintentionally already writing markdown into comments. So, I need to just take them out…*

## Examples

- [timer.h](https://github.com/ah01/h2md/blob/master/examples/timer.h) → [timer.md](https://github.com/ah01/h2md/blob/master/examples/timer.md) (C++ header)
- [simple.h](https://github.com/ah01/h2md/blob/master/examples/simple.h) → [simple.md](https://github.com/ah01/h2md/blob/master/examples/simple.md) (C header)

## Usage

Get application. Requires *node.js* and *npm* to be installed on computer.

```bash
git clone https://github.com/ah01/h2md.git && cd h2md
npm install
```

Run it

```bash
node h2md -p cpp -o documentation.md library.h
```

## Theory of operation

h2md works in 3 steps:

1. Take block comment (beginning with `/**`) from file plus one following line of code.
2. Apply patterns to block according to that one line of code (if not empty). Patterns are in [libs](https://github.com/ah01/h2md/tree/master/lib/patterns).
3. Go block by block and
    - If code line is empty, just put content of block to output file.
    - If code line is not empty, make md header from it and then put content of block.


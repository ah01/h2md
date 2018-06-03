# Header to Markdown (*h2md*)

Small utility for generating markdown file from block comments in C/C++ source code. In general, it will work for any language that use C style block comment.

```
    my_super_library.h --> (m2md) --> documentation_for_my_super_library.md
```

Basic idea is that you have markdown text in block comment of your code and you want to take them and put them in to separate file.

*This tool is far away from doxygen or other proper documentation generators. I want small tool for documenting trivial Arduino library. I realize that I unintentionally already writing markdown into comments in header file. So, I need to just take them out...*

## Theory of operation

h2md works in 3 steps:

1. Take all block comment (beginning with `/**`) from file and take also one following line of code after block.
2. Apply list of patterns to block according to that one line of code (if not empty).
3. Go block by block and
    - If code line is empty, just put content of block to output file.
    - If code line is not empty, make md header from it and then put content of block.

See example header file **[timer.h](https://github.com/ah01/h2md/blob/master/examples/timer.h)** and corresponding  generated morkdown **[timer.md](https://github.com/ah01/h2md/blob/master/examples/timer.md)**.


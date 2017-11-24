---
title: Regular Expressions I
---

Regular Expressions are a concise method of describing text patterns.  In JavaScript a Regular Expression are also special objects that can be used with some methods to help find or transform text.

#### Defining a Regular Expression:``
1. `let r = /ab+c/` constructing with slashes.
2. `let r = new RegExp('ab+c')` constructing with the constructor function 'RegExp'.

#### Special Characters
Regular Expression use a bunch of special characters to express pattern matches.

| Character | meaning | example |
| ---  | ---- | --- |
| ^ | Matches beginning of input |
| $ | Matches end of input |
| * | Matches preceding expression 0 or more times |
| + | Matches preceding expression 1 or more times |
| ? | Matches preceding expression 0 or 1 times |
| . | Matches any single character except newline |
| {n} | Matches exactly 'n' occurrences of the preceding expression | `/b{3}/ `|
| {n,} | Matches at least 'n' occurrences of the preceding expression | `/b{3,}/` |
| {n,m} | Matches at least 'n' and at most 'm' occurrences of the preceding expression | `/b{3,}/` |
| [abc] | Matches any one of 'a' or 'b' or 'c' |
| [^abc] | Matches anything _not_ 'a' or 'b' or 'c' |
| \\b | Matches a word boundary |
| \\B | Matches a non-word boundary |
| \\d | Matches a digit character | same as `[0-9]` |
| \\D | Matches a non-digit character | same as `[^0-9]` |
| \\s | Matches a white space character |
| \\S | Matches a non-white space character |
| \\w | Matches any alphanumeric character | same as `[A-Za-z0-9_]` |
| \\W | Matches any alphanumeric character | same as `[^A-Za-z0-9_]` |
| \| | or ie. matches 'a' or 'b' | a \| b
| (x) | matches 'x' and remembers the match |
| (?:x) | matches 'x' but does not rember the match |


#### Other sites about Regular Expressions
- [Regular Expression Tester](https://regex101.com/#javascript)

<div class="nextArticle">

Next Article: [More about regular expressions](/Learning/26_regex2/)
</div>

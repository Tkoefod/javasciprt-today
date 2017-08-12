---
title: Variables
---

Variables & Constants are used all the time in javaScript and well might be considered the most basic element of the language.

#### Types of Variables & Constants
<div class="bad">

* `var` - this was the most common variable declaration until es2015 but now its considered bad form to use it.  I really only list this because you will still see it a lot. When you declare a variable with this it is scoped to the entire function where it is declared ( and functions below it)
</div>

* `let` - introduced in es2015 and is now the main variable declaration type. Variables declared with this are scoped to the current code block (and blocks below it). This means that if you use it to declare a variable in a loop for instance that that variable doesn't "leak" into the outside function.
* `const` - used to declare a constant. This is used just like a variable except that it __can not__ change.  If you try to change it you will get an error.


<div class="nextArticle">

Next Article: [Numerical Operators](/Learning/09_operatorsNumerical/)
</div>

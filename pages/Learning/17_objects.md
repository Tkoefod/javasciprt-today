---
title: Objects
---

Objects are also an integral part of JavaScript that you will probably find yourself using everyday.  They are very useful for storing keyed pices of data or organizing data in a more structured way then an array would allow by itself.

An object is a collection of keyed data and that data can include arrays or other objects as well.  In JavaScript it is designated by the use of curly brackets ( `{ }` ).

_example of a simple object_
```javaScript
let exampleObject = { "keyname" : "sometext" };
```

_example of an array of objects:_
```javaScript
let exampleArray = [
  { "id": "123", "myText" : "Hello there" },
  { "id": "124", "myText" : "What is up today" },
  { "id": "125", "myText" : "Blue" },
]
```
in the above example there are three array elements of object where the objects are defined within curly brackets (`{}`)

The looping mechanism `for in` is provided for looping over an object.

<div class="nextArticle">

Next Article: [Object Methods](/Learning/18_objectMethods/)
</div>

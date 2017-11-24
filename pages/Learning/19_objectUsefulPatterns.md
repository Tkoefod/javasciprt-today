---
title: Patterns with Objects
---
- iterating over Object with `for in` loop
```javaScript
let myObj = { "one" : 1, "two" : 2, "three" : 3 };
let newArray = [];
for (let int in myObj){
  newArray.push( int * 5);
}
//newArray now contains: [5, 10, 15]
```
- iterating over Objects with array methods
```javaScript
let myObj = { "one" : 1, "two" : 2, "three" : 3 };
let newArray = Object.keys(myObj).map( key => 5 * myObj[key] );
// newArray: [5, 10, 15];
```

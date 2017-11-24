---
title: Object Methods
---
Following is a list of the object methods that I find most useful daily. For a complete list you can go to [the Mozzila JavaScript documentation for objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

`Object.assign(target, ...sources )` -- `target` is a target object and `sources` are source objects. Mainly used to shallow clone an object. (easiest way to deep clone is by using JSON.parse with JSON.stringify).

  __example__
  ```javaScript
  let obj = { somekey: 100 };
  let cloneOfObject = Object.assign({}, obj);
  ```

  `Object.entries(obj)` -- returns an array of the object's values mixed with keys.

  `Object.keys(obj)`  -- returns an array of the object's keys.



<div class="nextArticle">

Next Article: [Useful patterns with Objects](/Learning/19_objectUsefulPatterns/)
</div>

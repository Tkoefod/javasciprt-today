---
title: Array Methods
---
The array methods that I find most useful are methods that do not mutate the array, meaning that instead of changing the array I pass to it return a subset or changed array as a new array.  A full list of array methods can be found on the [Mozzila JavaScript reference site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

`find( function )` -- returns the first element in an array that passes the test. If no results then `undefined` is returned.

`includes( searchElement )` -- returns boolean of true if searchElement is found anywhere within the array.

`findIndex( function )` -- returns the index number of the first element in an array that passes the test.  If no resutls then `-1` is returned.

`map( function )`  -- maps the elements of the array through a function returning a new array with the results.  This array method is one of the most general and useful array methods I use everyday.

`filter( function )` -- returns new array of elements that pass test defined by the function.

`reduce( function(accumulator, currentValue, currentIndex) )`

`isArray( obj )` -- returns a boolean of true if the obj is an array.

`every( function )` -- returns a boolean of true if every element passes a test that is defined by the function.

<div class="nextArticle">

Next Article: [Objects](/Learning/17_objects/)
</div>

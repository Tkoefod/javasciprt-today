---
title: Selectors
---

## How to select elements of the DOM.

I'll start out by saying that I am introducing javaScript selectors to you long before most javaScript tutorials do and that I am purposely doing this before even basic javaScript logic because for one: in my experience this is the fist place that newbies interact with existing code, and second: it is something that many veterans don't really know if they mostly interacted with the DOM by way of jQuery.

Selectors are how you select a pieces of the DOM to interact with.  Once you have selected a piece or pieces of the DOM you can start to work your magic by adding to, removing from, or modifying those pieces.

In the jQuery world of javaScript this is done with something that looks like `$("#someID").text()` or similar but i won't be going down that route its just good to recognize it for when you see it in the wild.  Instead of relaying on a whole bloated piece of unneeded framework I will be showing you the pure javaScript methodology.

The main selectors are the following:
- `.getElementsByTagName()`
- `.getElementByID()`
- `.getElementsByClassName()`

These all return a type of object called `HTMLCollection` that is "live", meaning that the collection will update if the DOM changes. Access to the DOM elements can be achieved through the index as in the following example where we get all "div" elements from the entire document:
``` javaScript
  let htmlCollection = document.getElementsByTagName('div');
  htmlCollection[0];  // is the first element
```

The following are more computational expensive and less common.
- `.querySelector()`
  * returns first match of a css selector
- `.querySelectorAll()`
  * returns all matches for a css selector as a `HTMLCollection`
``

<div class="nextArticle">

Next Article: [Reading From The The DOM](/Articles/05_Reading_DOM/)
</div>

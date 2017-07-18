---
title: Reading & writing with the DOM I
---

## Reading from elements of the DOM we have selected.

After selecting a piece of the DOM you probably want to do something with it.  Before we can do that we have to decide what piece of the DOM element we want to work with.

select an element like this:
``` javaScript
let mySelection = document.getElementByID("someID");
```
then you can interact with it like so:
``` javaScript
let someHtml = mySelection.innerHTML;
```

* selects the html inside the chosen element: `.innerHTML`
* selects the text inside the chosen element: `.textContent`
* change style: `element.style`
  - Example: `mySelection.style.color = 'red'`
  - This will only read the styles that are directly on the element not styles that are part of a style sheet or inherited.
* change class: `mySelection.classList`
* create Element: `mySelection.createElement()`
* append child: `mySelection.appendChild()`
* inserts before the selector: `insertBefore()`
* clones the selected element/node: `.cloneNode()`
* creates a fragment of the document that can be added in later: `.createDocumentFragment`  https://www.sitepoint.com/dom-manipulation-vanilla-javascript-no-jquery/



<div class="nextArticle">

Next Article: [NodeLists](/Learning/06_NodeLists/)
</div>

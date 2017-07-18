---
title: Easy build & use of React Components
---

## Easy quick way to build and use custom React Components in plain websites.

I found it easy to start working with React and really liked how it worked. Then I went to try and make a component in React that I could use in a project for work. That project was already set in the way we were building it for output and putting it through Webpack wasn't really an option.  What I was looking for was an easy way to pack up the React component so that we could just include it with a script tag like old fashioned Web Development.  I also needed a procedure that very junior javaScript developers could easy replicate.  This is where I found [nwb](https://github.com/insin/nwb) to be a awesome.

[nwb](https://github.com/insin/nwb) is a great tool to quickly start up a new React application or React Component.


to create a new starter project with nwb for a react component:
```
nwb new react-component <dir-name> [options]
```
During the creation of the new react component it will ask you for the "export?"
after creation of the starter you can start the development server with Hot Module Replacement using:
```
nwb serve
```
after doing your magic and changing the component starter into your next masterpiece you can then use nwb to create the build with:
```
nwb build
```
or (for production build that will remove prop types checking from the build)
```
NODE_ENV=development nwb build
```
this does a few things but what we are interested in at the moment is that it will build a umd component under the "umd" directory.

#### include files in script tags

In the "umd" directory it will build three files the uncompressed umd file, the minimized version of that file and the map for that minimized version.  We will mainly be interested in just the minimized file which will be named `<your-project-name>.min.js`.  We can include that now along with react.js & rect-dom.js with normal 'script' tags in our html file.

#### Tell React where to render our component.

React should be available as the global `React` and ReactDOM as `ReactDOM` thus we can select a div where we want our component to render to (I have mine selected by ID of name 'myApp') and we tell React to create an element from our umd component and we have only the one export from it called default so we need to tell React exactly that as I have done in the example below.

```
ReactDOM.render(
  React.createElement(myComponentExportName.default),
  document.getElementById('myApp')
);
```

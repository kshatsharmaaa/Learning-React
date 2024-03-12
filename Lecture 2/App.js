import React from "react";//lecture 2 changed
import ReactDOM from "react-dom/client";

// CONVERTING JAVASCRIPT CODE TO REACT

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
//it takes 3 args
//{} -> to give attributes to the tag
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// this h1 is not a h1 element, it's just an object with properties that look like HTML
// props: children + attributes

//NESTED  ELEMENTS

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), //if we want to give 2 child to this div then we can use array
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

root.render(parent);

//JSX to simplify the above code

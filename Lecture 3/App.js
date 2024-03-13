import React from "react";//lecture 2 changed
import ReactDOM from "react-dom/client";


/* This all first and second lecture code
// CONVERTING JAVASCRIPT CODE TO REACT

//React.createElement => ReactElement - JS Object => HTMLElement(render)

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

*/

//Lecture 3

// React Element (JSX)

// JSX -> HTML like syntax 

// JSX (transpiled before it reaches the JS Engine)

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 className="">h1 tag using jsx</h1>

// if the jsx is in single line it is valid and if it  consists of multiple lines wrap it under parenthesis

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);



// React Component

// Class Based Component - OLD  - nobody uses this anymore
// Functional Component  - NEW


// React Functional Component - just a normal js function -capital letter - returns a jsx code

const Title = () => (
  <h1 className="head">
    Namaste React using JSX
  </h1>
);

//Component Composition
const HeadingComponent = () => (
  <div id = "container">
    <Title/>
    <h1 className="heading">Namaste React Functional Component</h1>
    <h2>{100+2000} loss</h2>
  </div>   
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>); // self closing component







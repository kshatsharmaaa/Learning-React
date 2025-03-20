// CONVERTING JAVASCRIPT CODE TO REACT

/* The code snippet you provided is creating a React element representing an `<h1>` tag with the text
content "Hello World from React!" and an id attribute of "heading". It then renders this element to
the root element in the HTML document with the id "root" using `ReactDOM.createRoot` and
`root.render(heading)`. */

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!"); // React.createElement(type, props(attributes), children)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render the heading element to the root element in the HTML document, converting the React element to actual HTML

// this h1 is not a h1 element, it's just an object with properties that look like HTML
// props: children + attributes
console.log(heading); // {type: "h1", props: {…}} // this is not a h1 element, it's just an object with properties that look like HTML

//NESTED  ELEMENTS

const parent = React.createElement(
  "div", { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"), //if we want to give 2 child to this div then we can use array
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);
 
root.render(parent);

//JSX to simplify the above code

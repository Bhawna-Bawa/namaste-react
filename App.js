import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading); // React element ( JS Object with type, props, etc.) => HTML element

/* JSX - JavaScript XML
    JSX is a syntax extension for JavaScript. It is used with React to describe what the UI should look like.
    JSX produces React "elements".
    JSX makes it easier to write and add HTML in React.
    JS engine does not understand JSX, it understands ecmascript. So, JSX is converted into React.createElement() calls by Babel.
    ECMAScript provides the core rules, syntax, data types, and objects, while the engine translates that standardized blueprint into machine code
*/

// JSX => React.createElement() => React element (JS Object) => HTML element
const jsxHeading = (
  <h1 id="head" className="heading" tabIndex="-1">
    Namaste React
  </h1>
); // This is not pure JavaScript, it is JSX. This code is transpiled by Babel before it goes to JS engine.
console.log(jsxHeading); // React element (Object with type, props, etc.)



// Component Composition - A component can be composed of other components.
const TitleComponent = () => (
  <h1>
    Welcome to Namaste React Functional Component
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1 id="head" className="heading" tabIndex="-1">
      Namaste React Functional Component
    </h1>
  </div>
);
root.render(<HeadingComponent />);

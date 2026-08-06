const heading = React.createElement(
    "h1",
    { id: "heading",
      className: "head"
    },
    "Namaste React with Bhawna Bawa"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(document.getElementById("root")); // element
console.log(heading);  // object
root.render(heading); // Taking the object and converting it into HTML and putting it inside the root element.
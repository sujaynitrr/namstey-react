{
  /* <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
     <h1>I am h2 tag</h1>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
     <h1>I am h2 tag</h1>
  </div>
  
  <div id="parent">
  <div id="child">
    <h1>I am h1 tag</h1>
     <h1>I am h2 tag</h1>
  </div>
  <div id="child2">
    <h1>I am h1 tag</h1>
     <h1>I am h2 tag</h1>
  </div>
  
</div>; */
}
import React from "react";
import ReactDOM from "react-dom";

//jsx (transpiled before it reaches the js) - parcel - Babel

//jsx => Babel transpile it  it to React.createElement => ReactElement-js Object =>HTMLElement(render)

//React element
const heading = (
  <h1 className="head" tabIndex="5">
    React using jsx
  </h1>
);

//React component
//Class based component - Old
//Functional component - New

// Functional Component

const Title = () => {
  return <h1>React using Jsx</h1>;
};

// Functional Component
const Footer = () => <h1>React is using jsx</h1>;

//Component inside the component known as composition component
// below one is example of composition component
// Calling  Title component as method in side of HeadingComponent

const HeadingComponent = () => {
  return (
    <div>
      {Title()}
      <Title />
      <h1>Welcome to React component</h1>
    </div>
  );
};

// Using Functional component in side reactElement
const reactElement = (
  <h1>
    <HeadingComponent />
    Hello React
  </h1>
);

const jsxHeading = <h1 id="child">Hello React</h1>;
console.log(jsxHeading, "jsxHeading");
const root = ReactDOM.createRoot(document.getElementById("root"));

// How can Babel identify the component ==> we have to pass  like (</>) inside it pass the component name like  ==><HeadingComponent/>

//root.render(<HeadingComponent />);

root.render(reactElement);

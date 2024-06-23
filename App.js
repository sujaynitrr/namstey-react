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
/* -Header
    -Logo
    -Home
    -About
  Body 
    -Search
    -RestaurantContainer
      -RestaurantCard
  Footer
    -Contact
    -      
*/
import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/Components/Header";
import RestaurantContainer from "./src/Components/RestaurantConatiner";
import Footer from "./src/Components/Footer";

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
//const Footer = () => <h1>React is using jsx</h1>;

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

//root.render(reactElement);

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          alt="logo"
          src="https://img.freepik.com/premium-vector/fast-food-delivery-logo-food-delivery-logo-design-template_664675-639.jpg"
          className="logo"
        />
      </div>
      <div>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const CartComponent = () => {
  return (
    <div className="cardContainer">
      <div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85825a6d74b1059a63a9b688de9f67ce"
          alt=""
          width="100px"
          height="100px"
        />
      </div>
      <p>Price</p>
      <p>Rating</p>
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">
      <div>Copy Right</div>
      <div>Demo Project</div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div>
      <Header />
      <RestaurantContainer />
      <Footer />
    </div>
  );
};
root.render(<AppLayoutComponent />);

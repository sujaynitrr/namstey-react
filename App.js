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
import RestaurantContainer from "./src/Components/RestaurantContainer";
import Footer from "./src/Components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantsMenu from "./src/Components/RestaurantsMenu";
import User from "./src/Components/User";
import AboutClassComponent from "./src/Components/AboutClassComponent";

const AppLayoutComponent = () => {
  return (
    <div>
      <Header />
      <User />

      {/* <AboutClassComponent /> */}
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantsMenu />,
      },
    ],

    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

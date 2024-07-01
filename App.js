import React, { lazy, useEffect, useState } from "react";
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
import Grocery from "./src/Components/Grocery";
import Accordion from "./src/components/Accordion";
import userContext from "./src/utils/userContext";
import ContactClassComponent from "./src/components/ContactClassComponent";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayoutComponent = () => {
  //updating the value using in userContext
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Sujay");
  }, []);

  return (
    <div>
      <Provider store={appStore}>
        <userContext.Provider value={{ user: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
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
        element: <AboutClassComponent />,
      },
      {
        path: "/contact",
        element: <ContactClassComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantsMenu />,
      },
      {
        path: "/grocery",
        element: <Grocery />,
      },
    ],

    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import userContext from "../utils/userContext";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  let btn = "Login";
  const [dynamicButton, setDynamicButton] = useState(btn);
  const onlineStatus = useStatus();
  const { user } = useContext(userContext);
  const item = useSelector((store) => store.cart.item);
  console.log(item.length, "item");

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
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
          <li>{item.length}</li>
          <li>Cart</li>
          <li>{user}</li>
          <li>online status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>

          <li>
            <button
              onClick={() =>
                dynamicButton === "Login"
                  ? setDynamicButton("Logout")
                  : setDynamicButton("Login")
              }
            >
              {dynamicButton}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

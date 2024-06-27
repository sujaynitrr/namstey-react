import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let btn = "Login";
  const [dynamicButton, setDynamicButton] = useState(btn);
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

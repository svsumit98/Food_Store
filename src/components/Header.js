import { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="logo-container">
        <img className="w-20 h-auto" src={LOGO_URL} alt="Logo" />
      </div>

      <nav className="flex items-center space-x-6 text-gray-700 font-medium">
        <ul className="flex space-x-4">
          <li className="flex items-center space-x-1 text-sm">
            <span>{onlineStatus ? "🟢" : "🔴"}</span>
            <span>{onlineStatus ? "Online" : "Offline"}</span>
          </li>
          <li className="text-sm hover:text-green-600 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="text-sm hover:text-green-600 transition-colors duration-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-sm hover:text-green-600 transition-colors duration-200">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="text-sm font-semibold hover:text-green-600 transition-colors duration-200">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
        </ul>

        <button
          className="px-4 py-1.5 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition duration-200"
          onClick={() => {
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
          }}
        >
          {btnNameReact}
        </button>
      </nav>
    </header>
  );
};

export default Header;

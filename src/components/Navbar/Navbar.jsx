import React, { useContext } from "react";
import logo from "../../assets/images/freshcart-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";

export default function Navbar() {
  const { userLogin, setUserLogin } = useContext(UserContext);
  let navigate = useNavigate();
  let { cartItems } = useContext(CartContext);

  function logOut() {
    localStorage.removeItem("userToken");
    setUserLogin(null);
    navigate("/login");
  }

  const cartItemCount = cartItems?.numOfCartItems || 0;

  return (
    <nav className="fixed bg-gray-100 top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} width={120} alt="fresh cart logo" />
        </div>

        <div className="flex items-center space-x-4">
          {userLogin !== null ? (
            <div className="flex items-center space-x-6">
              <NavLink
                to={"/"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                About
              </NavLink>
              <NavLink
                to={"/brands"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Brands
              </NavLink>
              <NavLink
                to={"/cart"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Cart
              </NavLink>
              <NavLink
                to={"/category"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Category
              </NavLink>

              <NavLink
                to={"/products"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Products
              </NavLink>
              <NavLink
                to={"/wishList"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                WishList
              </NavLink>

              <div className="relative ml-4">
                <NavLink
                  to={"/cart"}
                  className="text-md text-slate-900 font-normal hover:text-green-600"
                >
                  <GiShoppingCart className="text-2xl text-slate-900  hover:text-green-600 " />
                  {cartItemCount > 0 ? (
                    <span className="absolute top-[-8px] right-[-8px] bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10">
                      {cartItemCount}
                    </span>
                  ) : (
                    <span className="absolute top-[-8px] right-[-8px] bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center z-10">
                      0
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          ) : null}

          {userLogin == null ? (
            <>
              <NavLink
                to={"/login"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                className="text-md text-slate-900 font-normal hover:text-green-600"
              >
                Register
              </NavLink>
            </>
          ) : (
            <span
              onClick={logOut}
              className="text-md text-slate-900 cursor-pointer font-normal hover:text-green-600"
            >
              Logout
            </span>
          )}

          <div className="flex space-x-2">
            <FaFacebook className="text-xl text-blue-600 hover:text-blue-800" />
            <FaTwitter className="text-xl text-blue-400 hover:text-blue-600" />
            <FaInstagramSquare className="text-xl text-pink-600 hover:text-pink-800" />
            <FaTiktok className="text-xl text-black hover:text-gray-800" />
            <FaYoutube className="text-xl text-red-600 hover:text-red-800" />
          </div>
        </div>
      </div>
    </nav>
  );
}

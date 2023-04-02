import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../Utils/useOnline";
import UserContext from "../../Utils/UserContext";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
//import HeaderLocation from "./HeaderLocation";
const Title = () => (
  // <div className="">
  <div className="h-7 max-w-140 mr-6">
    <a href="/">
      <img
        data-testid="logo"
        className="h-28 p-2"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1cRtvCT135Bz-t4KNlb8OytZo7y87UjAXw&usqp=CAU"
      />
    </a>
  </div>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  let totalItems = 0;
  cartItems.forEach((element) => {
    totalItems += element?.qty;
  });
  return (
    <div className="w-full flex justify-between">
      <Title />
      {/* <HeaderLocation/> */}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/help">Help</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/cart" data-testid="cart" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              -{totalItems}
            </Link>
          </li>
        </ul>
      </div>

      <h1 data-testid="onlineStatus">{isOnline ? "✅" : "❌"}</h1>
      <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        // <div className="flex justify-between">
        <>
          <Link to="/signIn">
            <button>SignIn</button>
          </Link>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
};

export default Header;

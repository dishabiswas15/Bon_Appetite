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
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  //const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  let totalItems = 0;
  cartItems.forEach((element) => {
    totalItems += element?.qty;
  });
  return (
    <div className="w-full flex justify-between shadow-md">
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {/* {cartItems.length} */}
              -{totalItems}
            </Link>
          </li>
        </ul>
      </div>

      
      {/* <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        
        
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )} */}
      <div className="flex">
      <Link to="/logIn" className="my-10">
        <button className="bg-yellow-400 font-medium text-slate-800 w-20 h-9 rounded-md hover:bg-yellow-600">LogIn</button>

      </Link>
      <h1 className="pr-28 py-11" data-testid="onlineStatus">{isOnline ? "✅" : "❌"}</h1>
      </div>
    </div>
  );
};

export default Header;

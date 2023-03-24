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
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-3 font-bold hover:font-extrabold">
            <Link to="/cart" data-testid="cart">
              Cart-{cartItems.length} items
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

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header"; // Default import
//import {Title} from "./Components/Header";  // Named import
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/Profile";
import Instamart from "./Components/Instamart";
import UserContext from "../Utils/UserContext";
import { Provider } from "react-redux";
import store from "../Utils/store";
import Cart from "./Components/Cart";
import BarsPubs from "./Components/BarsPubs";
import SignIn from "./Components/SignIn";

//const Instamart = lazy(() => import("./components/Instamart")); // Dyanamic import or Lazy import

/**
 * Header
 *   - Logo
 *   - Nav Bar
 *   - Cart
 * Body
 *   - Search bar
 *   - Restaurant list
 *   - Restaurant card
 *        Image
 *        Name
 *        Rating
 *        Cusins
 * Footer
 *   - Links
 *   - Copyrights
 */

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Disha Biswas",
    email: "biswas.disha15@gmail.com",
  });
  
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};



const appRouter = createBrowserRouter([
  {
    path: "/", // URL
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/", // URL
        element: <Body />,
      },
      {
        path: "/about", // URL
        element: <About />,
        children: [
          {
            path: "profile", // parentpath(About)/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact", // URL
        exact: true,
        element: <Contact />,
      },
      {
        path: "/restaurant/:id", // URL
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart", //URL
        element: (
          //<Suspense fallback = {<Shimmer/>}>
          <Instamart />
        ),
        //</Suspense>
      },
      {
        path: "/cart", // URL
        element: <Cart />,
      },
      {
        path: "dining/:id",
        element: <BarsPubs />
      },
      {
        path: "/signIn",
        element: <SignIn/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// const router =
root.render(<RouterProvider router={appRouter} />);

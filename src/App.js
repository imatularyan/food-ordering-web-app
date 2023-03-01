import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import User from "./components/User";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
  return (
    <>
      <Header allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants} setFilteredRestaurants={setFilteredRestaurants}/>
      <Routes>
        <Route path="/" element={<Body allRestaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>}/>
        <Route element={<RestaurantMenu allRestaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>}/>
      </Routes>
      <Outlet/>
      <Footer />
    </>
  )
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/Contact",
        element: <Contact/>,
      },
      {
        path: "/user",
        element: <User/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

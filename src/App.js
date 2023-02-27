import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

const AppLayout = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  return (
    <>
      <Header allRestaurants={allRestaurants} setAllRestaurants={setAllRestaurants} setFilteredRestaurants={setFilteredRestaurants}/>
      <React.StrictMode>
      <Body allRestaurants={allRestaurants} filteredRestaurants={filteredRestaurants}/>
      </React.StrictMode>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

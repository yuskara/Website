import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RestaurantHomeCenter from "./Demo/Restaurant/RestaurantHomeCenter";
import RestaurantFooter from "./Demo/Restaurant/RestaurantFooter";
import RestaurantMenu from "./Demo/Restaurant/RestaurantMenu";
import RestaurantHeader from "./Demo/Restaurant/RestaurantHeader";

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Restaurant() {
  return (
    <Router>     
    <RestaurantHeader />
    <RestaurantHomeCenter />
        <RestaurantMenu />
        <RestaurantFooter />
    </Router>
  );
}

export default Restaurant;
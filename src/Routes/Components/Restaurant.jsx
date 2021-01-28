import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Central from "./Demo/Restaurant/Central";
import Footer from "./Demo/Restaurant/Footer";
import Menu from "./Demo/Restaurant/Menu";
import Header from "./Demo/Restaurant/Header";

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Restaurant() {
  return (
<<<<<<< HEAD
    <Router>     
    <RestaurantHeader />
    <RestaurantMenu />
    <RestaurantHomeCenter />
    <RestaurantFooter />
=======
    <Router>   
      <Header />
      <Menu /> 
      <Central />
      <Footer />
>>>>>>> 09794a7c9c5194d0cf61485ed3d9c535712dedfd
    </Router>
  );
}

export default Restaurant;
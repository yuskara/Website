import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Demo/Restaurant/Menu";
import Header from "./Demo/Restaurant/Header";
import Central from "./Demo/Restaurant/Central";
import Footer from "./Demo/Restaurant/Footer";

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function Restaurant() {
  return (
    <Router>     
        <Menu />
        <Header />
        <Central />
        <Footer />
    </Router>
  );
}

export default Restaurant;
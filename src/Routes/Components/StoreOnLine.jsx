import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Home/Menu";
import StoreMenu from './Demo/StoreOnline/StoreMenu'
import StoreHeader from './Demo/StoreOnline/StoreHeader'
import StoreCentral from './Demo/StoreOnline/StoreCentral'
import StoreFooter from './Demo/StoreOnline/StoreFooter'
// import Header from "./Home/Header";
// import Central from "./Home/Central";
// import Footer from "./Home/Footer";

// Swith Component renders the first match and ignore the rest.//   {/* Mutaza and Presefoni Part */}
function StoreOnLine() {
  return (
    <Router>     
        <StoreMenu />
        <StoreHeader />
        <StoreCentral />
        <StoreFooter />
        {/* <Header />
        <Central />
        <Footer /> */}
    </Router>
  );
}

export default StoreOnLine;
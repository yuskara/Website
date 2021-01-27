import React from 'react';
import './App.css';
import Menu from './Routes/Component/StoreMenu';
import Header from './Routes/Component/StoreHeader';
import Central from './Routes/Component/StoreCentral';
import Footer from './Routes/Component/StoreFooter';

// import Error from './Error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.
// Swith Component renders the first match and ignore the rest.
function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: 'light'}}>
        <Menu />
        <Header />
        <Central />
        <Footer />
      </div>
    </Router>
  );
}
// <PrivateRoute path='/protected' component={Protected}/>

export default App;

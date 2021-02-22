import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Routes/Components/Home";
import Restaurant from "./Routes/Components/Restaurant";
import Store from "./Routes/Components/StoreOnLine";
import TempY1 from "./Routes/Components/Demo/CVTemplates/YusufTemplate/CVYusufTemplate1";
import TempY2 from "./Routes/Components/Demo/CVTemplates/YusufTemplate/CVYusufTemplate2";
import Error from "./Routes/Components/Error";// Notice the keyword "exact" so react just renders the default page when nothing but the '/' is on it.

 function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/restaurant' exact component={Restaurant} /> 
          <Route path='/store' exact component={Store} /> 
          <Route path='/templateMa1' exact component={Store} /> 
          <Route path='/templateJ1' exact component={Store} /> 
          <Route path='/templateB1' exact component={Store} /> 
          <Route path='/templateY1' exact component={TempY1} /> 
          <Route path='/templateY2' exact component={TempY2} />
          <Route path='/templateMu1' exact component={Store} /> 
          <Route path='*' component={Error}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
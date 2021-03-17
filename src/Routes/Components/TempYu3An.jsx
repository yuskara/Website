import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import bkvideo from "./Demo/CVTemplates/YusufTemplateAn/assets/sky.mp4";
import Home from "./Demo/CVTemplates/YusufTemplateAn/pages/home";
import About from "./Demo/CVTemplates/YusufTemplateAn/pages/about";
import Experience from "./Demo/CVTemplates/YusufTemplateAn/pages/experience";
import Contact from "./Demo/CVTemplates/YusufTemplateAn/pages/contact";
import "../css/CVYusufTemplate3An.css";

export default function TempYu3An() {
  let { path } = useRouteMatch();
    return (
      <div className="TempY3">
        <div className="TempYu3An-bg-video">
          <video className="TempYu3An-bg-video_content" autoPlay loop>
            <source src={bkvideo} type="video/mp4"/>
          </video>
      <div className="Xbg-video__overlay"></div>
    </div>
      <Router exact path={path}>
        <Switch>
                <Route path={`${path}/`} component={Home} />
                <Route path={`${path}/about`} component={About} />
                <Route path="/templateY3/experience" component={Experience} />
                <Route path="templateY3/contact" exact component={Contact} />
            </Switch>
        </Router>
      </div>
    );
  }

 
import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
import bkvideo from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/assets/sky.mp4";
import Home from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/home";
import About from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/about";
import Experience from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/experience";
import Contact from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/contact";
import "../css/CVYusufTemplate3An.css";

export default function TempYu3An() {
  let { path } = useRouteMatch();
    return (
      <Router>
        <div className="TempY3">
          <div className="TempYu3An-bg-video">
            <video className="TempYu3An-bg-video_content" autoPlay loop>
              <source src={bkvideo} type="video/mp4"/>
            </video>
            <div className="Xbg-video__overlay"></div>
          </div>
          <Switch>
            <Route path={`${path}/`} exact component={Home} />
            <Route path={`${path}/`} exact component={About} />
            <Route path='/experience' exact component={Experience} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }

 
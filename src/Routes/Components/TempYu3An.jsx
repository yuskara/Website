import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
<<<<<<< HEAD
import bkvideo from "./Demo/CVTemplates/YusufTemplateAn/assets/sky.mp4";
import Home from "./Demo/CVTemplates/YusufTemplateAn/pages/home";
import About from "./Demo/CVTemplates/YusufTemplateAn/pages/about";
import Experience from "./Demo/CVTemplates/YusufTemplateAn/pages/experience";
import Contact from "./Demo/CVTemplates/YusufTemplateAn/pages/contact";
import "../css/CVYusufTemplate3An.css";


=======
import bkvideo from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/assets/sky.mp4";
import Home from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/home";
import About from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/about";
import Experience from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/experience";
import Contact from "./Demo/CVTemplates/YusufTemplate/CVTemplateAn/pages/contact";
import "../css/CVYusufTemplate3An.css";

>>>>>>> dc359fb6252230fb36959ede1612113b2ca8eb36
export default function TempYu3An() {
  let { path } = useRouteMatch();
    return (
      <div className="tempY3">
        <div className="TempYu3An-bg-video">
          <video className="TempYu3An-bg-video_content" autoPlay loop>
            <source src={bkvideo} type="video/mp4"/>
          </video>
<<<<<<< HEAD
      <div className="Xbg-video__overlay"></div>
    </div>
      <Router exact path={path}>
        <Switch>
                <Route path={`/templateY3`} component={Home} />
                <Route path={`/about`} component={About} />
                <Route path={`/experience`} component={Experience} />
                <Route path={`/contact`} exact component={Contact} />
            </Switch>
        </Router>
      </div>
=======
          <div className="Xbg-video__overlay"></div>
        </div>
      <Router exact path={path}>
        <Switch>
          <Route path={`/templateY3`} component={Home} />
          <Route path={`/about`} component={About} />
          <Route path={`/experience`} component={Experience} />
          <Route path={`/contact`} exact component={Contact} />
        </Switch>
      </Router>
    </div>
>>>>>>> dc359fb6252230fb36959ede1612113b2ca8eb36
    );
  }

 
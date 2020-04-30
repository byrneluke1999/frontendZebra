import React from "react";
import { Route, Switch } from "react-router-dom";

import Contact from "./containers/Contact";
import Home from "./containers/Home";
import OptimalSimulation from "./containers/OptimalSimulation";
import NonOptimalSimulation from "./containers/NonOptimalSimulation";

//This function handles the routing in the website.
//From "react-router-dom" routes are set up to link with the navitems in App.js.
//The components are shown at their path. Clicking the navitem in App.js
//navigates to the path.
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Simulation" exact component={OptimalSimulation} />
      <Route path="/NotOptSimulation" exact component={NonOptimalSimulation} />
      {/*Alternative sytax to load a website upon clicking a link within a contact -> contact.js*/}
      <Route
        path="/FrontEnd"
        component={() =>
          (window.location = "https://github.com/byrneluke1999/frontendZebra")
        }
      />
      <Route
        path="/BackEnd"
        component={() =>
          (window.location = "https://github.com/byrneluke1999/backendZebra")
        }
      />
    </Switch>
  );
}

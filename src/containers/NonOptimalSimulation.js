import React from "react";

import Simulation from "../components/Simulation";

//This is the container for the non-optimal simulation.
//it uses the simulation component, passing as a prop a link to where the non-optimal JSON data is stored.
//The use of another container allows for the dynamic re use of the simulation component for different JSON data available at other links.
class NonOptimalSimulation extends React.Component {
  render() {
    return (
      <Simulation link="https://zebradata.blob.core.windows.net/zebradata/notOptimal.JSON" />
    );
  }
}

export default NonOptimalSimulation;

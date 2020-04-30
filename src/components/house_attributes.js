import React from "react";
import "./house_attributes.css";

//component concerned with containing the attribute values of the houses.
//Passed as props each value is listed one after another.
//Enabling the re-use of this component for every new value after the appliation of a new constraint.
class HouseAttributes extends React.Component {
  render() {
    return (
      <div className="container">
        <div>{this.props.color}</div>
        <div>{this.props.nat}</div>
        <div>{this.props.pet}</div>
        <div>{this.props.smoke}</div>
        <div>{this.props.drink}</div>
      </div>
    );
  }
}

export default HouseAttributes;

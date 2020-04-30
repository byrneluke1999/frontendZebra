import React from "react";
import "./Street.css";
import House from "../components/house";
import HouseAttributes from "../components/house_attributes";

//encasing the street as a component.
//comprised of five houses, each their own component.
//When street is used as a component in the simulation it is passed props - the attribute values.
//They're passed in such a way that the first five are the values belonging to house one and so on.
//The props are then passed to the house house attributes component, which itself is passed as a prop to the house component.
class Street extends React.Component {
  render() {
    return (
      <div className="street">
        <div className="haus">
          <House
            solStyle={this.props.solStyle}
            index={1}
            properties={
              <HouseAttributes
                color={this.props.h1col}
                nat={this.props.h1nat}
                pet={this.props.h1pet}
                smoke={this.props.h1smoke}
                drink={this.props.h1drink}
              />
            }
          />
        </div>
        <div className="haus">
          <House
            index={2}
            properties={
              <HouseAttributes
                color={this.props.h2col}
                nat={this.props.h2nat}
                pet={this.props.h2pet}
                smoke={this.props.h2smoke}
                drink={this.props.h2drink}
              />
            }
          />
        </div>
        <div className="haus">
          <House
            index={3}
            properties={
              <HouseAttributes
                color={this.props.h3col}
                nat={this.props.h3nat}
                pet={this.props.h3pet}
                smoke={this.props.h3smoke}
                drink={this.props.h3drink}
              />
            }
          />
        </div>
        <div className="haus">
          <House
            index={4}
            properties={
              <HouseAttributes
                color={this.props.h4col}
                nat={this.props.h4nat}
                pet={this.props.h4pet}
                smoke={this.props.h4smoke}
                drink={this.props.h4drink}
              />
            }
          />
        </div>
        <div className="haus">
          <House
            index={5}
            properties={
              <HouseAttributes
                color={this.props.h5col}
                nat={this.props.h5nat}
                pet={this.props.h5pet}
                smoke={this.props.h5smoke}
                drink={this.props.h5drink}
              />
            }
          />
        </div>
      </div>
    );
  }
}

export default Street;

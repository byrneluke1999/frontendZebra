import React from "react";
import "./house.css";

//This component's main task is to conditionally render the attributes.
//The toggle on/off to show the attributes is implemented here.
class House extends React.Component {
  constructor(props) {
    super(props);
    //boolean to keep track of click condition
    this.state = {
      attr: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //simple handleCLick function to update the boolean state to be opposite of what it is - i.e a toggle function.
  handleClick() {
    this.setState({
      attr: !this.state.attr,
    });
  }
  render() {
    const { index } = this.props;
    let attributes;
    //when the boolean is true the attributes are read as the prop.
    //the prop here is the entire house_attributes.js component.
    //See Street.js for that.
    if (this.state.attr === true) {
      attributes = this.props.properties;
    }
    //when the boolean is false - what's renderd is an empty div essentially - there's no data.
    return (
      <div>
        <div className="box" onClick={this.handleClick}>
          House {index}
        </div>
        <div className="attributes">{attributes}</div>
      </div>
    );
  }
}

export default House;

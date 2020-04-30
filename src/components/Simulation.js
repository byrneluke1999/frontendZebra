import React from "react";
import { Button } from "react-bootstrap";
import Street from "./Street";
import "./Simulation.css";
import { Wave } from "react-animated-text";
import content from "../textContent/About/hometext";

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      index: 0,
    };
  }
  /*
Before any component is rendered, the data is retrieved from a URL. The fetch method does this, as this is not a container/root component
the URL is passed in as a prop to this component. The result from that fetch is extracted to JSON format and then a state is set to its' 
contents.
*/
  componentDidMount() {
    fetch(this.props.link)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  //Function to extract all attribute values in house one for each and every constraint. - explained for house two below.
  dohone() {
    let attributes = [];
    for (let i = 0; i < 15; i++) {
      this.state.items.map((item) =>
        Array.isArray(Object.values(item)[i])
          ? this.loadEmbedElements1(
              Object.values(item)[i].length,
              Object.values(item)[i],
              attributes
            )
          : attributes.push(Object.values(item)[i].House1)
      );
    }
    return attributes;
  }
  //Function to extract all attribute values in house two for each and every constraint.
  dohtwo() {
    let attributes = [];
    //by zebra puzzle specification, there are 15 constraints.
    for (let i = 0; i < 15; i++) {
      this.state.items.map((item) =>
        //determining whether the item is an array or not to determine whether branching is present.
        Array.isArray(Object.values(item)[i])
          ? this.loadEmbedElements2(
              //call to another function to deal with embedded attribute values due to branching. That's the way they come in JSON format
              Object.values(item)[i].length,
              Object.values(item)[i],
              attributes
            )
          : //if not an array - means no branching and the values are appended to this output.
            attributes.push(Object.values(item)[i].House2)
      );
    }
    //returned is a list of all attribute values for house two at each application of a constraint and including the different versions of the same
    //values when branching occurs.
    return attributes;
  }

  //Function to extract all attribute values in house three for each and every constraint.
  dohthree() {
    let attributes = [];
    for (let i = 0; i < 15; i++) {
      this.state.items.map((item) =>
        Array.isArray(Object.values(item)[i])
          ? this.loadEmbedElements3(
              Object.values(item)[i].length,
              Object.values(item)[i],
              attributes
            )
          : attributes.push(Object.values(item)[i].House3)
      );
    }
    return attributes;
  }
  //Function to extract all attribute values in house four for each and every constraint.
  dohfour() {
    let attributes = [];
    for (let i = 0; i < 15; i++) {
      this.state.items.map((item) =>
        Array.isArray(Object.values(item)[i])
          ? this.loadEmbedElements4(
              Object.values(item)[i].length,
              Object.values(item)[i],
              attributes
            )
          : attributes.push(Object.values(item)[i].House4)
      );
    }
    return attributes;
  }
  //Function to extract all attribute values in house five for each and every constraint.
  dohfive() {
    let attributes = [];
    for (let i = 0; i < 15; i++) {
      this.state.items.map((item) =>
        Array.isArray(Object.values(item)[i])
          ? this.loadEmbedElements5(
              Object.values(item)[i].length,
              Object.values(item)[i],
              attributes
            )
          : attributes.push(Object.values(item)[i].House5)
      );
    }
    return attributes;
  }

  //looping over the again embedded arrays FOR HOUSE ONE containing the relevant attribute values when branching occurs.
  //passes is the length of the embedded array, ie. how many versions are produced at branching, the current item we're at during
  //iterating(embedHouse) and the list of attributes we are always appending to.
  loadEmbedElements1(len, embedH, attributes) {
    for (let i = 0; i < len; i++) {
      attributes.push(embedH[i].House1);
    }
    return attributes;
  }
  //same process for house two
  loadEmbedElements2(len, embedH, attributes) {
    for (let i = 0; i < len; i++) {
      attributes.push(embedH[i].House2);
    }
    return attributes;
  }
  //same process for house three
  loadEmbedElements3(len, embedH, attributes) {
    for (let i = 0; i < len; i++) {
      attributes.push(embedH[i].House3);
    }
    return attributes;
  }
  //same process for house four
  loadEmbedElements4(len, embedH, attributes) {
    for (let i = 0; i < len; i++) {
      attributes.push(embedH[i].House4);
    }
    return attributes;
  }
  //same process for house five
  loadEmbedElements5(len, embedH, attributes) {
    for (let i = 0; i < len; i++) {
      attributes.push(embedH[i].House5);
    }
    return attributes;
  }
  //when branching occurs, need to keep track of constraint
  //append to list of constraints a filler constraint for when branching occurs in JSON file to keep track of current branch/ and possibliity
  //of values in street.
  embedconstraints(len, embedC, constraints) {
    for (let i = 0; i <= len - 1; i++) {
      constraints.push("Possibility " + (i + 1) + ": " + embedC);
    }
  }
  //function to increment the count, which keeps track of the current constraint being applied. Incremented upon clicking of button
  goToNext = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    let constraints = [];
    //filler constraint for title bar when simulation is yet to be started.
    constraints.push("-------");
    //similar to previous functions, looping over the data this time extracting the keys in the JSON file, which are the constraints.
    for (let i = 0; i < 15; i++) {
      this.state.items.map(
        (item) =>
          Array.isArray(Object.values(item)[i])
            ? this.embedconstraints(
                //call to another function to take action when branching occurs.
                Object.values(item)[i].length,
                Object.keys(item)[i],
                constraints
              )
            : constraints.push(Object.keys(item)[i]) //appending constraints to list.
      );
    }
    //calling the above functions.
    let itemzh1 = this.dohone();
    let itemzh2 = this.dohtwo();
    let itemzh3 = this.dohthree();
    let itemzh4 = this.dohfour();
    let itemzh5 = this.dohfive();

    //street is a list of the steps to finding the solution until the most recent click index.
    //street with props from the five lists, loaded in the functions previous, is appended to the list
    //filling each with a new index as the button is clicked to increment the count.
    let street = [];
    for (let i = 0; i < this.state.index; i++) {
      street.push(
        <Street
          h1pet={itemzh1[i][2]}
          h1col={itemzh1[i][0]}
          h1nat={itemzh1[i][1]}
          h1smoke={itemzh1[i][3]}
          h1drink={itemzh1[i][4]}
          h2pet={itemzh2[i][2]}
          h2col={itemzh2[i][0]}
          h2nat={itemzh2[i][1]}
          h2smoke={itemzh2[i][3]}
          h2drink={itemzh2[i][4]}
          h3pet={itemzh3[i][2]}
          h3col={itemzh3[i][0]}
          h3nat={itemzh3[i][1]}
          h3smoke={itemzh3[i][3]}
          h3drink={itemzh3[i][4]}
          h4pet={itemzh4[i][2]}
          h4col={itemzh4[i][0]}
          h4nat={itemzh4[i][1]}
          h4smoke={itemzh4[i][3]}
          h4drink={itemzh4[i][4]}
          h5pet={itemzh5[i][2]}
          h5col={itemzh5[i][0]}
          h5nat={itemzh5[i][1]}
          h5smoke={itemzh5[i][3]}
          h5drink={itemzh5[i][4]}
          index={i}
          key={i}
        />
      );
    }
    //catering for the event of errors in data retrieval.
    //imported library built into react for animated lading message.
    const { error, isLoaded } = this.state;
    if (error) {
      return <h1 className="errorMessage">Error: {error.message}</h1>;
    } else if (!isLoaded) {
      return (
        <h1 className="errorMessage">
          <Wave text="Loading..." effect="stretch" effectChange={2.2} />
        </h1>
      );
    } else {
      return (
        <div>
          <div class="flex-container">
            <div class="flex-child">
              <div className="instructions">
                <h1 className="instructions-title">Instructions</h1>
                <ul>
                  <li>
                    This is the simulation of the constraints in an optimised
                    order to minimise branching.
                  </li>
                  <li>{content.step1}</li>
                  <li>{content.step2}</li>
                  <li>{content.step3}</li>
                  <li>{content.step4}</li>
                  <li>{content.step5}</li>
                  <li>{content.step6}</li>
                </ul>
              </div>
            </div>
            {/*content comes from a seperate file, where text is stored.*/}
            <div class="flex-child">
              <div className="key">
                <h1 className="instructions-title">Key</h1>
                <ul>
                  <li>{content.title}</li>
                  <li>{content.attrKey}</li>
                  <li>{content.smokeKey}</li>
                  <li>{content.petKey}</li>
                  <li>{content.drinkKey}</li>
                  <li>{content.colorKey}</li>
                  <li>{content.natKey}</li>
                </ul>
              </div>
            </div>
          </div>
          {/*Displaying the current constraint and a check to display "solution" when it's been found*/}
          <p className="constraint-title">
            {constraints.length === this.state.index + 1
              ? "Solution"
              : constraints[this.state.index]}
          </p>
          {/*Disabling the button when a solution is found*/}
          <Button
            variant="outline-primary"
            size="lg"
            onClick={this.goToNext}
            className="button-style"
            disabled={this.state.index >= constraints.length - 1 ? true : false}
          >
            {this.state.index !== 0 ? "Apply next constraint!" : "Start!"}
          </Button>
          {/*Rendering the solution when the last constraint has been applied only.
             The last element of street is the solution. 
             Checks implemented to ensure "---" is replaced with zebra in the final solution,
             as backend doesn't cater for this.
          */}
          <div className="street">{street}</div>
          <div className="street">
            {constraints.length === this.state.index + 1 ? (
              <Street
                solStyle={true}
                h1pet={
                  itemzh1[constraints.length - 2][2] === "---"
                    ? "dri(water"
                    : itemzh1[constraints.length - 2][2]
                }
                h1col={
                  itemzh1[constraints.length - 2][0] === "---"
                    ? "dri(water"
                    : itemzh1[constraints.length - 2][0]
                }
                h1nat={
                  itemzh1[constraints.length - 2][1] === "---"
                    ? "dri(water"
                    : itemzh1[constraints.length - 2][1]
                }
                h1smoke={
                  itemzh1[constraints.length - 2][3] === "---"
                    ? "dri(water"
                    : itemzh1[constraints.length - 2][3]
                }
                h1drink={
                  itemzh1[constraints.length - 2][4] === "---"
                    ? "dri(water"
                    : itemzh1[constraints.length - 2][4]
                }
                h2pet={itemzh2[constraints.length - 2][2]}
                h2col={itemzh2[constraints.length - 2][0]}
                h2nat={itemzh2[constraints.length - 2][1]}
                h2smoke={itemzh2[constraints.length - 2][3]}
                h2drink={itemzh2[constraints.length - 2][4]}
                h3pet={itemzh3[constraints.length - 2][2]}
                h3col={itemzh3[constraints.length - 2][0]}
                h3nat={itemzh3[constraints.length - 2][1]}
                h3smoke={itemzh3[constraints.length - 2][3]}
                h3drink={itemzh3[constraints.length - 2][4]}
                h4pet={itemzh4[constraints.length - 2][2]}
                h4col={itemzh4[constraints.length - 2][0]}
                h4nat={itemzh4[constraints.length - 2][1]}
                h4smoke={itemzh4[constraints.length - 2][3]}
                h4drink={itemzh4[constraints.length - 2][4]}
                h5pet={
                  itemzh5[constraints.length - 2][2] === "---"
                    ? "pet(zebra"
                    : itemzh5[constraints.length - 2][2]
                }
                h5col={
                  itemzh5[constraints.length - 2][0] === "---"
                    ? "pet(zebra"
                    : itemzh5[constraints.length - 2][0]
                }
                h5nat={
                  itemzh5[constraints.length - 2][1] === "---"
                    ? "pet(zebra"
                    : itemzh5[constraints.length - 2][1]
                }
                h5smoke={
                  itemzh5[constraints.length - 2][3] === "---"
                    ? "pet(zebra"
                    : itemzh5[constraints.length - 2][3]
                }
                h5drink={
                  itemzh5[constraints.length - 2][4] === "---"
                    ? "pet(zebra"
                    : itemzh5[constraints.length - 2][4]
                }
              />
            ) : null}
          </div>
        </div>
      );
    }
  }
}

export default Simulation;

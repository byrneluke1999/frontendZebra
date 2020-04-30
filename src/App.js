import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import logo from "./images/zebra_clear.ico";

//navbar component - root of the app.
//react library with imported component to implement navbar
function App(props) {
  return (
    <div className="App container">
      {/*entire navbar encased in a container with the property enabling it to collapse like a dropdown menu */}
      <Navbar className="nav-color" fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {/*All links are naviagted to in this way. address followed by "/"
             */}
            <Link to="/" className="header">
              Home
            </Link>
            <img src={logo} alt="transparentZebra" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* nav items to the right of bar*/}
          <Nav pullRight>
            <LinkContainer to="/Simulation" className="hov">
              <NavItem>Simulation</NavItem>
            </LinkContainer>
            <LinkContainer to="/NotOptSimulation" className="hov">
              <NavItem>Non-optimal Simulation</NavItem>
            </LinkContainer>
            <LinkContainer to="/Contact" className="hov">
              <NavItem>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;

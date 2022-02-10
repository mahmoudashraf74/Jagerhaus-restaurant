import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SignInButton from "../../../Sign In/SignInButton";
import NavCartButton from "./NavCartButton";
import logo from "../../../../Assist/images/logo/Jägerhaus.jpg";

import "./Navs.css";
import DarkMode from "../../../../Dark/DarkMode";

const Navs = (props) => {
  return (
    <div className="NavBar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="links me-auto">
              <Nav.Link
                style={{ backgroundColor: "var(--main-color)" }}
                href="#home"
              >
                Home
              </Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <DarkMode />
              <NavCartButton onClick={props.onShowCart} />
              <SignInButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;

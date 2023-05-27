import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background-color: #ffffff;
`;

const BrandLink = styled(Navbar.Brand)`
  color: #bbb;
  padding: 1em;
  &:hover {
    color: white;
  }
`;

const NavLink = styled(Link)`
  color: #bbb;

  &:hover {
    color: #f4f4f4;
    text-decoration: none;
  }
`;

const NavItem = styled(Nav.Item)`
  /* Add your custom styles here */
  padding: 1em;
  &:hover {
    text-decoration: none;
  }
`;

const NavigationBar = () => (
  <NavBarContainer>
    <Navbar expand="lg">
      <BrandLink href="/">AI Family Storyteller</BrandLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavBarContainer>
);

export default NavigationBar;

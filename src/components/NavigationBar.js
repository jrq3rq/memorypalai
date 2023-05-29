import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  background-color: transparent;
`;

const BrandLink = styled(Navbar.Brand)`
  color: #000000;
  padding: 1em;
  &:hover {
    color: white;
  }
`;

const NavLink = styled(Link)`
  color: #000000;
  /* color: #bbb; */
  padding: 1rem;
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </NavBarContainer>
);

export default NavigationBar;

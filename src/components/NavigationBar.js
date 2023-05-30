import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ scrolled }) => (scrolled ? "#ffffff" : "transparent")};
  transition: background-color 0.3s ease;
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
  padding: 1rem;
  &:hover {
    color: #f4f4f4;
    text-decoration: none;
  }
`;

const NavItem = styled(Nav.Item)`
  padding: 1em;
  &:hover {
    text-decoration: none;
  }
`;

const CustomNavbarToggle = styled(Navbar.Toggle)`
  width: 36px; /* Width of the toggle button */
  height: 40px; /* Height of the toggle button */

  /* Example padding styles */
  padding: 4px 5px 5px 2px; /* Padding around the toggle button */

  & span {
    display: flex; /* Use flexbox for alignment */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: relative;
    /* Example line styles */
    &::before,
    &::after {
      content: "";
      width: auto; /* Width of the lines */
      display: block; /* Display as block elements */
    }

    /* Customize each line if needed */
  }

  /* Example hover styles */
  &:hover {
    background-color: #fff; /* Background color on hover */
    /* Add any other hover styles you want */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
      -2px -2px 4px rgba(255, 255, 255, 0.5); */

    /* Example transition styles */
    transition: background-color 0.3s ease; /* Transition effect for background color */
  }
`;

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      // Adjust the scroll threshold value as needed
      const scrollThreshold = 100;

      setScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let timeoutId;

    if (showNavbar) {
      timeoutId = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showNavbar]);

  const handleNavbarToggle = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <NavBarContainer scrolled={scrolled}>
      <Navbar expand="lg">
        <BrandLink href="/">AI Family Storyteller</BrandLink>
        <CustomNavbarToggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavbarToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={showNavbar}>
          <Nav className="ml-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarContainer>
  );
};

export default NavigationBar;

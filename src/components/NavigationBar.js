import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled, { css } from "styled-components";

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
  ${({ isActive }) => isActive && "background-color: #f4f4f4;"}
  &:hover {
    text-decoration: none;
    color: #000000;
  }
  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #f4f4f4; /* Background color when link is active */
    `}
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
    align-items: center; /* Center vertically */
    position: relative;

    /* Example line styles */
    &::before,
    &::after {
      content: "";
      width: 20px; /* Width of the lines */
      height: 30px; /* Height of the lines */
      display: block; /* Display as block elements */
    }

    /* Customize each line if needed */
    &::before {
      /* Styles for the top line */
    }

    &::after {
      /* Styles for the bottom line */
    }
  }

  /* Example hover styles */
  &:hover {
    background-color: #fff; /* Background color on hover */
    /* Add any other hover styles you want */

    /* Remove the click styles */
    outline: none; /* Remove the default focus outline */
    border: none; /* Remove the button border */
    transform: none; /* Remove any transform */
  }

  /* Remove the click styles */
  &:active,
  &:focus {
    outline: none; /* Remove the default focus outline */
    border: none; /* Remove the button border */
    transform: none; /* Remove any transform */
  }

  /* Example transition styles */
  transition: background-color 0.3s ease; /* Transition effect for background color */
`;

const NavigationBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showOutline, setShowOutline] = useState(false);

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
    setShowOutline(true);
    setTimeout(() => {
      setShowOutline(false);
    }, 5000); // Adjust the duration as needed
  };

  return (
    <NavBarContainer scrolled={scrolled}>
      <Navbar expand="lg">
        <BrandLink href="/">AI Family Storyteller</BrandLink>
        {/* <CustomNavbarToggle
          aria-controls="basic-navbar-nav"
          onClick={handleNavbarToggle}
        /> */}
        <CustomNavbarToggle
          onClick={handleNavbarToggle}
          style={{ outline: showOutline ? "0.5px solid #000" : "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav" in={showNavbar}>
          <Nav className="ml-auto">
            <NavLink to="/" isActive={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink to="/roadmap" isActive={location.pathname === "/roadmap"}>
              Roadmap
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarContainer>
  );
};

export default NavigationBar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled, { css } from "styled-components";

const NavBarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  /* background-color: ${({ scrolled }) =>
    scrolled ? "#ffffff" : "transparent"}; */
  transition: background-color 0.3s ease;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(15px);
  /* border: 1px solid #fff; */
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 20px;
  /* backdrop-filter: blur(10px); */
`;
const BrandLink = styled(Navbar.Brand)`
  color: #000000;
  padding: 1em;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  text-align: center; /* Align text center */
  &:hover {
    color: white;
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

  return (
    <NavBarContainer scrolled={scrolled}>
      <BrandLink href="/">MemoryPal v0.1 Beta</BrandLink>
    </NavBarContainer>
  );
};

export default NavigationBar;

import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FooterContainer = styled.div`
  /* Your existing styles */
  /* ... */

  /* Apply the transition effect */
  transition: opacity 0.5s ease, transform 0.5s ease;

  /* Add animation properties */
  &.slide-in {
    opacity: 1;
    transform: translateY(0%);
    animation: ${slideIn} 1s ease forwards;
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  animation: fade-in 1s ease-out forwards;
  /* background-color: #f4f4f4; */
  color: #333333;
  /* color: #f4f4f4; */
  padding: 10px;
  font-size: 0.8rem;
`;

const ParentSiteLink = styled.a`
  /* font-weight: 100; */
  font-style: italic;
  color: #333333;
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 0rem 0.2rem;

  &:hover {
    color: #45fe47;
    text-decoration: none;
  }
`;

const Footer2 = (className) => {
  return (
    <>
      <FooterContainer className={className}>
        <Footer>
          Custom 1 of 1s{" "}
          <FaDollarSign
            size={12}
            color="#ffffff"
            style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
          />{" "}
          {/* by
        <ParentSiteLink href="https://studiovoice2fly.com" target="_blank">
          Studiovoice2fly
        </ParentSiteLink> */}
        </Footer>
      </FooterContainer>
    </>
  );
};

export default Footer2;

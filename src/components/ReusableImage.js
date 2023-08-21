import React from "react";
import styled from "styled-components";
import Image1 from "../images/GarndpaSitting.png";
import Image2 from "../images/ReadingNewsPaper.png";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
`;

const StyledImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  width: auto;
  height: auto;
  margin: auto;
  /* width: 100%;
  height: 450px; */
  @media (min-width: 768px) {
    /* Add any additional styles for the breakpoint if needed */
  }
`;

const imageList = [
  { src: Image1, alt: "Image 1" },
  { src: Image2, alt: "Image 2" },
];

const ReusableImage = ({ imageNumber }) => {
  const selectedImage = imageList[imageNumber - 1] || imageList[0];

  return (
    <ImageContainer>
      <StyledImage src={selectedImage.src} alt={selectedImage.alt} />
    </ImageContainer>
  );
};

export default ReusableImage;

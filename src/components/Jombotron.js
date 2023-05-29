import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import React Icons

import imageData from "./ImageData"; // Update the path to your image data file

// Image paths
const images = [imageData[1], imageData[2], imageData[3]];

// Styled components
const JobotronContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px 16px;
  /* border-radius: 4px; */
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const LeftButton = styled(Button)`
  margin-right: auto;
`;

const RightButton = styled(Button)`
  margin-left: auto;
`;

const ArrowIcon = styled.span`
  margin-right: 6px;
`;

// Jobotron component
const Jobotron = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <JobotronContainer>
        <BackgroundImage image={images[currentImageIndex]} />
        <ButtonContainer>
          <LeftButton onClick={handlePreviousImage}>
            <ArrowIcon>
              <FaChevronLeft />
            </ArrowIcon>
          </LeftButton>
          <RightButton onClick={handleNextImage}>
            <ArrowIcon>
              <FaChevronRight />
            </ArrowIcon>
          </RightButton>
          {/* Add more buttons as needed */}
          {/* <Button onClick={() => handleImageChange(0)}>Button Text</Button> */}
          {/* Replace 0 with the desired index */}
        </ButtonContainer>
      </JobotronContainer>
    </>
  );
};

export default Jobotron;

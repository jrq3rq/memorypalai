import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 3rem;
  @media screen and (max-width: 768px) {
    margin: 1rem 2rem;
  }
`;

const Box = styled.div`
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: calc(50% - 1rem);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BlankPictureGallery = () => {
  return (
    <Container>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 1" />
      </Box>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 2" />
      </Box>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 3" />
      </Box>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 4" />
      </Box>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 5" />
      </Box>
      <Box>
        <Image src="https://via.placeholder.com/300" alt="Mockup 6" />
      </Box>
    </Container>
  );
};

export default BlankPictureGallery;

import React from "react";
import styled from "styled-components";
import BlankPictureGallery from "../components/BlankPictureGallery";

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
`;

const Home = () => (
  <>
    <HomeContainer>
      <Heading>Welcome!</Heading>
      <Paragraph>
        Drawing from its extensive personalized knowledge pools, FamiliAI
        narrates and recounts captivating stories, shares family traditions, and
        exemplifies the significance of heirlooms. These personalized narratives
        are tailored to your history, making family legacy come alive in new and
        engaging ways.
      </Paragraph>
      <Paragraph>
        Preserving Family Heritage for the Future with AI is an innovative
        solution that harnesses the power of artificial intelligence to
        safeguard and celebrate your family's rich history. Through advanced
        algorithms and intelligent technologies, our product enables you to
        uncover hidden gems, connect with your roots, and preserve cherished
        memories for future generations. Experience the transformative journey
        of preserving your family heritage with ease, efficiency, and a touch of
        technological marvel.
      </Paragraph>
    </HomeContainer>
    <BlankPictureGallery />
  </>
);

export default Home;

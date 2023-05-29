import React from "react";
import styled from "styled-components";
import BlankPictureGallery from "../components/BlankPictureGallery";
import Jobotron from "../components/Jombotron";
import DataUploadCard from "./Upload";

export const HomeContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fade-in 1s ease-out forwards;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;
`;

export const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  padding: 1rem;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  list-style-type: disc;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  /* font-size: 0.9rem; */
  color: #666;
`;

const Home = () => (
  <>
    {/* <Jobotron /> */}
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

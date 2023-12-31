import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlankPictureGallery from "../components/BlankPictureGallery";
import Jobotron from "../components/Jombotron";
import DataUploadCard, { BackgroundImage } from "./Upload";
import S3DownloadButtons from "./DownloadRepo";
import Footer2 from "../components/Footer";
import ReusableImage from "../components/ReusableImage";
import FormComponent from "../components/FormComponent";
import ImageUpload from "../components/UploadIMG";
import imageData from "../components/ImageData"; // Update the path to your image data file

const images = [imageData[1]];

export const HomeContainer = styled.div`
  height: auto;
  max-width: 800px;
  /* margin: 1rem 0rem 2rem 0rem; */
  margin-top: 0rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  border-radius: 8px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(90px);
  -webkit-backdrop-filter: blur(15px);
  /* border: 1px solid #fff; */
  border: 1.5px solid rgba(255, 255, 255, 0.18);
  /* box-shadow: 0 6px 0 rgba(0, 0, 0, 0.37); */
  @media screen and (max-width: 768px) {
    margin: 0px 20px 20px 20px;
  }
`;

const StyleBlock = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f4f4f4;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333333;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #000000;
  /* color: #333333; */
  /* color: #ffffff; */
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
  color: #000000;
  /* color: #666; */
`;

const buttons = [
  {
    label: "Download File 1",
    url: "https://github-templates.s3.amazonaws.com/memorypalai-master.zip",
  },
  {
    label: "Download File 2",
    url: "https://github-templates.s3.amazonaws.com/memorypalai-master.zip",
  },
  {
    label: "Download File 2",
    url: "https://github-templates.s3.amazonaws.com/memorypalai-master.zip",
  },
  // Add more button configurations here
];

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the scroll threshold as a percentage of the document height (e.g., 20%)
      const scrollThreshold = documentHeight * 0.2;

      // Toggle the showFooter state based on the scroll position
      setShowFooter(scrollPosition > scrollThreshold);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BackgroundImage image={images[0]} />
      {/* <ReusableImage imageNumber={1} />  */}
      <HomeContainer>
        {/* <Heading>Welcome!</Heading> */}
        <Paragraph>
          Drawing from its extensive personalized knowledge pools, MemoryPal
          narrates and recounts captivating stories, shares family traditions,
          and exemplifies the significance of heirlooms. These personalized
          narratives are tailored to your history, making family legacy come
          alive in new and engaging ways.
        </Paragraph>
        <Paragraph>
          Preserving Family Heritage for the Future with AI is an innovative
          solution that harnesses the power of artificial intelligence to
          safeguard and celebrate your family's rich history. Through advanced
          algorithms and intelligent technologies, our product enables you to
          uncover hidden gems, connect with your roots, and preserve cherished
          memories for future generations. Experience the transformative journey
          of preserving your family heritage with ease, efficiency, and a touch
          of technological marvel.
        </Paragraph>
        {/* <StyleBlock /> */}
        {/* <ImageUpload /> */}
        {/* <ReusableImage imageNumber={1} /> */}
      </HomeContainer>
      {/* <FormComponent /> */}
      {/* <ImageUpload /> */}
      {/* {showFooter && <Footer2 />} */}
      {/* <BlankPictureGallery /> */}
    </>
  );
};

export default Home;

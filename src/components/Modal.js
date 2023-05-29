import React from "react";
import styled from "styled-components";
import BlankPictureGallery from "../components/BlankPictureGallery";
import { Container } from "react-bootstrap";
import Jobotron from "../components/Jombotron";
import imageData from "../components/ImageData"; // Update the path to your image data file
import { HomeContainer, ListItem, Paragraph, Title } from "../pages/Home";

const images = [imageData[1]];

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  z-index: -999;

  /* &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  } */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto; /* Center the card on the page */
  background-color: #fff; /* White background */
  box-shadow: 0 0 2px 0 #ccc; /* Soft shadow */
  @media screen and (max-width: 480px) {
    width: auto;
    margin: 1rem;
    margin: 0 auto;
  }
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  width: 80%;
  border: 1px solid #ccc;
`;

const ContainerInputField = styled.div`
  margin-bottom: 16px;
  padding: 8px;
  width: 80%;
`;

const FileInput = styled.input`
  margin-bottom: 16px;
  width: 100%;
  border: 0px solid #ccc;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const UploadButton = styled.button`
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

const AdditionalButton = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #999;
  }
`;

const Modal = () => {
  const handleFileUpload = (e) => {
    // Handle file upload logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleAdditionalButtonClick = () => {
    // Handle additional button click logic here
  };

  return (
    <>
      <HomeContainer>
        <Title>Welcome to FamiliAI</Title>
        <Paragraph>
          Our roadmap outlines the key milestones and objectives for building
          FamiliAI, a powerful platform that revolutionizes family information
          management through the integration of cutting-edge technologies. By
          following this roadmap, we will create a seamless user experience with
          a wide range of features and robust data security measures.
        </Paragraph>
        {/* <Paragraph>
          The journey begins with crafting an inviting homepage that captivates
          users from the moment they arrive. We will develop a compelling
          welcome message and introduction, accompanied by sleek user interface
          elements for effortless login and sign-up options. Additionally, the
          homepage will serve as a showcase, highlighting the exceptional
          features and benefits of FamiliAI.
        </Paragraph> */}
        <ul>
          <ListItem>
            Homepage: The homepage will include a compelling welcome message and
            introduction, as well as user interface elements for login and
            sign-up options. The homepage will also showcase the features and
            benefits of FamiliAI.
          </ListItem>
        </ul>
        {/* <Paragraph>
          Ensuring a personalized experience, our application will collect
          essential user information such as age, gender, and specific
          family-related details to tailor the platform to individual needs.
          Implementing a secure and user-friendly password reset functionality
          will enhance account accessibility, while intuitive account management
          options will empower users to effortlessly customize their profiles.
        </Paragraph> */}
        <ul>
          <ListItem>
            User Authentication: The application will collect necessary user
            information, such as age, gender, and any specific family-related
            details that can enhance the user experience. The application will
            also implement a secure and user-friendly password reset
            functionality, as well as intuitive account management options.
          </ListItem>
        </ul>
        {/* <Paragraph>
          With a visually captivating and organized design, the chatbot
          dashboard will become the command center for users. It will feature
          essential components and functionalities, enabling the effortless
          creation of new chatbots. Key statistics and information displayed on
          chatbot cards will provide users with valuable insights into their
          chatbot's performance.
        </Paragraph> */}
        <ul>
          <ListItem>
            Chatbot Dashboard: The chatbot dashboard will be designed to be
            visually appealing and organized, and it will include essential
            components and functionalities for creating new chatbots, as well as
            key statistics and information on chatbot cards.
          </ListItem>
        </ul>

        {/* <Paragraph>
          Our user-friendly chatbot editor will empower users to shape
          conversational experiences with ease. They will be able to import,
          edit, and export training data effortlessly, fostering a dynamic and
          evolving chatbot. Integrating a powerful AI framework, such as
          TensorFlow or PyTorch, will harness natural language processing (NLP)
          capabilities to deliver exceptional responses.
        </Paragraph> */}
        <ul>
          <ListItem>
            Chatbot Editor: The chatbot editor will have a user-friendly
            interface for conversation design, and it will allow users to
            import, edit, and export training data for their chatbots. The
            chatbot editor will also integrate with a suitable AI framework,
            such as TensorFlow or PyTorch, for natural language processing (NLP)
            tasks.
          </ListItem>
        </ul>
        {/* <Paragraph>
          To ensure seamless storage and retrieval of chatbot data, we will
          establish a robust connection with Firestore. This integration will
          enable us to design a flexible data structure that includes
          user-specific collections and documents, allowing for efficient
          organization and retrieval of information. Leveraging Firestore's
          real-time capabilities, chatbot data will stay synchronized between
          the web app and Firestore in real time.
        </Paragraph> */}
        <ul>
          <ListItem>
            Firestore Integration: The application will establish a robust
            connection with Firestore for seamless storage and retrieval of
            chatbot data. The application will also design a data structure that
            allows for user-specific collections and documents in Firestore, and
            it will leverage Firestore's real-time capabilities to keep chatbot
            data synchronized between the web app and Firestore.
          </ListItem>
        </ul>
        {/* <Card>
          <Header>Upload Family Data</Header>
          <UploadForm onSubmit={handleSubmit}>
            <InputField type="text" placeholder="Document Title" />
            <InputField type="text" placeholder="Description" />
            <InputField type="text" placeholder="Tags" />
            <ContainerInputField>
              <FileInput type="file" onChange={handleFileUpload} />
            </ContainerInputField>
            <ButtonGroup>
              <UploadButton type="submit">Upload</UploadButton>
              <AdditionalButton onClick={handleAdditionalButtonClick}>
                Download
              </AdditionalButton>
            </ButtonGroup>
          </UploadForm>
        </Card> */}
        {/* <Paragraph>
          We prioritize the security and privacy of our users' data. By
          implementing stringent security rules within Firestore, we will
          guarantee that only authorized users can access, modify, and manage
          their chatbot data. Additionally, sensitive user data, including
          authentication credentials, will be safeguarded using
          industry-standard encryption techniques such as SSL/TLS.
        </Paragraph> */}
        <ul>
          <ListItem>
            Data Security: The application will implement security rules in
            Firestore to control access and ensure that only authorized users
            can read, write, and modify their own chatbot data. The application
            will also safeguard sensitive user data by applying encryption
            techniques, such as SSL/TLS.
          </ListItem>
        </ul>
        {/* <Paragraph>
          To ensure optimal performance and scalability, we will deploy FamiliAI
          on a suitable hosting platform like Firebase Hosting or Heroku. We
          will meticulously configure deployment settings and establish an HTTPS
          connection, ensuring secure and seamless communication between the web
          app and users' browsers.
        </Paragraph> */}
        <ul>
          <ListItem>
            Deployment and Hosting: The application will be deployed on a
            suitable hosting platform, such as Firebase Hosting or Heroku. The
            application will also be configured with appropriate deployment
            settings and an HTTPS connection.
          </ListItem>
        </ul>
      </HomeContainer>

      {/* <Jobotron /> */}
    </>
  );
};

export default Modal;

import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import backgroundImage from "./images/FamilyStoryteller.jpg";
import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";

const ChatbotBubble = styled.div`
  position: fixed;
  top: 20px; /* Adjust the top value as needed */
  right: 20px;
  /* background-color: #45fe47; */
  color: #333333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  animation: glowAnimation 2s infinite;
  @keyframes glowAnimation {
    0%,
    100% {
      background-color: #f6f6f6f6; /* Start and end with the darker color */
      transform: scale(1);
    }
    45%,
    55% {
      background-color: #f6f6f6f6; /* Transition to the lighter color */
      transform: scale(1.1);
    }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
`;

const CardContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px; /* limit container to 960px width */
  /* background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fade-in 1s ease-out forwards; */
  @media (max-width: 768px) {
    flex-direction: column;
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

  /* background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  animation: fade-in 1s ease-out forwards; */
  /* background-color: #f4f4f4; */
  color: #f4f4f4;
  padding: 10px;
  font-size: 0.8rem;
`;

const ParentSiteLink = styled.a`
  /* font-weight: 100; */
  font-style: italic;
  color: #f4f4f4;
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 0rem 0.2rem;

  &:hover {
    color: #45fe47;
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f4f4f4;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CustomButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 1em;
    letter-spacing: 0.2em;
    font-weight: 100;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */

    text-transform: uppercase;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: fade-in 1s ease-out forwards;
    padding: 14px 34px;
    border-radius: 4px;
    margin: 0rem 1rem;
    color: inherit;
    &:hover {
      color: #000000;
      background-color: #f4f4f4;
    }
    @media (max-width: 768px) {
      margin: 0.5rem 0rem;
      width: 100%;
    }
  }
`;

const ModalContainer2 = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

//
const ModalContainer = styled.div`
  /* background-color: white; */
  border-radius: 4px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  animation: fade-in 1s ease-out forwards;

  & > * {
    margin-bottom: 16px;
  }
`;

const ModalTitle = styled.div`
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 8px;
  text-align: center;
`;

const ModalTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 8px;
`;

const ModalButton = styled(Button)`
  && {
    color: #ffffff !important;
    margin-top: 1rem !important;
    width: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    animation: fade-in 1s ease-out forwards;
    padding: 14px 34px;
    border-radius: 4px;
    margin: 0rem 1rem;
    color: inherit;
    &:hover {
      color: #000000 !important;
      background-color: #f4f4f4;
    }
  }
`;

function Login() {
  const [state, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProfileData, setNewProfileData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateProfile = () => {
    // Use the newProfileData to create a new profile
    // Implement your logic here
    // You can access the profile data using newProfileData.name, newProfileData.email, newProfileData.password
  };

  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <LoginContainer>
        {/* <BackgroundOverlay /> */}
        <ButtonContainer>
          <CardContainer>
            <CustomButton variant="contained" onClick={signIn}>
              Sign In
            </CustomButton>
            {/* <CustomButton variant="contained" onClick={handleOpenModal}>
            Sign Up
          </CustomButton> */}
          </CardContainer>
        </ButtonContainer>
        <ChatbotBubble onClick={() => setShowModal((prev) => !prev)}>
          <FaSmile size={24} />
        </ChatbotBubble>

        {/* <ModalContainer2 showModal={showModal}>
          <ModalHeader>
            <CloseIcon onClick={closeModal} />
          </ModalHeader>

        </ModalContainer2> */}
        {/* <Modal open={modalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <ModalTitle>Create New Profile</ModalTitle>
            <ModalTextField
              name="name"
              label="Name"
              value={newProfileData.name}
              onChange={handleInputChange}
            />
            <ModalTextField
              name="email"
              label="Email"
              value={newProfileData.email}
              onChange={handleInputChange}
            />
            <ModalTextField
              name="password"
              label="Password"
              type="password"
              value={newProfileData.password}
              onChange={handleInputChange}
            />
            <ModalButton variant="contained" onClick={handleCreateProfile}>
              Create Profile
            </ModalButton>
          </ModalContainer>
        </Modal> */}
        <Footer>
          Sample Created with{" "}
          <FaHeart
            size={12}
            color="#ffffff"
            style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
          />{" "}
          by
          <ParentSiteLink href="https://studiovoice2fly.com" target="_blank">
            Studiovoice2fly
          </ParentSiteLink>
        </Footer>
      </LoginContainer>
    </>
  );
}

export default Login;

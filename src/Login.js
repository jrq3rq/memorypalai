import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import backgroundImage from "./images/FamilyStoryteller.jpg";
import GarndpaSitting from "./images/GarndpaSitting.png";
import Danilyuk from "./images/videos/pexels-pavel-danilyuk-4812264-3840x2160-30fps.mp4";
import pexelsLifeOnSuper from "./images/videos/pexels-life-on-super-2759444-1920x1080-18fps.mp4";

import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsFillChatHeartFill } from "react-icons/bs";

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

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

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
  color: #333333;
  /* color: #f4f4f4; */
  padding: 10px;
  font-size: 0.8rem;
`;

const Footer = styled.footer`
  font-weight: 100;
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
  /* color: #333333; */
  color: #f4f4f4;
  padding: 20px;
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const ParentSiteLink = styled.a`
  /* font-weight: 100; */
  font-style: italic;
  color: #f4f4f4;
  /* color: #f4f4f4; */
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
  /* background-image: url(${backgroundImage}); */
  background-size: cover;
  background-position: center;
`;

const HeroContainer = styled.div`
  /* background-color: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  /* z-index: 1; */
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        /* rgba(0, 0, 0, 0.2) 0%, */ rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    /* z-index: 2; */
  }
`;

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalImage = styled.img`
  width: 600px;
  height: auto;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

const ModalFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #333333;
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
  const [showModal, setShowModal] = useState(false);
  const [newProfileData, setNewProfileData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

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
      <HeroContainer>
        <VideoBg autoPlay loop muted playsInline preload="auto">
          <source src={Danilyuk} type="video/mp4" />
          {/* <source src={pexelsLifeOnSuper} type="video/mp4" /> */}
        </VideoBg>
        <LoginContainer>
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
            <FaUserCircle size={32} style={{ color: "#6F6055" }} />
          </ChatbotBubble>
          <ModalContainer2 showModal={showModal}>
            <ModalHeader>
              <CloseIcon onClick={closeModal} />
            </ModalHeader>
            <ModalCard>
              <ModalImage src={GarndpaSitting} alt="Card Image" />
              <ModalFooter>Under Construction!</ModalFooter>
            </ModalCard>
          </ModalContainer2>
        </LoginContainer>
      </HeroContainer>

      <Footer>
        AI Chat Template Sample Created with{" "}
        <FaHeart
          size={12}
          color="#f4f4f4"
          style={{ marginLeft: "0.3rem", marginRight: "0.3rem" }}
        />{" "}
        by
        <ParentSiteLink href="https://studiovoice2fly.com" target="_blank">
          Studiovoice2fly
        </ParentSiteLink>
      </Footer>
    </>
  );
}

export default Login;

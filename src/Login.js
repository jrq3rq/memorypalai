import React, { useState, useEffect } from "react";
import { Button, Modal, TextField } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import backgroundImage from "./images/FamilyStoryteller.jpg";
import GarndpaSitting from "./images/GarndpaSitting.png";
import Danilyuk from "./images/videos/pexels-pavel-danilyuk-4812264-3840x2160-30fps.mp4";
import pexelsLifeOnSuper from "./images/videos/pexels-life-on-super-2759444-1920x1080-18fps.mp4";
import cherryBlossomMomDaughter from "./images/videos/cherryBlossomMomDaughter.mp4";
import tulipField from "./images/videos/tulipField.mp4";
import tulipMedow from "./images/videos/tulipMedow.mp4";
import DinnerPartyFam from "./images/videos/DinnerPartyFam.mp4";

import { FaHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillRobot } from "react-icons/ai";
import { FaSmile } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsFillChatHeartFill } from "react-icons/bs";

const LeftSideContainer = styled.div`
  position: relative;
  width: 70vw;
  height: 100vh;
  @media (max-width: 768px) {
    height: 70vh;
    width: 100vw;
  }
`;

const goldYellow = "#FFD830";
const orangeYellow = "#FFB84D";
const peach = "#FF9770";
const coral = "#EF6F6C";

const ColorTransitionAnimation = keyframes`
  0% { color: ${goldYellow}; background-color: ${goldYellow}; }
  25% { color: ${orangeYellow}; background-color: ${orangeYellow}; }
  50% { color: ${peach}; background-color: ${peach}; }
  75% { color: ${coral}; background-color: ${coral}; }
  100% { color: ${goldYellow}; background-color: ${goldYellow}; }
`;
const ColorTransitionAnimation2 = keyframes`
  0% { color: ${goldYellow}; }
  25% { color: ${orangeYellow}; }
  50% { color: ${peach}; }
  75% { color: ${coral}; }
  100% { color: ${goldYellow}; }
`;

const Icon = styled(FaHeart)`
  animation: ${ColorTransitionAnimation2} 20s linear infinite;
  margin-right: 5px;
  margin-left: 5px;
  /* color: #766f51; */
  @media (max-width: 768px) {
    /* animation: none; */
    /* filter: hue-rotate(0deg); */
  }
`;

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 30px;
  width: 30vw;
  height: 100vh;
  animation: ${ColorTransitionAnimation} 20s linear infinite;
  /* background-color: #ffffff; */
  /* background-color: #ffe3bf; */
  align-items: start;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 30vh;
  }
`;

const TransitionAnimation = keyframes`
  0% { background-color: #FFD830; }
  25% { background-color: #FFB84D; }
  50% { background-color: #FF9770; }
  75% { background-color: #EF6F6C; }
  100% { background-color: #FFD830; }
`;

const TransitionContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  animation: ${TransitionAnimation} 10s linear infinite;
`;

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -100;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: "Dancing Script", cursive;
  color: #000000;
  font-weight: 400;
  font-size: 2.5rem;
  background-color: transparent;
  text-align: left;
  padding: 10px 10px 0px 0px;
  letter-spacing: 0.1em;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    /* color: #988677; */
  }
  &:hover::after {
    content: "";
    display: block;
    width: 100%;
    background-color: #000;
  }
`;

const Subheader = styled.div`
  color: #000;
  padding: 0px 0px 0px 2px;
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  background-color: transparent;
  font-family: "Dancing Script", cursive;
  text-align: left;
  max-width: 550px;
  @media (max-width: 768px) {
    font-size: 1em;
    text-align: center;
    align-items: center;
    max-width: 350px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #f4f4f4;
  background-color: purple;
`;

const CardContainer = styled.div`
  border-radius: 4px;
  padding: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
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
    background-color: pink;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    text-transform: uppercase;
    padding: 8px 44px;
    border-radius: 4px;
    margin: 20px 10px 10px 0px;
    color: #000;
    @media (max-width: 768px) {
      width: auto;
      margin: 20px;
    }
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  display: block;
`;

const HeroContainer = styled.div`
  display: flex;
  max-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Footer = styled.footer`
  font-weight: 100;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  align-items: center;
  color: #766f51;
  padding: 20px;
  font-size: 0.7rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
    color: #766f51;
  }
`;

const ParentSiteLink = styled.a`
  font-style: italic;
  color: #766f51;
  text-decoration: none;
  transition: color 0.3s ease;
  margin: 0rem 0.2rem;
  font-size: 0.7rem;
  &:hover {
    color: #45fe47;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center;
`;

const ChatbotBubble = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  /* animation: ${ColorTransitionAnimation} 10s linear infinite; */
  border: 3px solid #212529;
  &:hover {
    color: #ffffff;
    border: 3px dotted #ffffff;
  }
  animation: glowAnimation 2s infinite;
  @keyframes glowAnimation {
    0%,
    100% {
      transform: scale(1);
    }
    45%,
    55% {
      transform: scale(1.1);
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  display: ${(props) => (props.showModal ? "block" : "none")};
  @media (max-width: 768px) {
    width: auto;
    height: auto;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;
    /* height: 400px; */
  }
`;

const ModalCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  justify-content: center;
  align-items: center; /* Add this line */
  background-position: center; /* Add this line */
  background-repeat: no-repeat; /* Add this line */
  background-size: cover; /* Add this line */
  @media (max-width: 768px) {
    width: 350px;
    height: 400px;
    /* width: 350px;
    height: 100px; */
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  z-index: 9999;
`;

const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  z-index: 999;
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

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  flex-grow: 1;
  padding: 20px;
  margin-bottom: 120px;
`;

const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  max-width: 80%;
  align-self: ${(props) => (props.isMine ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.isMine ? "#2979FF" : "#F5F5F5")};
  color: ${(props) => (props.isMine ? "#fff" : "#000")};
  border-radius: 20px;
  padding: 10px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f4f4f4;
  border-top: 0.8px solid #ccc;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const TextArea = styled.textarea`
  height: 50px;
  width: 20vw;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 10px 0px 10px 40px;
  @media screen and (max-width: 768px) {
    width: 80vw;
    margin: 10px 0px 10px 0px;
  }
`;

const SubmitButton = styled.button`
  background-color: #2979ff;
  color: #fff;
  border: none;
  width: 100%;
  margin: 10px 10px 10px 10px;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: 0px 0px 0px 0px;
    border-radius: 0px 0px 5px 5px;
  }
`;

function Login({ transitionSpeed }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const [showModal, setShowModal] = useState(false);
  const [newProfileData, setNewProfileData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const animationDuration = `${transitionSpeed}s`;

  const CustomTransitionContainer = styled(TransitionContainer)`
    animation-duration: ${animationDuration};
  `;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessages([
          ...messages,
          { text: message, isMine: true },
          { text: data.message, isMine: false },
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setMessage("");
  };

  return (
    <>
      <HeroContainer>
        <LeftSideContainer>
          <VideoBg autoPlay loop muted playsInline preload="auto">
            <source src={DinnerPartyFam} type="video/mp4" />
          </VideoBg>
          <Footer>
            AI Chat Template Sample Created with <Icon size={12} />
            by
            <ParentSiteLink href="https://studiovoice2fly.com" target="_blank">
              Studiovoice2fly
            </ParentSiteLink>
          </Footer>
        </LeftSideContainer>
        <ChatbotBubble onClick={() => setShowModal((prev) => !prev)}>
          <FaUserCircle size={32} />
        </ChatbotBubble>
        <ModalContainer
          showModal={showModal}
          onClick={() => setShowModal(false)}
        >
          {/* <ModalHeader>
            <CloseIcon />
          </ModalHeader> */}
          <ModalCard>
            <ModalImage src={GarndpaSitting} alt="Card Image" />
          </ModalCard>
        </ModalContainer>
        <RightSideContainer>
          <Header onClick={signIn}>OneFamiliAI</Header>
          {/* <CustomTransitionContainer /> */}
          <Subheader>
            {/* Unlock the Power of Memories: Empowering Future Generations */}
            {/* Preserving Family Heritage: Uniting Generations with AI */}
            {/* Uniting Generations through AI-powered Memories and story telling */}
            Preserving Family Heritage Through AI-Powered Memories and
            Storytelling
          </Subheader>
        </RightSideContainer>
      </HeroContainer>
    </>
  );
}

export default Login;

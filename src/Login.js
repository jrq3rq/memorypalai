import React, { useState } from "react";
import { Button, Modal, TextField } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import backgroundImage from "./images/FamilyStoryteller.jpg";

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffffff;
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
    font-weight: bold;
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
    <LoginContainer>
      <BackgroundOverlay />
      <ButtonContainer>
        <CardContainer>
          <CustomButton variant="contained" onClick={signIn}>
            Sign In
          </CustomButton>
          <CustomButton variant="contained" onClick={handleOpenModal}>
            Sign Up
          </CustomButton>
        </CardContainer>
      </ButtonContainer>
      <Modal open={modalOpen} onClose={handleCloseModal}>
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
      </Modal>
    </LoginContainer>
  );
}

export default Login;

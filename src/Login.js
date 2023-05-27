import React from "react";
import { Button } from "@material-ui/core";
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
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  /* box-shadow: 0 8px 0 rgba(0, 0, 0, 0.37); */
  animation: fade-in 1s ease-out forwards;

  /* @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(100%) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0%) scale(1);
    }
  } */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 1rem 2rem; */
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
  /* Add any other background-related styles you want */
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* Set the desired background overlay color and opacity */
`;

const CustomButton = styled.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    /* width: 200px; */
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
    /* box-shadow: 0 8px 0 rgba(0, 0, 0, 0.37); */
    animation: fade-in 1s ease-out forwards;
    /* Add any other button styles you want */
    /* color: #ffffff; */
    padding: 14px 34px 14px 34px;
    border-radius: 4px 4px 4px 4px;
    color: inherit; /* Add this line */
    &:hover {
      color: #000000;
      background-color: #f4f4f4;
    }
  }
`;

function Login() {
  const [state, dispatch] = useStateValue();

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
      {/* <CardContainer> */}
      <ButtonContainer>
        <CustomButton variant="contained" onClick={signIn}>
          Sign In
        </CustomButton>
        {/* <CustomButton variant="contained" onClick={signIn}>
            Sign Up
          </CustomButton> */}
      </ButtonContainer>
      {/* </CardContainer> */}
    </LoginContainer>
  );
}

export default Login;

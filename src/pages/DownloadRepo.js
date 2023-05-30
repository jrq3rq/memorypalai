import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#45FE47"};
  color: ${(props) => props.textColor || "#000000"};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  margin: 1rem 0.5rem;
  cursor: pointer;
`;

const S3DownloadButtons = ({ buttons }) => {
  const handleDownload = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {buttons.map((button, index) => (
        <Button key={index} onClick={() => handleDownload(button.url)}>
          {button.label}
        </Button>
      ))}
    </>
  );
};

export default S3DownloadButtons;

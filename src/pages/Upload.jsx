import React from "react";
import styled from "styled-components";
import BlankPictureGallery from "../components/BlankPictureGallery";

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
  margin: 0 auto; /* Center the card on the page */
  background-color: #fff; /* White background */
  box-shadow: 0 0 2px 0 #ccc; /* Soft shadow */
  @media screen and (max-width: 480px) {
    width: auto;
    margin: 1rem;
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

const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #000000;
  padding: 1rem;
`;

const DataUploadCard = () => {
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
      <Card>
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
      </Card>
    </>
  );
};

export default DataUploadCard;

import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ClearButton = styled(Button)`
  background-color: #ea4335;
`;

const FormComponent = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend or update state)
    // You can access the name, description, and image variables here to work with the form data
    // Reset form state after submission if needed
    setName("");
    setDescription("");
    setImage(null);
  };

  const handleClear = () => {
    setName("");
    setDescription("");
    setImage(null);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
        />
        <Input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          required
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <ButtonContainer>
          <Button type="submit">Upload</Button>
          <ClearButton type="button" onClick={handleClear}>
            Clear
          </ClearButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default FormComponent;

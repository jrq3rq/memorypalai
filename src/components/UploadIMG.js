import React, { useState } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 0px 0px 0px;
  background-color: pink;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 10px; */
  width: calc(100% / 5 - 10px);
  @media (max-width: 1024px) {
    width: calc(100% / 3 - 10px);
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ImageInfo = styled.div`
  text-align: center;
`;

const Card = styled.div`
  background-color: pink;
  border-radius: 10px;
  padding: 10px;
`;

const FormContainer = styled.div`
  margin: 20px;
`;

const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const ImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const newImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      {" "}
      <GalleryContainer>
        <FormContainer>
          <input type="file" multiple onChange={handleImageUpload} />
        </FormContainer>
      </GalleryContainer>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Card>
              <Image src={URL.createObjectURL(image)} alt="Uploaded" />
              <ImageInfo>
                <p>Image Info</p>
                <p>Additional Text</p>
              </ImageInfo>
              <DeleteButton onClick={() => handleDeleteImage(index)}>
                Delete
              </DeleteButton>
            </Card>
          </ImageContainer>
        ))}
      </GalleryContainer>
    </>
  );
};

export default ImageUpload;

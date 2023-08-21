import React, { useState } from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: white;
  border-radius: 10px;
  padding: 10px;
`;

const FormContainer = styled.div`
  margin-bottom: 20px;
`;

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setImages((prevImages) => [
      ...prevImages,
      {
        src: "",
        name: value,
        description: "",
      },
    ]);
  };

  const [newImage, setNewImage] = useState({
    src: "",
    name: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setImages((prevImages) => [
      ...prevImages,
      {
        ...newImage,
      },
    ]);
    setNewImage({ src: "", name: "", description: "" });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setNewImage((prevImage) => ({ ...prevImage, src: reader.result }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <input
            type="text"
            name="name"
            value={newImage.name}
            onChange={handleInputChange}
            placeholder="Image Name"
            required
          />
          <input
            type="text"
            name="description"
            value={newImage.description}
            onChange={(e) =>
              setNewImage((prevImage) => ({
                ...prevImage,
                description: e.target.value,
              }))
            }
            placeholder="Image Description"
            required
          />
          <button type="submit">Upload Data</button>
        </form>
      </FormContainer>

      <GalleryContainer>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Card>
              <Image
                src={image.src}
                alt={image.name}
                onClick={() => openModal(image)}
              />
              <button onClick={() => deleteImage(index)}>Delete</button>
              <ImageInfo>
                <h3>{image.name}</h3>
                <p>{image.description}</p>
              </ImageInfo>
            </Card>
          </ImageContainer>
        ))}
      </GalleryContainer>

      {selectedImage && (
        <div onClick={closeModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <h2>{selectedImage.name}</h2>
            <Image src={selectedImage.src} alt={selectedImage.name} />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;

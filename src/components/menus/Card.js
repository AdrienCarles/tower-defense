import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  left: ${props => props.left || 'auto'};
  top: ${props => props.top || 'auto'};
  overflow: hidden;
  display: flex;
  transform: translateX(${props => props.translateX || 0}%);
  transition: transform 0.5s ease-in-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = ({ width, height, left, top, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <CardContainer 
      width={width ? `${width}%` : 'auto'} 
      height={height ? `${height}%` : 'auto'} 
      left={left ? `${left}%` : 'auto'} 
      top={top ? `${top}%` : 'auto'}
      translateX={-currentImageIndex * 100}
    >
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Slide ${index}`} />
      ))}
      <button onClick={prevImage}>Précédent</button>
      <button onClick={nextImage}>Suivant</button>
    </CardContainer>
  );
};

export default Card;
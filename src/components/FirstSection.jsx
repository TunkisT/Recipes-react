import React from 'react';
import styled from 'styled-components';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const Image = styled.img`
  align-items: center;
  height: 200px;
  width: 100%;
`;
const LogoText = styled.h1`
  position: absolute;
  bottom: 60px;
  color: white;
`;

const FirstSection = () => {
  return (
    <ImageDiv>
      <Image
        src='https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300'
        alt='section logo'
      />
      <LogoText>Recipes</LogoText>
    </ImageDiv>
  );
};

export default FirstSection;

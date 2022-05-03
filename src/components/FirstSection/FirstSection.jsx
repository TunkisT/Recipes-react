import React from 'react';
import * as S from './FirstSection.style';

const FirstSection = () => {
  return (
    <S.ImageDiv>
      <S.Image
        src='https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300'
        alt='section logo'
      />
      <S.LogoText>Recipes</S.LogoText>
    </S.ImageDiv>
  );
};

export default FirstSection;

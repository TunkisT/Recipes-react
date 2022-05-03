import React from 'react';
import * as S from './Navigation.style';

function Navigation() {
  return (
    <S.NavDiv>
      <nav>
        <S.Link href='#'>Home</S.Link>
        <S.Link href='#'>Recipes</S.Link>
      </nav>
      <S.Button>+Submit Recipe</S.Button>
    </S.NavDiv>
  );
}

export default Navigation;

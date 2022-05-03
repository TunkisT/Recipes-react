import React from 'react';
import * as S from './Card.style';

function Card({ data }) {
  return (
    <S.CardDiv>
      <S.Image src={data.img} alt='food img' />
      <p>{data.title}</p>
      <h2>{data.fullTitle}</h2>
      <p>{data.body}</p>
    </S.CardDiv>
  );
}

export default Card;

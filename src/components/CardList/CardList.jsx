import React from 'react';
import Card from '../Card/Card';
import * as S from './CardList.style';

const data = [
  {
    id: 1,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
  {
    id: 2,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
  {
    id: 3,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
  {
    id: 4,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
  {
    id: 5,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
  {
    id: 6,
    img: 'https://static01.nyt.com/images/2020/02/06/dining/aw-bok-choy-fried-rice/aw-bok-choy-fried-rice-articleLarge.jpg',
    title: 'Fried Rice',
    fullTitle: 'Gingery Fried Rice With Bok Choy',
    body: 'An ideal recipe for reducing waste in the kitchen, fried rice is a great way to use up spare tofu, leftover meats or wobbly vegetables.',
  },
];

function CardList() {
  return (
    <S.CardsDiv>
      {data.map((obj) => (
        <Card key={obj.id} data={obj} />
      ))}
    </S.CardsDiv>
  );
}

export default CardList;

import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../components';
import CardList from '../components/CardList/CardList';
import FirstSection from '../components/FirstSection/FirstSection';
import Input from '../components/Input/Input';

const Image = styled.img`
  width: 130px;
`;
const Head = styled.header`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

function Main() {
  return (
    <div>
      <Head>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/ZDF_HD_Logo.svg/800px-ZDF_HD_Logo.svg.png?20101229135942'
          alt='page logo'
        />
      </Head>
      <Navigation />
      <FirstSection />
      <Input />
      <CardList />
    </div>
  );
}

export default Main;

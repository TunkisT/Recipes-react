import React from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  align-items: baseline;
  border-top: 2px solid #ede4e1
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 10px;
  font-size: 20px;
`;
const StyledButton = styled.button`
  color: white;
  background-color: red;
  border: none;
  border-radius: 2em;
  width: 10em;
  height: 2.5em;
  font-size: 15px;
`;

function Navigation() {
  return (
    <NavDiv>
      <nav>
        <StyledLink href='#'>Home</StyledLink>
        <StyledLink href='#'>Recipes</StyledLink>
      </nav>
      <StyledButton>+Submit Recipe</StyledButton>
    </NavDiv>
  );
}

export default Navigation;

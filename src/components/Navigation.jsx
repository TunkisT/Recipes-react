import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: red;
`;

function Navigation() {
  return (
    <div>
      <nav>
        <StyledLink>Home</StyledLink>
        <StyledLink>Recipes</StyledLink>
      </nav>
      
    </div>
  );
}

export default Navigation;

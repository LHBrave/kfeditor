import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';

const Container = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  vertical-align: middle;
  height: 3rem;
  margin-right: 1rem;
  padding: 0 calc(1rem + 1px);
  box-sizing: border-box;
  overflow: hidden;
  text-decoration: none;
`;

const LogoContainer = styled.div`
  position: relative,
  display: flex
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  margin-left: calc(1rem + 1px);
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
`;

function Logo() {
  return (
    <Container>
      <LogoContainer>
        <Icon width={30} height={30}/>
      </LogoContainer>
      <Title>Kfeditor</Title>
    </Container>
  )
}

export default Logo;
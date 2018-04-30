import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Logo from './Logo';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  height: 3rem;
  font-weight: 400;
  flex: 0 0 3rem;
  width: 100%;
  box-sizing: border-box;
  background: rgb(28,32,34);
`;

const Left = styled.div`
  display: flex;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

function Header() {
  return (
    <Container>
      <Left>
        <Logo/>
      </Left>
    </Container>
  )
}

export default inject()(observer(Header));
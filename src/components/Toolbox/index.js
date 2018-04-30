import React from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';

import Files from './Files';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #24282A;
  height: 100%;
  width: 100%;
  overflow-y: overlay;
  overflow-x: auto;
  color: white;
`;

function Toolbox() {
  return (
    <Container>
      <Files root="Kfeditor"/>
    </Container>
  )
}

export default inject('store')(observer(Toolbox));
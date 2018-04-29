import React from 'react';
import { Container, Title } from './elements';
import LogoIcon from '../../LogoIcon';

export default () => (
  <Container id="logo" href="/">
    <div style={{position: 'relative', display: 'flex'}}>
      <LogoIcon title="CodeSandbox" width={30} height={30}/>
    </div>
    <Title>Kfeditor</Title>
  </Container>
);
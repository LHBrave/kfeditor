import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Left, Right } from './elements';
import Logo from './Logo';

const Header = () => {
  return (
    <Container>
      <Left>
        <Logo/>
      </Left>
    </Container>
  )
};

export default inject()(observer(Header));
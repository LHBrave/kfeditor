import React from 'react';
import { inject, observer } from 'mobx-react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from './HTML5BackendWithFolderSupport';


import { Container, ItemTitle } from './elements';
import Files from './Files';

function ToolBox({signals, store}) {
  return (
    <Container>
      <ItemTitle>Docker安装教程</ItemTitle>
      <div style={{flex: 1, overflowY: 'auto'}}>
        <Files/>
      </div>
    </Container>
  )
}

export default inject('signals', 'store')(
  DragDropContext(HTML5Backend)(observer(ToolBox))
);
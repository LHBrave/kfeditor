import React from 'react';
import { inject, observer } from 'mobx-react';

import ToolBoxItem from '../ToolBoxItem';
import DirectoryEntry from './DirectoryEntry';

class Files extends React.Component {
  render() {
    return (
      <ToolBoxItem title="文件">
        {/*<DirectoryEntry/>*/}
      </ToolBoxItem>
    )
  }
}

export default inject('signals', 'store')(observer(Files));
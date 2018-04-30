import React, { Component } from 'react';
import SplitPane from 'react-split-pane';

import './App.css';
import Header from 'components/Header';
import Toolbox from 'components/Toolbox';
import Editor from "components/Editor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SplitPane
          split="vertical"
          defaultSize={14 * 14}
        >
          <Toolbox/>
          <Editor></Editor>
        </SplitPane>
      </div>
    );
  }
}

export default App;

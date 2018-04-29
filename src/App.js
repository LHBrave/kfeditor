import React, { Component } from 'react';
// import logo from './logo.svg';
import SplitPane from 'react-split-pane';
import { Provider } from 'mobx-react';
import { DragDropContext } from 'react-dnd';

import { Controller } from '@cerebral/mobx-state-tree';
import store from './store';


import './App.css';
import Header from './components/Header';
import ToolBox from './components/ToolBox';
import controller from './controller';

var c = Controller(store);

class App extends Component {
  render() {
    return (
      <Provider {...c.provide()}>
        <div className="App">
          <Header/>
          <SplitPane
            split="vertical"
            defaultSize={16 * 16}
          >
            <ToolBox/>
            <div>123</div>
          </SplitPane>
        </div>
      </Provider>
    );
  }
}

export default App;

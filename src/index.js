import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import controller from './controller';
import {Provider} from 'mobx-react';

ReactDOM.render(
  <Provider {...controller.provide()}>
    <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

import React, { Component } from 'react';
import {Provider} from 'react-redux';

import store from './Store/index';
import Home  from "./Component/index";

class App extends Component {
  render() {
    return (
      <div>
      <Provider store={store}>
        <Home />
      </Provider>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Provider } from 'react-redux';
import {store } from './redux/reducers';

import Counter from './components/counter';
import Username from './components/username';


// provider object nous laisse envoyer notre store partout
// Le store contient les states issues des reducers
class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Counter al="kkk"/>
          <Username/>
        </div>
      </Provider>
    );
  }
}

export default App;

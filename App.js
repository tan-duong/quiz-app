import React from 'react';
import MainScreen from './screens/MainScreen';
import {Provider} from 'react-redux'
import store from './store/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <MainScreen/>
      </Provider>
     
    );
  }
}


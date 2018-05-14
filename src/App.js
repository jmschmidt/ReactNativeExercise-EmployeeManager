import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyCzXQDboA2mho3jQRbHgYldE1ejDzZ4Qx0',
      authDomain: 'manager-29c0c.firebaseapp.com',
      databaseURL: 'https://manager-29c0c.firebaseio.com',
      projectId: 'manager-29c0c',
      storageBucket: 'manager-29c0c.appspot.com',
      messagingSenderId: '708643426364'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
// import { db } from './firebase/firebaseConfig';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';



function SuperApp() {


  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default SuperApp;

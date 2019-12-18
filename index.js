/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/components/login/login.js'
import {name as appName} from './app.json';
import React from 'react';
import { Provider } from 'react-redux';
//import configureStore from './ios'
import configureStore from './store/configureStore.js'


const store = configureStore()

const RNSpotify = () => (
  <Provider store = { store }>
    <Login />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNSpotify);

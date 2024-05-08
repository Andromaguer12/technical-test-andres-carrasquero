/**
 * @format
 */

import React from 'react';
import Router from './src/screens/Router';
import {StatusBar} from 'react-native';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/services/redux/store';
import {NavigationContainer} from '@react-navigation/native';

function Main() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);

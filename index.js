/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import configuredStore from './src/store/store';
import { name as appName } from './app.json';

const RNRedux = () => (
  <Provider store={configuredStore()}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);

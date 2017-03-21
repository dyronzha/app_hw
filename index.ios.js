import React, { Component } from 'react';
import {
  AppRegistry, 
  View,
  Text 
} from 'react-native';
import Header from './header';

//creat a component
const App = () => <Header />

// Note: test renderer must be required after react-native.
AppRegistry.registerComponent('HelloWorld', () => App);

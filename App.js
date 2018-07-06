import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen.js'
import IntroScreen from './screens/IntroScreen.js'
import CreditsScreen from './screens/CreditsScreen.js';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Intro: IntroScreen,
    Credits: CreditsScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFC02D'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

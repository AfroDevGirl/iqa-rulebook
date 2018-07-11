import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen.js'
import IntroScreen from './screens/IntroScreen'
import CreditsScreen from './screens/CreditsScreen';
import AboutScreen from './screens/AboutScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Intro: IntroScreen,
    Credits: CreditsScreen,
    About: AboutScreen
  },
  {
    initialRouteName: 'About',
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

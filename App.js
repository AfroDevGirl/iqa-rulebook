import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import RulesScreen from './screens/RulesScreen'

const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Rules: RulesScreen
  },
  {
    initialRouteName: 'Home',
    order: ['Home', 'Rules'],
    tabBarOptions: {
      activeBackgroundColor: '#F9B004',
      inactiveBackgroundColor: '#FFC02D',
      labelStyle: {
        fontSize: 14,
        padding: 12,
        color: '#000000',
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

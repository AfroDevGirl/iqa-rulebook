import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import OverviewScreen from './OverviewScreen'

class RulesScreenView extends React.Component {
  render () {
    return (
      <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
        <Text>These are rules</Text>
        <Button title='Overview' onPress={() => this.props.navigation.navigate('Overview')} />
      </View>
    )
  }
}

const RulesScreen = createStackNavigator(
  {
    Rules: { screen: RulesScreenView },
    Overview: OverviewScreen
  },
  {
    initialRouteName: 'Rules'
  }
)

export default RulesScreen

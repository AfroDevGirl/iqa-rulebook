import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export class HomeScreenView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the International Quidditch Association rulebook! Click on one of the following buttons to
          learn more about the rules of quidditch, who has contributed to this rulebook over the years, and how the
          IQA serves its constituents
        </Text>
        <Button title='Introduction to Quidditch' onPress={() => this.props.navigation.navigate('Intro')} />
        <Button title='Contributors' onPress={() => this.props.navigation.navigate('Credits')} />
        <Button title='About the IQA' onPress={() => this.props.navigation.navigate('About')} />
      </View>
    );
  }
}

const HomeScreen = createStackNavigator(
  {
    Home: {
      screen: HomeScreenView
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerTitle: 'Home Screen',
      drawerLabel: 'Home Drawer',
      headerRight: (
        <Button onPress={() => navigation.goBack()} title='Back To Home' />
      )
    })
  }
)

export default HomeScreen

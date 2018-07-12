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

class HomeScreenView extends React.Component {
  // static navigationOptions = {
  //   title: 'Home',
  //   headerRight: (
  //     <Button
  //       onPress={() => alert('This is a button!')}
  //       title='Nav'
  //     />
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the IQA rulebook!</Text>
        <Button title='Credits' onPress={() => this.props.navigation.navigate('Credits')} />
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
      drawerLabel: 'Home Drawer'
    })
  }
)

export default HomeScreen

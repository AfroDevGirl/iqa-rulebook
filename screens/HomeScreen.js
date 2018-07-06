import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title='Nav'
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the IQA rulebook!</Text>
        <Button title='Credits' onPress={() => this.props.navigation.navigate('Credits')} />
      </View>
    );
  }
}

export default HomeScreen

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Intro'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is where the introduction would go</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default IntroScreen

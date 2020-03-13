import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import IntroScreen from '../IntroScreen'
import CreditsScreen from '../CreditsScreen'
import AboutScreen from '../AboutScreen'
import Paragraph from '../../components/Paragraph.js'
import mainParagraph from './data.js'

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
        <Paragraph innerText={mainParagraph} />
        <Button title='Introduction to Quidditch' onPress={() => this.props.navigation.navigate('Intro')} />
        <Button title='Contributors' onPress={() => this.props.navigation.navigate('Credits')} />
        <Button title='About the IQA' onPress={() => this.props.navigation.navigate('About')} />
      </View>
    );
  }
}

const HomeScreen = createStackNavigator(
  {
    Home: { screen: HomeScreenView },
    Intro: IntroScreen,
    Credits: CreditsScreen,
    About: AboutScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Home',
      headerMode: 'screen'
    }),
    order: []
  }
)

export default HomeScreen

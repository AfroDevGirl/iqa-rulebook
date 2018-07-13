import React from 'react'
import { StyleSheet, ScrollView, Text, Button } from 'react-native'
import Paragraph from '../../components/Paragraph.js'
import SectionHeader from '../../components/SectionHeader.js'
import introDetails from './data.js'
import { createStackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20
  },
})

export class IntroScreenView extends React.Component {
  renderIntroParagraphs = (paragraph, index) => {
    return <Paragraph key={`paragraph-${index}`} innerText={paragraph} />
  }

  render() {
    return (
      <ScrollView
        alwaysBounceVertical={true}
        contentContainerStyle={styles.container}>
        <SectionHeader innerText={'Introduction'} />
        {introDetails.map(this.renderIntroParagraphs)}
      </ScrollView>
    )
  }
}

const IntroScreen = createStackNavigator(
  {
    Intro: {
      screen: IntroScreenView
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Intro',
      headerMode: 'screen',
      headerTitle: 'Intro Screen',
      drawerLabel: 'Intro Drawer',
      headerRight: (
        <Button onPress={() => navigation.navigate('Home')} title='Back To Home' />
      )
    })
  }
)

export default IntroScreen

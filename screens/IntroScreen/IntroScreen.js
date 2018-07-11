import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import Paragraph from '../../components/Paragraph.js'
import introDetails from './data.js'

class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Intro'
  }

  renderIntroParagraphs = (paragraph, index) => {
    return <Paragraph key={`paragraph-${index}`} innerText={paragraph} />
  }

  render() {
    return (
      <ScrollView>
        <Text>{'introduction'.toLocaleUpperCase()}</Text>
        {introDetails.map(this.renderIntroParagraphs)}
      </ScrollView>
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

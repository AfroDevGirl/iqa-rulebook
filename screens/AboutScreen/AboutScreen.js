import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import _ from 'lodash'
import aboutDetails from './data.js'
import Paragraph from '../../components/Paragraph.js';

class AboutScreen extends React.Component {
  renderParagraph = (paragraph) => <Paragraph innerText={paragraph} />

  renderSection = (section) => {
    const header = _.capitalize(section[0])
    const paragraphs = section[1]

    return (
      <View>
        <Text>{header}</Text>
        {paragraphs.map(this.renderParagraph)}
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        {Object.entries(aboutDetails).map(this.renderSection)}
      </ScrollView>
    )
  }
}

export default AboutScreen

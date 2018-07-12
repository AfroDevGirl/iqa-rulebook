import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import _ from 'lodash'
import aboutDetails from './data.js'
import Paragraph from '../../components/Paragraph.js'
import SectionHeader from '../../components/SectionHeader.js'
import { createStackNavigator } from 'react-navigation'

class AboutScreenView extends React.PureComponent {
  renderParagraph = (paragraph, index) => <Paragraph key={`paragraph-${index}`} innerText={paragraph} />

  renderSection = (section) => {
    const header = _.capitalize(section[0])
    const paragraphs = section[1]

    return (
      <View key={`section-${section[0]}`}>
        <SectionHeader innerText={header} />
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

const AboutScreen = createStackNavigator(
  {
    About: {
      screen: AboutScreenView
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'About',
      headerMode: 'screen',
      headerTitle: 'About Screen',
      drawerLabel: 'About Drawer'
    })
  }
)

export default AboutScreen

import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import Paragraph from '../../components/Paragraph.js'
import { contributorData, creditsParagraphs } from './data.js'
import { createStackNavigator } from 'react-navigation'

export class CreditsScreenView extends React.PureComponent {
  renderViewSections = (section, index) => {
    return (
      <View key={`section-${index}`} style={{margin:10, alignItems: 'center'}}>
        {section.map((name, index) => <Text key={`section-${index} item-${index}`}>{name}</Text>)}
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={{padding:5}}>
        <Paragraph innerText={creditsParagraphs.paragraph1} />
        {contributorData.map(this.renderViewSections)}
        <Paragraph innerText={creditsParagraphs.paragraph2} />
        <Paragraph innerText={creditsParagraphs.paragraph3} />
        <Paragraph innerText={creditsParagraphs.paragraph4} />
        <Paragraph innerText={creditsParagraphs.paragraph5} />
      </ScrollView>
    )
  }
}

const CreditsScreen = createStackNavigator(
  {
    Credits: {
      screen: CreditsScreenView
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Credits',
      headerMode: 'screen',
      headerTitle: 'Credits Screen',
      drawerLabel: 'Credits Drawer',
      headerRight: (
        <Button onPress={() => navigation.navigate('Home')} title='Back To Home' />
      )
    })
  }
)
export default CreditsScreen

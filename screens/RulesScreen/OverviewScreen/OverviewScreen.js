import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import SectionHeader from '../../../components/SectionHeader.js'
import Paragraph from '../../../components/Paragraph.js'
import PositionsScreen from './PositionsScreen'

const overview = 'Quidditch is a gender integrated contact sport with a unique mix of elements from rugby, dodgeball, wrestling, flag football, and other sports. A quidditch team is made up of at least seven athletes who play with brooms between their legs at all times. While the game can appear chaotic to the casual observer, once familiar with the basic rules, quidditch is an exciting sport to watch and even more exciting to play.'

const positionsOverview = 'Each team has three chasers, two beaters, and one keeper in play at all times. Each team sends one seeker into the game at the end of the seeker floor.'

const gameplayOverview = 'Read more here >'

const foulOverview = 'From the time that players enter the player area for a game until after the game has ended, players are forbidden from taking certain actions called fouls. Players who commit a foul face different consequences depending on the severity of the offense.'

const fourMaxOverview = 'A quidditch game allows each team to have a maximum of four players, including the seeker once released, who identify as the same gender in active play on the field at the same time. The gender that a player identifies with is considered to be that player’s gender, which may or may not correspond with that person’s sex. This is commonly referred to as the “four maximum” rule. The IQA accepts those who don’t identify within the binary gender system and acknowledges that not all of our players identify as male or female.The IQA welcomes people of all identities and genders into our sport.'

const SECTIONS = [
  {
    header: 'Quidditch: An Overview',
    content: overview,
    callbackKey: null
  },
  {
    header: 'Positions Overview',
    content: positionsOverview,
    callbackKey: 'positions'
  },
  {
    header: 'Gameplay Overview',
    content: gameplayOverview,
    callbackKey: 'gameplay'
  },
  {
    header: 'Fouls Overview',
    content: foulOverview,
    callbackKey: 'fouls'
  },
  {
    header: 'The Four Maximum Gender Rule',
    content: fourMaxOverview,
    callbackKey: null
  }
]

export class OverviewScreenView extends React.Component {
  state = {
    activeSection: null
  }

  setActiveSection = (section) => this.setState({ activeSection: section })

  handleContentClick = (callbackKey) => {
    const { navigate } = this.props.navigation
    switch(callbackKey) {
      case 'positions':
        navigate('Positions')
        break;
      case 'gameplay':
        navigate('Gameplay')
        break;
      case 'fouls':
        navigate('Fouls')
        break;
      default:
        navigate('Overview')
        break;
    }
  }

  renderContent = (section, index) => {
    return (
      <TouchableHighlight key={`section-${index}`} onPress={() => this.handleContentClick(section.callbackKey)}>
        <View>
          <SectionHeader innerText={section.header} />
          <Paragraph innerText={section.content} />
        </View>
      </TouchableHighlight>
    )
  }

  render () {
    return (
      <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
        {SECTIONS.map(this.renderContent)}
      </ScrollView>
    )
  }
}

const OverviewScreen = createStackNavigator(
  {
    Overview: { screen: OverviewScreenView },
    Positions: PositionsScreen
  },
  {
    initialRouteName: 'Overview',
    headerMode: 'none'
  }
)
export default OverviewScreen

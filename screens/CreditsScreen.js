import React from 'react'
import { ScrollView, View, Text } from 'react-native'

const contributorData = [
  [
    'Michael Clark - Polner',
    'Kym Couch',
    'Clay Dockery'
  ],
  [
    'Xander Manshel',
    'Alex Benepe',
    'Jared Kowalczyk'
  ],
  [
    'Harrison Homel',
    'Chris Daw',
    'Nicholas Oughtibridge'
  ],
  [
    'Dan Hanson',
    'Crystal Hutcheson',
    'Mary Kimball',
    'Sarah Kneiling',
    'Jared Leggett',
    'Michael E.Mason',
    'Alicia Radford',
    'Eric Schnier',
    'Sarah Woolsey'
  ],
  [
    'Will Hack',
    'Jill Staniec',
    'Chris Beesley',
    'Eamonn Harrison',
    'James Hosford',
    'Ema Chiroma - Chao',
    'Devin Sandon',
    'Katie Stack',
    'James Burnett'
  ],
  [
    'Brian Gallaway',
    'Jelmer Lokman',
    'Nicole Hammer',
    'Matthew Guenzel',
    'Cory Faniel',
    'Pauline Raes',
    'Maria Belyaeva',
    'Ajantha Abey',
    'Max Martens'
  ]
]

class CreditsScreen extends React.PureComponent {
  renderViewSections = (section, index) => {
    return (
      <View key={`section-${index}`} style={{margin:10}}>
        {section.map((name, index) => <Text key={`section-${index} item-${index}`}>{name}</Text>)}
      </View>
    )
  }

  render () {
    return (
      <ScrollView>
        <Text>
          This rulebook was produced by and for the use of the International Quidditch Association. The IQA would like to thank the following individuals who have contributed to its development, both past and present.
        </Text>
        {contributorData.map(this.renderViewSections)}
      </ScrollView>
    )
  }
}

export default CreditsScreen

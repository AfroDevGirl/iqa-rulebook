import React from 'react'
import CreditsScreenView from '../screens/CreditsScreen/CreditsScreen.js'
import renderer from 'react-test-renderer'

describe('CreditsScreenView', () => {
  test('renders correctly', () => {
    const screen = renderer.create(<CreditsScreenView />).toJSON()
    expect(screen).toMatchSnapshot()
  })
})

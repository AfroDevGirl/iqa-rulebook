import React from 'react'
import HomeScreenView from '../screens/HomeScreen.js'
import renderer from 'react-test-renderer'

describe('HomeScreenView', () => {
  test('renders correctly', () => {
    const screen = renderer.create(<HomeScreenView />).toJSON()
    expect(screen).toMatchSnapshot()
  })
})

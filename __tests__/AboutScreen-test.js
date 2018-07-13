import React from 'react'
import AboutScreenView from '../screens/AboutScreen/AboutScreen.js'
import renderer from 'react-test-renderer'

describe('AboutScreenView', () => {
  test('renders correctly', () => {
    const screen = renderer.create(<AboutScreenView />).toJSON()
    expect(screen).toMatchSnapshot()
  })
})
